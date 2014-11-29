Scatterbrain.Views.SongShow = Backbone.CompositeView.extend ({
	template: JST["songs/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.lyricsView = new Scatterbrain.Views.SongLyricsShow({model: this.model});
		this.popupView = new Scatterbrain.Views.SongPopupShow({model: this.model});
	},
	
	events: {
		"click .not-popup": "hidePopup",
		"click button.create-segment": "createSegment"
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		this.addSubview('.lyrics', this.lyricsView);
		this.addSubview('.tag-popup', this.popupView);
		return this;
	},
	
	hidePopup: function () {
		$('.tag-popup').addClass("hidden");
	},
	
	createSegment: function () {
		this.lyricsView.createSegment();
	}
});