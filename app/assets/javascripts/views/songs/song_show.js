Scatterbrain.Views.SongShow = Backbone.CompositeView.extend ({
	template: JST["songs/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model, "sync", this.placeSegments);
		this.lyricsView = new Scatterbrain.Views.SongLyricsShow({model: this.model});
		this.popupView = new Scatterbrain.Views.SongPopupShow({model: this.model, collection: this.collection});
		this.emojiView = new Scatterbrain.Views.SongEmojiIndex({model: this.model, collection: this.collection});
	},
	
	events: {
		"click .tag-list": "createTagging",
		"click .taggable": "checkForSelection"
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		this.addSubview('.lyrics', this.lyricsView);
		this.addSubview('.tag-popup', this.popupView);
		this.addSubview('.song-emoji-index', this.emojiView);
		return this;
	},
	
	checkForSelection: function (event) {
		this.lyricsView.checkForSelection(event);
		
		if (event.target.className === "taggable") {
			this.emojiView.render();
		}
		
		if (event.target.className === "tagged") {
			this.revealPopup(event);
		}
	},
	
	revealPopup: function (event) {
		$('.tag-popup').removeClass('hidden');
		$('.segment-quote').html('"' + event.target.innerText + '"');
		this.selectedSegment = $(event.target).data('id');
		
		// also switch emoji index to segment data
		this.emojiView.renderSegmentCounts(this.selectedSegment);
	},
	
	createSegment: function () {
		this.lyricsView.createSegment();
	},
	
	placeSegments: function () {
		this.lyricsView.placeSegments();
	},
	
	createTagging: function (event) {
		event.preventDefault();
		var that = this;
		
		if (this.$('.tag-popup').hasClass('new-segment')) {
			//createSegment automatically creates associated tagging
			var newSegment = this.createSegment();
		} else {
			var tagId = $(event.target).data('id');
			var segmentId = this.selectedSegment;
			Scatterbrain.Collections.taggings.create({
				segment_id: segmentId,
				tag_id: tagId
			});
			$('.tag-popup').addClass('hidden');
		}
		this.model.fetch();
	}
});