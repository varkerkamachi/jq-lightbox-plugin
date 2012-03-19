(function( $ ){

  $.fn.ninjaBox = function( options ) {
			//set default options
	   $.fn.ninjaBox.defaultOptions = {
				mediaType: 'image', 
				height: 400, 
				width: 600,
				src: ''
			}//end default opts
		
			//override default options
		options = $.extend({}, $.fn.ninjaBox.defaultOptions, options);
		
			//save DOM elm as a jQ object...
		return this.each(function() {
			var $this = $(this);
			var height = options['height'];
			var width = options['width'];
			var src = options['src'];
			var innerDOM = '';
			var ww = '';
			var wh = '';
			$this.click(function(e) {
				e.preventDefault();
				ww = ($(window).width() - width)/2;
				wh = ($(window).height() - height)/2;
				$('#ninjaBox').css('display', 'block');
				$('#ninjaBox .inner_box').css('left', ww + 'px').css('top', wh + 'px');
				$('#ninjaBox .inner_box .inner_content').css('width', width);
				$('#ninjaBox .inner_box .inner_content').css('height', height);
				
				if( options['mediaType'] == 'video') {
					innerDOM += '<iframe width="' + width + '" height="' + height + '" src="' + src + '" frameborder="0" allowfullscreen></iframe>';
				}
				else {
					innerDOM += '<img src="' + src + '" />';
				}
				
				$('#ninjaBox .inner_box .inner_content').append(innerDOM);
			});
		});
		
		return this;
  };

	$.fn.ninjaBox.hide = function() {
		$('#ninjaBox').css('display', 'none');
		$('#ninjaBox .inner_box .inner_content').html('');
	};

})( jQuery );