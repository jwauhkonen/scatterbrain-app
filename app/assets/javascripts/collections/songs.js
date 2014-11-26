Scatterbrain.Collections.Songs = Backbone.Collection.extend ({
	url: "api/songs",
	model: Scatterbrain.Models.Song,
	
	getOrFetch: function (id) {
		var song = this.get(id);
		
		if (!song) {
			song = new Scatterbrain.Models.Song({id: id});
			song.fetch({
				success: function () {
					this.add(song);
				}.bind(this)
			});
		} else {
			song.fetch();
		}
		
		return song;
	}
});

Scatterbrain.Collections.songs = new Scatterbrain.Collections.Songs();