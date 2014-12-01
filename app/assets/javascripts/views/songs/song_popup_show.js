Scatterbrain.Views.SongPopupShow = Backbone.View.extend ({
	template: JST["songs/popup_show"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model, tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	}
	
});