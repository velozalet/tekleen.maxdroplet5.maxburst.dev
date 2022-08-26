<?php
/**
 * SCRIPTS/STYLES
 */
if ( ! function_exists( 'maxcanvas_child_scripts_styles' ) ):

  function maxcanvas_child_scripts_styles() {

    // Core styles
    //wp_enqueue_style('style-guide', get_stylesheet_directory_uri() . '/css/styleguide.css');
    //wp_enqueue_style('global', get_stylesheet_directory_uri() . '/css/globals.css');
    wp_enqueue_style('main-style', get_stylesheet_directory_uri() . '/css/main.css');
	  wp_enqueue_script('vue_js-script', get_stylesheet_directory_uri() . '/js/vue_3.2.36.js', array('main-script','global-script'), false, true);
    wp_enqueue_script('main-script', get_stylesheet_directory_uri() . '/js/main.js', array(), false, true);
    wp_enqueue_script('global-script', get_stylesheet_directory_uri() . '/js/script.js', array(), false, true);

	  wp_localize_script('global-script','globalData', array(
		  'nonce' => wp_create_nonce('wp_rest'),
		  'siteURL' => get_site_url(),
	  ));
    /*
    if (is_front_page()):
        wp_enqueue_style('home', get_stylesheet_directory_uri() . '/css/home.css');
    endif;
    if (is_page_template('templates/datasheet.php')):
        wp_enqueue_style('datasheet', get_stylesheet_directory_uri() . '/css/datasheet.css');
    endif;
    if (is_page_template('templates/filter-detail-masonry-template.php')):
        wp_enqueue_style('filter-detail-masonry-template', get_stylesheet_directory_uri() . '/css/filter-detail-masonry-template.css');
    endif;
    if (is_page_template('templates/filters.php')):
        wp_enqueue_style('filters', get_stylesheet_directory_uri() . '/css/filters.css');
    endif;
    if (is_page_template('templates/home-iphone.php')):
        wp_enqueue_style('home-iphone', get_stylesheet_directory_uri() . '/css/home-iphone.css');
    endif;
    if (is_page_template('templates/industrial-application-detail-1.php')):
        wp_enqueue_style('industrial-application-detail-1', get_stylesheet_directory_uri() . '/css/industrial-application-detail-1.css');
    endif;
    if (is_page_template('templates/industrial-application-detail.php')):
        wp_enqueue_style('industrial-application-detail', get_stylesheet_directory_uri() . '/css/industrial-application-detail.css');
    endif;
    if (is_page_template('templates/industrial-summary.php')):
        wp_enqueue_style('industrial-summary', get_stylesheet_directory_uri() . '/css/industrial-summary.css');
    endif;
    if (is_page_template('templates/irrigation-summary.php')):
        wp_enqueue_style('irrigation-summary', get_stylesheet_directory_uri() . '/css/irrigation-summary.css');
    endif;
    */

  }

endif;
add_action( 'wp_enqueue_scripts', 'maxcanvas_child_scripts_styles' , 20 );

//Add style for Admin Menu Post type and icons, theme settings
if( !function_exists( 'custom_admin_style' ) ):
	function custom_admin_style() {
		wp_enqueue_style('my-admin-style', get_stylesheet_directory_uri() . '/css/admin-style.css');
	}
	add_action('admin_enqueue_scripts', 'custom_admin_style');
endif;