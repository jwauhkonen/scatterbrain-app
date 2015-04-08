Scatterbrain.Views.HomeEmojiIndex = Backbone.View.extend ({
	template: JST["home_emoji_index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},
	
	events: {
		"mouseenter li.home-emoji": "revealEmojiName",
		"mouseleave li.home-emoji": "hideEmojiName",
		"click li.home-emoji": "navigateToTag"
	},
	
	render: function () {
		var renderedContent = this.template({tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	},
	
	revealEmojiName: function (event) {
		var emoji = $(event.currentTarget);
		var emojiId = emoji.data('id');
		var selector = '.home-emoji-name[data-id |= ' + emojiId + ']';
		$(selector).css('visibility', 'visible');
	},
	
	hideEmojiName: function (event) {
		var emoji = $(event.currentTarget);
		var emojiId = emoji.data('id');
		var selector = '.home-emoji-name[data-id |= ' + emojiId + ']';
		$(selector).css('visibility', 'hidden');
	},
	
	navigateToTag: function (event) {
		var emoji = $(event.currentTarget);
		var emojiId = emoji.data('id');
		var url = "tags/" + emojiId;
		Backbone.history.navigate(url, {trigger: true})
	}
	
});
