Scatterbrain.Views.SongsIndex = Backbone.View.extend ({
	template: JST["songs/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.sortSongsByTaggingCount);
		this.listenTo(this.collection, "sync", this.sortSongTags);
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
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
	},
	
	sortSongTags: function () {
		this.collection.forEach( function (song) {
			song.tags().models.sort( function (a, b) {
				if (song.taggingsByTagId(a.id).length > song.taggingsByTagId(b.id).length) {
					return -1;
				}
				if (song.taggingsByTagId(a.id).length < song.taggingsByTagId(b.id).length) {
					return 1;
				}
				return 0;
			});	
		})
	}
});