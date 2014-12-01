Scatterbrain.Views.SongShow = Backbone.CompositeView.extend ({
	template: JST["songs/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model, "sync", this.placeSegments);
		this.lyricsView = new Scatterbrain.Views.SongLyricsShow({model: this.model});
		this.popupView = new Scatterbrain.Views.SongPopupShow({model: this.model, collection: this.collection});
	},
	
	events: {
		"click .tag-list": "createTagging"
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		this.addSubview('.lyrics', this.lyricsView);
		this.addSubview('.tag-popup', this.popupView);
		return this;
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
			var newSegment = this.createSegment();
			
			// taggingscollection.create new tagging with pendingsegment's id and currentTarget's data id
		} else {
			// having clicked on a segment I will have assigned $('.tag-popup') a segment-id, then
			// make a new tagging in the same way.
		}
	}
});