Scatterbrain.Views.TagsIndex = Backbone.View.extend ({
	template: JST["tags/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.sortTagSongs);
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({tags: this.collection});
		this.$el.html(renderedContent);
		return this;
	},
	
	
	// This doesn't make any sense and needs to be fixed.
	sortTagSongs: function () {
		this.collection.forEach( function (tag) {
			tag.songs().models.sort( function (a, b) {
				debugger
				if (tag.taggingsBySongId(a.id).length > tag.taggingsBySongId(b.id).length) {
					return -1;
				}
				if (tag.taggingsBySongId(a.id).length < tag.taggingsBySongId(b.id).length) {
					return 1;
				}
				return 0;
			});
		})
	}
	
});