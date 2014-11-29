Scatterbrain.Views.SongLyricsShow = Backbone.View.extend ({
	template: JST["songs/lyrics_show"],
	
	initialize: function () {
		this.pendingSegment = new Scatterbrain.Models.Segment();
	},
	
	events: {
		"select .taggable": "handleSelect",
		
	},
	
	render: function () {
		var renderedContent = this.template({song: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	
	handleSelect: function (event) {
		event.preventDefault();
		console.log("you selected some text!");
		var text = window.getSelection().toString();
		console.log(text);
		$('.tag-popup').removeClass('hidden');
		
		var fullString = document.getElementsByClassName("taggable")[0].textContent;
		var range = window.getSelection();
		var startPosition = fullString.search(range);
		var quote = range.toString();
		console.log(quote);
		var endPosition = parseInt(quote.length) + parseInt(startPosition);
		this.pendingSegment.set({
			song_id: this.model.id, quote: quote, start_idx: startPosition, end_idx: endPosition
		})
	},
	
	createSegment: function () {
		// var fullString = document.getElementsByClassName("taggable")[0].textContent;
// 		var range = window.getSelection();
// 		var startPosition = fullString.search(range);
// 		var quote = range.toString();
// 		console.log(quote);
// 		var endPosition = parseInt(quote.length) + parseInt(startPosition);
		// Create new segment object from above properties
		// before this happens I need to set up associations between songs and segments?
		// also figure out where I'll want to do this. I'll probably want to make a box
		// pop up whenever text gets selected in the .taggable box.
		// for now I'll just put a button in there that creates the segment object.
		console.log("this will create a segment!");
		$('.tag-popup').addClass('hidden');
		debugger
		// Scatterbrain.Collections.segments.create({
		// 	song_id: this.model.id, quote: quote, start_idx: startPosition, end_idx: endPosition
		// })
			
		this.pendingSegment.save();
		Scatterbrain.Collections.segments.add(this.pendingSegment);
	}
	
});