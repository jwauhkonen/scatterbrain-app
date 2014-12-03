Scatterbrain.Views.HomePage = Backbone.CompositeView.extend ({
	template: JST["home_page"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.sortSongsByTaggingCount);
		this.listenTo(this.collection, "sync", this.render);
		this.songsView = new Scatterbrain.Views.HomeSongsIndex({collection: Scatterbrain.Collections.songs});
	},
	
	render: function () {
		var renderedContent = this.template({songs: this.collection});
		this.$el.html(renderedContent);
		this.addSubview('#home-songs-index', this.songsView);
		return this;
	},
	
	sortSongsByTaggingCount: function () {
		this.collection.models.sort( function(a, b) {
			if (a.taggings().length > b.taggings().length) {
				return -1;
			}
			if (a.taggings().length < b.taggings().length) {
				return 1;
			}
			return 0;
		})
	}
	
});