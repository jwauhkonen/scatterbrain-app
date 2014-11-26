Scatterbrain.Views.SongsIndex = Backbone.View.extend ({
	template: JST["songs/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({songs: this.collection});
		this.$el.html(renderedContent);
		return this;
	}
});