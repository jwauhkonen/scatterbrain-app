Scatterbrain.Collections.Segments = Backbone.Collection.extend ({
	url: "api/segments",
	model: Scatterbrain.Models.Segment
});

Scatterbrain.Collections.segments = new Scatterbrain.Collections.Segments();