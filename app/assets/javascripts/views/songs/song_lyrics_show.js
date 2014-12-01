Scatterbrain.Views.SongLyricsShow = Backbone.View.extend ({
	template: JST["songs/lyrics_show"],
	
	initialize: function () {
		this.pendingSegment = new Scatterbrain.Models.Segment();
	},
	
	events: {
		"click .taggable": "checkForSelection"
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	
	placeSegments: function () {
		// tagArea = document.getElementsByClassName("taggable")[0]
// 		this.model.segments().forEach( function (segment) {
// 			tagArea.setSelectionRange(segment.get('start_idx'), segment.get('end_idx'));
// 			tagText = window.getSelection();
//
// 			// get selection and convert selected area to highlighted thing w/ data id
//
//
// 		});

	},
	
	checkForSelection: function (event) {
		event.preventDefault();
		
		if (window.getSelection().toString().length > 0) {
			this.handleSelect();
		} else {
			$('.tag-popup').addClass('hidden')
		}; 
	},
	
	handleSelect: function () {
		$('.tag-popup').removeClass('hidden');
		
		var fullString = document.getElementsByClassName("taggable")[0].textContent;
		var range = window.getSelection();
		var startPosition = fullString.search(range);
		var quote = range.toString();
		var endPosition = parseInt(quote.length) + parseInt(startPosition);
		$('.segment-quote').html('"' + quote + '"');
	
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