Scatterbrain.Views.UsersIndex = Backbone.View.extend ({
	template: JST["users/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({users: this.collection});
		this.$el.html(renderedContent);
		return this;
	}
	
});