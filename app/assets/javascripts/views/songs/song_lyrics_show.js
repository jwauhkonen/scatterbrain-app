Scatterbrain.Views.SongLyricsShow = Backbone.View.extend ({
	template: JST["songs/lyrics_show"],
	
	initialize: function () {
		
	},
	
	events: {
		"select .taggable": "handleSelect"
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	
	handleSelect: function (event) {
		event.preventDefault();
		console.log("you selected some text!");
	}
	
	
});