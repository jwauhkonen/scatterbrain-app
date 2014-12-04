Scatterbrain.Views.SongEmojiIndex = Backbone.View.extend ({
	template: JST["songs/song_emoji_index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	}
	
});