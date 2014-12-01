Scatterbrain.Collections.Taggings = Backbone.Collection.extend ({
	url: "api/taggings",
	model: Scatterbrain.Models.Tagging,
});

Scatterbrain.Collections.taggings = new Scatterbrain.Collections.Taggings();