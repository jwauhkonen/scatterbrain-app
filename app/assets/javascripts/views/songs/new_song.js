Scatterbrain.Views.NewSong = Backbone.View.extend ({
	template: JST["songs/new"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	},
	
	events: {
		"click .add-song-button": "validateInput"
	},
	
	validateInput: function () {
		var songTitle = $(".new-song-title").val();
		var songLyrics = $(".new-song-lyrics").val();
		
		if (songTitle == "" || songLyrics == "") {
			alert("Title field or lyrics field can't be empty!");
		} else {
			this.saveSong(songTitle, songLyrics);
		}
	},
	
	saveSong: function (title, lyrics) {
		var newSong = new Scatterbrain.Models.Song({title: title, lyrics: lyrics, artist_id: 0});
		var songs = this.collection;
		
		newSong.save({}, {
			success: function () {
				songs.add(newSong);
				window.location.href = "#/songs/" + newSong.id;
			}
		})
	}
	
	
});