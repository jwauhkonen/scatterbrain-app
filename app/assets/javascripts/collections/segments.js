Scatterbrain.Collections.Segments = Backbone.Collection.extend ({
	url: "api/segments",
	model: Scatterbrain.Models.Segment,
	
	comparator: function (a, b) {
		a = a.get('start_idx');
		b = b.get('start_idx');
		return a > b ? -1
			 : a < b ?  1
			 :          0;
	}
});

Scatterbrain.Collections.segments = new Scatterbrain.Collections.Segments();