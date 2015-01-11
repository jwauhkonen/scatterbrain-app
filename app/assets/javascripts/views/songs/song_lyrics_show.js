Scatterbrain.Views.SongLyricsShow = Backbone.View.extend ({
	template: JST["songs/lyrics_show"],
	
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
		$seg.addClass('tagged');
		$seg.attr('data-id', segment.get('id'));
		
		range.deleteContents();
		range.insertNode($seg[0]);		
	},
	
	placeSegments: function () {
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
		var fullString = document.getElementsByClassName("taggable")[0].textContent;
		var range = window.getSelection();
		var startPosition = range.baseOffset + this.siblingOffset(range.anchorNode.previousSibling);
		var quote = range.toString();
		var endPosition = parseInt(quote.length) + parseInt(startPosition);
		$('.segment-quote').html('"' + quote + '"');
		
		var overlap = false;
		this.model.segments().models.forEach( function(segment) {
			if ((segment.get('end_idx') > startPosition) && (segment.get('start_idx') < startPosition)) {
				overlap = true;
			}
			if ((segment.get('start_idx') > startPosition) && (segment.get('start_idx') < endPosition)) {
				overlap = true;
			}
		});
		
		if (overlap) {
			$('.tag-popup').addClass('hidden');
		} else {
			$('.tag-popup').removeClass('hidden').addClass('new-segment');
		
			this.pendingSegment = new Scatterbrain.Models.Segment();
		
			this.pendingSegment.set({
				song_id: this.model.id, 
				quote: quote, 
				start_idx: startPosition, 
				end_idx: endPosition
			});	
		
		}
		
	},
	
	siblingOffset: function (node) {
		if (node === null) {
			return 0;
		}
		
		if (node.previousSibling === null) {
			return node.textContent.length;
		}
		
		return node.textContent.length + this.siblingOffset(node.previousSibling);
	},
	
	createSegment: function () {
		$('.tag-popup').addClass('hidden').removeClass('new-segment');
		var newSegment = this.pendingSegment;
		var tagId = $(event.target).data('id');
		newSegment.save({}, {
			success: function () {
				Scatterbrain.Collections.taggings.create({
					segment_id: newSegment.id,
					tag_id: tagId
				});
			}
		});
		Scatterbrain.Collections.segments.add(newSegment);
		
		// fetch this.model in order to trigger page render and place segments
		this.model.fetch();
	}
	
});