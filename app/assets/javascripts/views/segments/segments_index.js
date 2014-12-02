Scatterbrain.Views.SegmentsIndex = Backbone.View.extend ({
	template: JST["segments/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.sortSegmentTags);
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({segments: this.collection});
		this.$el.html(renderedContent);
		return this;
	},
	
	sortSegmentTags: function () {
		this.collection.forEach( function (segment) {
			segment.tags().models.sort(function (a, b) {
				if (segment.taggingsByTagId(a.id).length > segment.taggingsByTagId(b.id).length) {
					return -1;
				}
				if (segment.taggingsByTagId(a.id).length < segment.taggingsByTagId(b.id).length) {
					return 1;
				}
				return 0;
			});	
		})
	}
	
	// do sort tags here, similar to the other thing, then calculate the top tag in a similar way.
	// I might need to also make a tagsByTaggingId or something.
});