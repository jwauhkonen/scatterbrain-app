Scatterbrain.Views.TagsIndex = Backbone.View.extend ({
	template: JST["tags/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.sortTagSegments);
		this.listenTo(this.collection, "sync", this.sortTagSongs);
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	},
	
	sortTagSongs: function () {
		this.collection.forEach( function (tag) {
			tag.songs().models.sort( function (a, b) {
				
				if (tag.taggingsBySongId(a.id).length > tag.taggingsBySongId(b.id).length) {
					return -1;
				}
				if (tag.taggingsBySongId(a.id).length < tag.taggingsBySongId(b.id).length) {
					return 1;
				}
				return 0;
			});
		})
	},
	
	sortTagSegments: function () {
		this.collection.forEach( function (tag) {
			tag.segments().models.sort( function (a, b) {
				
				if (tag.taggingsBySegmentId(a.id).length > tag.taggingsBySegmentId(b.id).length) {
					return -1;
				}
				if (tag.taggingsBySegmentId(a.id).length < tag.taggingsBySegmentId(b.id).length) {
					return 1;
				}
				return 0;
			});
		})
	}
	
});