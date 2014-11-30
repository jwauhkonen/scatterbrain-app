Scatterbrain.Views.SongLyricsShow = Backbone.View.extend ({
	template: JST["songs/lyrics_show"],
	
	initialize: function () {
		this.pendingSegment = new Scatterbrain.Models.Segment();
	},
	
	events: {
		"select .taggable": "handleSelect"
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		this.placeSegments();
		return this;
	},
	
	placeSegments: function () {
		console.log(this.model.segments());
	},
	
	handleSelect: function (event) {
		event.preventDefault();
		$('.tag-popup').removeClass('hidden');
		
		var fullString = document.getElementsByClassName("taggable")[0].textContent;
		var range = window.getSelection();
		var startPosition = fullString.search(range);
		var quote = range.toString();
		var endPosition = parseInt(quote.length) + parseInt(startPosition);
	
		this.pendingSegment.set({
			song_id: this.model.id, quote: quote, start_idx: startPosition, end_idx: endPosition
		})
	},
	
	createSegment: function () {
		$('.tag-popup').addClass('hidden');
		this.pendingSegment.save();
		Scatterbrain.Collections.segments.add(this.pendingSegment);
		// getting 500 server error for some reason, but it still saves successfully
	}
	
});