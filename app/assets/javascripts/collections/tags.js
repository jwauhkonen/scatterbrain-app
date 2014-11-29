Scatterbrain.Collections.Tags = Backbone.Collection.extend ({
	url: "api/tags",
	model: Scatterbrain.Models.Tag,
	
	getOrFetch: function (id) {
		var tag = this.get(id);
		
		if (!tag) {
			tag = new Scatterbrain.Models.Tag({id: id});
			tag.fetch({
				success: function () {
					this.add(tag);
				}.bind(this)
			});
		} else {
			tag.fetch();
		}
		
		return tag;
	}
});

Scatterbrain.Collections.tags = new Scatterbrain.Collections.Tags();