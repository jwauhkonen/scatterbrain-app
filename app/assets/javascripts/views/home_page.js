Scatterbrain.Views.HomePage = Backbone.CompositeView.extend ({
	template: JST["home_page"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		emojify.run();
		return this;
	}
	
	
	
	
	
});