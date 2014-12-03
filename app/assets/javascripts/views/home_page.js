Scatterbrain.Views.HomePage = Backbone.CompositeView.extend ({
	template: JST["home_page"],
	
	initialize: function () {
		this.songsView = new Scatterbrain.Views.HomeSongsIndex({collection: Scatterbrain.Collections.songs});
	},
	
	render: function () {
		var renderedContent = this.template({songs: this.collection});
		this.$el.html(renderedContent);
		this.addSubview('#home-songs-index', this.songsView);
		return this;
	}

});