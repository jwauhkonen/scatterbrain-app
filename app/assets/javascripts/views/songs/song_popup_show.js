Scatterbrain.Views.SongPopupShow = Backbone.View.extend ({
	template: JST["songs/popup_show"],
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	
});