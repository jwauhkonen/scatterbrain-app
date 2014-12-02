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
	
	tags: function () {
		if (!this._tags) {
			this._tags = new Scatterbrain.Collections.Tags([], {segment: this});
		}
		
		return this._tags;
	},
	
	parse: function (response) {
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