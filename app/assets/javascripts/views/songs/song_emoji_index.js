Scatterbrain.Views.SongEmojiIndex = Backbone.View.extend ({
	template: JST["songs/song_emoji_index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.model, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({segmentId: null, song: this.model, tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	},
	
	renderSegmentCounts: function (segmentId) {
		var renderedContent = this.template({segmentId: segmentId, song: this.model, tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	}
	
});