Scatterbrain.Models.Tag = Backbone.Model.extend ({
	urlRoot: "api/tags",
	
	segments: function () {
		if (!this._segments) {
			this._segments = new Scatterbrain.Collections.Segments([], {tag: this});
		}
		
		return this._segments;
	},
	
	songs: function () {
		if (!this._songs) {
			this._songs = new Scatterbrain.Collections.Songs([], {tag: this});
		}
		
		return this._songs;
	},
	
	taggings: function () {
		if (!this._taggings) {
			this._taggings = new Scatterbrain.Collections.Taggings([], {tag: this});
		}
		
		return this._taggings;
	},
	
	taggingsBySongId: function (id) {
		return this.taggings().where({song_id: id})
	},
	
	parse: function (response) {
		if (response.segments) {
			this.segments().set(response.segments, {parse: true});
			delete response.segments;
		}
		
		if (response.songs) {
			this.songs().set(response.songs, {parse: true});
			delete response.songs;
		}
		
		if (response.taggings) {
			this.taggings().set(response.taggings, {parse: true});
			delete response.taggings;
		}
		return response;
	}
	
});