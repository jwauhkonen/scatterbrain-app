Scatterbrain.Views.TagsIndex = Backbone.View.extend ({
	template: JST["tags/index"],
	
	initialize: function () {
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
	}
	
});