Scatterbrain.Views.SongEmojiIndex = Backbone.View.extend ({
	template: JST["songs/song_emoji_index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.model, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model, tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	}
	
});