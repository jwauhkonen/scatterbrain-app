Scatterbrain.Views.SegmentsIndex = Backbone.View.extend ({
	template: JST["segments/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({segments: this.collection});
		this.$el.html(renderedContent);
		return this;
	},
	
	// do sort tags here, similar to the other thing, then calculate the top tag in a similar way.
	// I might need to also make a tagsByTaggingId or something.
});