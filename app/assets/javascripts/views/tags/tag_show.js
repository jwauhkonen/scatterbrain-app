Scatterbrain.Views.TagShow = Backbone.View.extend ({
	template: JST["tags/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render)
	},
	
	render: function () {
		var renderedContent = this.template({tag: this.model});
		this.$el.html(renderedContent);
		return this;
	}
});