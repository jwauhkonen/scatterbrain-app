Scatterbrain.Views.SongShow = Backbone.CompositeView.extend ({
	template: JST["songs/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model, "sync", this.placeSegments)
		this.lyricsView = new Scatterbrain.Views.SongLyricsShow({model: this.model});
		this.popupView = new Scatterbrain.Views.SongPopupShow({model: this.model});
	},
	
	events: {
		"click button.create-segment": "createSegment"
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
	}
});