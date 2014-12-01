Scatterbrain.Views.SongLyricsShow = Backbone.View.extend ({
	template: JST["songs/lyrics_show"],
	
	initialize: function () {
	},
	
	events: {
		"click .taggable": "checkForSelection"
	},
	
	render: function () {
		var renderedContent = this.template({
			song: this.model
		});
		this.$el.html(renderedContent);
		return this;
	},
	
	placeSegment: function (segment) {
		var tagArea = this.$('.taggable')[0].firstChild;
		var range = document.createRange();
		range.setStart(tagArea, segment.get('start_idx'));
		range.setEnd(tagArea, segment.get('end_idx'));
		
		var $seg = $('<a>');
		$seg.text(segment.get('quote'));
		// segNode.appendChild(document.createTextNode(segment.get('quote')));
		// segNode.setAttribute('class', 'tagged');
		// segNode.setAttribute('data-id', segment.id);
		$seg.addClass('tagged');
		$seg.data('id', segment.get('id'));
		
		range.deleteContents();
		range.insertNode($seg[0]);

		// get selection and convert selected area to highlighted thing w/ data id
		
	},
	
	placeSegments: function () {
		// var tagArea = document.getElementsByClassName("taggable")[0].firstChild
		this.model.segments().each(this.placeSegment.bind(this));
	},
	
	checkForSelection: function (event) {
		event.preventDefault();
		
		if (window.getSelection().toString().length > 0) {
			// if there is a selection
			this.handleSelect();
		} else {
			// if there is just a click
			var $popup = $('.tag-popup');
			$popup.addClass('hidden')
			if ($popup.hasClass('new-segment')) {
				$popup.removeClass('new-segment');
			};
		}; 
	},
	
	handleSelect: function () {
		$('.tag-popup').removeClass('hidden').addClass('new-segment');
		
		var fullString = document.getElementsByClassName("taggable")[0].textContent;
		var range = window.getSelection();
		var startPosition = fullString.search(range);
		var quote = range.toString();
		var endPosition = parseInt(quote.length) + parseInt(startPosition);
		$('.segment-quote').html('"' + quote + '"');
		
		this.pendingSegment = new Scatterbrain.Models.Segment();
		
		this.pendingSegment.set({
			song_id: this.model.id, 
			quote: quote, 
			start_idx: startPosition, 
			end_idx: endPosition
		})
		
	},
	
	createSegment: function (options) {
		console.log('creating segment')
		$('.tag-popup').addClass('hidden').removeClass('new-segment');
		// this.pendingSegment.save({});
		var newSegment = Scatterbrain.Collections.segments.create(this.pendingSegment, options);
		
		// fetch this.model in order to trigger page render and place segments
		this.model.fetch();
		// getting 500 server error for some reason, but it still saves successfully
		return newSegment;
	}
	
});