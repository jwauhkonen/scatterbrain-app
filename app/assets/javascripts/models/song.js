Scatterbrain.Models.Song = Backbone.Model.extend ({
	urlRoot: "api/songs",
	
	segments: function () {
		if(!this._segments) {
			this._segments = new Scatterbrain.Collections.Segments([], {song: this});
		}

		return this._segments;
	},
	
	taggings: function () {
		if (!this._taggings) {
			this._taggings = new Scatterbrain.Collections.Taggings([], {song: this});
		}
		
		return this._taggings;
	},
	
	tags: function () {
		if (!this._tags) {
			this._tags = new Scatterbrain.Collections.Tags([], {song: this});
		}
		
		return this._tags;
	},
	
	parse: function (response) {
		if (response.segments) {
			this.segments().set(response.segments, {parse: true});
			delete response.segments;
		}
		
		if (response.taggings) {
			this.taggings().set(response.taggings, {parse: true});
			delete response.taggings;
		}
		
		if (response.tags) {
			this.tags().set(response.tags, {parse: true});
			delete response.tags;
		}
		
		return response;
	}
});