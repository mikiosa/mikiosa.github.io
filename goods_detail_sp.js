jQuery(document).ready(function() {
	
	jQuery('div.etc_goodsimg_ .thumbs li').each(function(e) {
		jQuery(this).attr('data-link-slide',e)
	});

    var window_width = $(window).width();
    $('#gallery #entry ul.thumbs li a').css('height', window_width);

	  var sliderImg = jQuery('div.etc_goodsimg_ .thumbs li').length;
	
	  if(sliderImg > 1){
		var slider=jQuery('div#entry .thumbs').bxSlider({
			    auto: false,
				controls: true,
            //slideWidth: img_width,
				minSlides: 1,
				maxSlides: 1,
				pager:true,
				  onSlideBefore: function($slideElement, oldIndex, newIndex){
					currentslidename= $slideElement.attr('name')
				}
			});
		}
	  if(sliderImg > 4){
		var slider=jQuery('div.etc_goodsimg_ .thumbs').bxSlider({
			    auto: false,
				controls: true,
            //slideWidth: img_width,
				minSlides: 4,
				maxSlides: 4,
				pager:false,
				  onSlideBefore: function($slideElement, oldIndex, newIndex){
					currentslidename= $slideElement.attr('name')
				}
			});
		}
		
	jQuery(document).on('click','div.etc_goodsimg_ .thumbs li', function(e) {
		e.preventDefault();
		var num = jQuery(this).attr('data-link-slide');
		jQuery('div#entry .bx-pager-item a[data-slide-index='+num+']').click();
	});

});
