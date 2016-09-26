$(function() {

	var scrollset = $(window).height() - $('.main_header').height();
	var header_holder = $('.header_holder');

	// Mobile Menu
	$('.header_parent_wrap').append('<div class="mobile-navigation-toggle"><div class="toggle-box"><div class="toggle-inner"></div></div></div>');
	$('.mobile_menu_wrapper').html($('.main_header nav').html());

	$('.mobile-navigation-toggle').on("click", function() {
		$('.mobile_menu_wrapper').slideToggle(300);
		$(this).toggleClass("is-active");
	});

	$('.mobile_menu_wrapper li').find('a').on("click", function() {
		$(this).parent().toggleClass("showsub").children('.sub-nav').slideToggle();
	});


	// Fixed & Transparent
	var body = $('body');
	if ($('.sticky_menu_enabled').size() > 0 && $(window).width() > 900) {
		if ($('.strip_template').size() > 0) {
			var scrollset = $(window).height() - $('.main_header').height();
		} else {
			header_holder.show();
			body.addClass('fixed_show');
			scrollset = 0;
		}
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > scrollset) {
				body.addClass('small_sticky');
				if ($('.strip_template').size() > 0) {
					header_holder.show();
					body.addClass('fixed_show');
				}
			} else {
				body.removeClass('small_sticky');
				if ($('.strip_template').size() > 0) {
					header_holder.hide();
					body.removeClass('fixed_show');
				}
			}
		});
	}


	// Accordion & Toggle
	if (jQuery('.module_accordion').size() > 0 || jQuery('.module_toggle').size() > 0) {
		jQuery('.shortcode_accordion_item_title').on('click',function(){
			if (!jQuery(this).hasClass('state-active')) {
				jQuery(this).parents('.shortcode_accordion_shortcode').find('.shortcode_accordion_item_body').slideUp('fast',function(){
					// content_update();
				});
				jQuery(this).next().slideToggle('fast',function(){
					// content_update();
				});
				jQuery(this).parents('.shortcode_accordion_shortcode').find('.state-active').removeClass('state-active');
				jQuery(this).addClass('state-active');
			}
		});
		jQuery('.shortcode_toggles_item_title').on('click',function(){
			jQuery(this).next().slideToggle('fast',function(){
				// content_update();
			});
			jQuery(this).toggleClass('state-active');
		});

		jQuery('.shortcode_accordion_item_title.expanded_yes, .shortcode_toggles_item_title.expanded_yes').each(function( index ) {
			jQuery(this).next().slideDown('fast',function(){
				// content_update();
			});
			jQuery(this).addClass('state-active');
		});
	}

});
