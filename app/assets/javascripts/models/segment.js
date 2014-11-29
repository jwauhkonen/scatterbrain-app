Scatterbrain.Models.Segment = Backbone.Model.extend ({
	urlRoot: "api/segments",
	
	// song: function () {
	// 	if(!this._song) {
	// 		this._song = new Scatterbrain.Collections.Songs([], {segment: this});
	// 	}
	//
	// 	return this._song;
	// },
	//
	//     parse: function (response) {
	//        if(response.song) {
	//          this.song().set(response.song, { parse: true });
	//          delete response.song;
	//        }
	//        return response;
	//     }
});