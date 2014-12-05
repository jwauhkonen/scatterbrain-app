Scatterbrain.Views.SongEmojiIndex = Backbone.View.extend ({
	template: JST["songs/song_emoji_index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.model, "sync", this.render);
	},
	
	events: {
		"mouseenter li.song-emoji": "revealEmojiName",
		"mouseleave li.song-emoji": "hideEmojiName"
	},
	
	render: function () {
		this.segmentId = null
		var renderedContent = this.template({segmentId: this.segmentId, song: this.model, tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	},
	
	renderSegmentCounts: function (segmentId) {
		this.segmentId = segmentId
		var renderedContent = this.template({segmentId: this.segmentId, song: this.model, tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	},
	
	revealEmojiName: function (event) {
		var emoji = $(event.currentTarget);
		var emojiId = emoji.data('id');
		var selector = '.song-emoji-count[data-id |= ' + emojiId + ']';
		$(selector).html(this.collection.get(emojiId).get('name'));
	},

	hideEmojiName: function (event) {
		var emoji = $(event.currentTarget);
		var emojiId = emoji.data('id');
		var song = this.model;
		var tag = this.collection.get(emojiId);
		var selector = '.song-emoji-count[data-id |= ' + emojiId + ']';
		if (this.segmentId !== null) {
			$(selector).html(new Scatterbrain.Collections.Taggings(song.taggingsBySegmentId(this.segmentId)).where({tag_id: tag.id}).length);
		} else {
			$(selector).html(song.taggingsByTagId(tag.id).length);
		}
	}
	
});