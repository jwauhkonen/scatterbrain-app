Scatterbrain.Models.Tag = Backbone.Model.extend ({
	urlRoot: "api/tags",
	
	segments: function () {
		if (!this._segments) {
			this._segments = new Scatterbrain.Collections.Segments([], {tag: this});
		}
		
		return this._segments;
	},
	
	parse: function (response) {
		if (response.segments) {
			this.segments().set(response.segments, {parse: true});
			delete response.segments;
		}
		return response;
	}
	
});