Scatterbrain.Views.SongLyricsShow = Backbone.View.extend ({
	template: JST["songs/lyrics_show"],
	
	initialize: function () {
		
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
		tagArea = document.getElementsByClassName("taggable")[0].firstChild
		this.model.segments().forEach( function (segment) {
			range = document.createRange();
			range.setStart(tagArea, segment.get('start_idx'));
			range.setEnd(tagArea, segment.get('end_idx'));
			
			segNode = document.createElement("a");
			segNode.appendChild(document.createTextNode(segment.get('quote')));
			segNode.setAttribute('class', 'tagged');
			segNode.setAttribute('data-id', segment.id);
			range.deleteContents();
			range.insertNode(segNode);

			// get selection and convert selected area to highlighted thing w/ data id


		});

	},
	
	checkForSelection: function (event) {
		event.preventDefault();
		
		if (window.getSelection().toString().length > 0) {
			this.handleSelect();
		} else {
			$('.tag-popup').addClass('hidden')
			if ($('.tag-popup').hasClass('new-segment')) {
				$('.tag-popup').removeClass('new-segment');
			};
		}; 
	},
	
	handleSelect: function () {
		$('.tag-popup').removeClass('hidden');
		$('.tag-popup').addClass('new-segment');
		
		var fullString = document.getElementsByClassName("taggable")[0].textContent;
		var range = window.getSelection();
		var startPosition = fullString.search(range);
		var quote = range.toString();
		var endPosition = parseInt(quote.length) + parseInt(startPosition);
		$('.segment-quote').html('"' + quote + '"');
		
		this.pendingSegment = new Scatterbrain.Models.Segment();
		debugger
		this.pendingSegment.set({
			song_id: this.model.id, quote: quote, start_idx: startPosition, end_idx: endPosition
		})
		
	},
	
	createSegment: function () {
		console.log('creating segment')
		$('.tag-popup').addClass('hidden');
		$('.tag-popup').removeClass('new-segment');
		this.pendingSegment.save({});
		Scatterbrain.Collections.segments.add(this.pendingSegment);
		this.model.fetch();
		// getting 500 server error for some reason, but it still saves successfully
	}
	
});