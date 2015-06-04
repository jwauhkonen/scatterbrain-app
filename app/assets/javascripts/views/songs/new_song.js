Scatterbrain.Views.NewSong = Backbone.View.extend ({
	template: JST["songs/new"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}
	
	
	
});