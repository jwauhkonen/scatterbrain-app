Scatterbrain.Views.SegmentsIndex = Backbone.View.extend ({
	template: JST["segments/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.sortSegmentsByTaggingCount)
		this.listenTo(this.collection, "sync", this.sortSegmentTags);
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({segments: this.collection});
		this.$el.html(renderedContent);
		return this;
	},
	
	sortSegmentsByTaggingCount: function () {
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