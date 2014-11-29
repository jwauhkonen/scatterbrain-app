Scatterbrain.Views.SongPopupShow = Backbone.View.extend ({
	template: JST["songs/popup_show"],
	
	events: {
		// "click button.create-segment": "createSegment"
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	
	createSegment: function () {
		console.log("this did something");
	}
});