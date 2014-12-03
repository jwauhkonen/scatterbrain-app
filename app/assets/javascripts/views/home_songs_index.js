Scatterbrain.Views.HomeSongsIndex = Backbone.View.extend ({
	template: JST["home_songs_index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.sortSongsByTaggingCount);
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		this.collection.reset(this.collection.first(5))
		var renderedContent = this.template({songs: this.collection});
		this.$el.html(renderedContent);
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