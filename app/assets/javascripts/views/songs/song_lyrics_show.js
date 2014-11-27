Scatterbrain.Views.SongLyricsShow = Backbone.View.extend ({
	template: JST["songs/lyrics_show"],
	
	events: {
		"select p": "handleSelect"
		// this works for click, how does select work?
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	
	handleSelect: function (event) {
		console.log("you selected some text!")
	}
	
});