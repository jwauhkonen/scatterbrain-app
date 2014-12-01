Scatterbrain.Models.Segment = Backbone.Model.extend ({
	urlRoot: "api/segments",
	
	taggings: function () {
		if (!this._taggings) {
			this._taggings = new Scatterbrain.Collections.Taggings([], {segment: this});
		}
		
		return this._taggings;
	},
	
	taggingsByTagId: function (id) {
		return this.taggings().where({tag_id: id});
	},
	
	parse: function (response) {
		if (response.taggings) {
			this.taggings().set(response.taggings, {parse: true});
			delete response.taggings;
		}
		return response;
	}
});