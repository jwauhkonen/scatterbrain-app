Scatterbrain.Views.SongShow = Backbone.CompositeView.extend ({
	template: JST["songs/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render)
	},
	
	addLyrics: function () {
		var view = new Scatterbrain.Views.SongLyricsShow({model: this.model});
		this.addSubview('.lyrics', view);
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		this.addLyrics();
		return this;
	}
});