Scatterbrain.Models.Song = Backbone.Model.extend ({
	urlRoot: "api/songs",
	
	segments: function () {
		if(!this._segments) {
			this._segments = new Scatterbrain.Collections.Segments([], {song: this});
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