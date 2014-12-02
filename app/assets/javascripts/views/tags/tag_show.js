Scatterbrain.Views.TagShow = Backbone.View.extend ({
	template: JST["tags/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.sortTagSegments();
	},
	
	render: function () {
		var renderedContent = this.template({tag: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	
	sortTagSegments: function () {
		var tag = this.model;
		debugger
		tag.segments().sort(function (a, b) {
			if (a.taggingsByTagId(tag.id).length > b.taggingsByTagId(tag.id).length) {
				return 1;
			}
			if (a.taggingsByTagId(tag.id).length < b.taggingsByTagId(tag.id).length) {
				return -1;
			}
			return 0;
		});
		debugger
	}
});