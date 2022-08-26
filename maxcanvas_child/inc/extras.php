<?php
/**
 * EXTRAS
 */

// Removes access to Appearance>Editor for admin
function remove_editor_menu() {
  remove_action('admin_menu', '_add_themes_utility_last', 101);
}
add_action('_admin_menu', 'remove_editor_menu', 1);


// ENABLE THIS TO REMOVE ADMIN BAR WHEN LOGGED IN ON THE SITE
// add_filter('wp_head','custom_admin_bar_style_frontend', 99);
function custom_admin_bar_style_frontend() {
    if ( is_super_admin() ) {
        echo '<style type="text/css" media="screen">
                    html { margin-top: 32px !important; height: calc(100% - 32px); }
                    * html body { margin-top: 32px !important; }
                    @media screen and ( max-width: 782px ) {
                        html { margin-top: 46px !important; }
                        * html body { margin-top: 46px !important; height: calc(100% - 32px); }
                    }
                  </style>';
    } else {
        echo '<style type="text/css" media="screen">
                  html { margin-top: 0px !important; }
                  * html body { margin-top: 0px !important; }
                  </style>';
    }
}

function add_additional_class_on_li($classes, $item, $args) {
    if(isset($args->add_li_class)) {
        $classes[] = $args->add_li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);

function add_menu_link_class( $atts, $item, $args ) {
  if (property_exists($args, 'link_class')) {
  	$atts['class'] = $args->link_class;
  }
  return $atts;
}
add_filter( 'nav_menu_link_attributes', 'add_menu_link_class', 1, 3 );

class Custom_Submenu_Container extends Walker_Nav_Menu
{
    function start_lvl( &$output, $depth = 0, $args = array() ) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<div class='menu__dropdown'><div class='menu__grid'><div class='menu__col'><ul class='menu__sub-list'>\n";
    }
    function end_lvl( &$output, $depth = 0, $args = array() ) {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul></div></div></div>\n";
    }
}


/** Var dump description
 * @param $data
 */
function dd($data){
	echo '<pre>', var_dump($data), '</pre>';
}

/** Get a numbers from string and implode result to new string
 * @param $str
 * @return string
 */
function get_numerics($str) {
	preg_match_all('/\d+/', $str, $matches);
	return implode("",$matches[0]);
}

/** Get needs posts
 * @param $post_type(str) - slug of custom Post Type or simple posts
 * @param $numberposts(int) - number of posts shown
 * @param $category(int) - Category ID to get posts from
 * @param $category_name(str) - Show posts only from this category (the name or alternative name (slug) of the category is indicated)
 * @param $orderby(str) - Sort by: author/date/ID/rand/title/type....
 * @param $order(str) - Sort direction: 'ASC' - from smallest to largest; 'DESC' - from largest to smallest
 */
function get_needs_post($post_type, $numberposts, $category, $category_name, $orderby, $order){
	$posts = get_posts( array(
		'numberposts' => $numberposts,
		'category'    => $category,
		'category_name' => $category_name,
		'orderby'     => $orderby,
		'order'       => $order,
		'include'     => array(),
		'exclude'     => array(),
		'meta_key'    => '',
		'meta_value'  =>'',
		'post_type'   => $post_type,
		'suppress_filters' => false,
	) );
	return $posts;
}

/** Сut a string to a specific length
@param $string(string) - incoming string
@param $length(int) - the length of the string you want to have
@return (string) - output string
 */
function cut_string($string,$length){
	$string = strip_tags($string);
	$string = mb_substr($string, 0, $length,'UTF-8');
	$position = mb_strrpos($string, ' ', 'UTF-8');
	$string = mb_substr($string, 0, $position, 'UTF-8');
	$string = rtrim($string, "?!,.-");
	$string .= ' ...';
	return $string;
} //__/function cut_string()

/** Get all categories of Custom Post Type
 * @param $taxonomy (string) - The name of the registered taxonomy whose categories needed to get
 * @param $orderby (string) - Sort by: author/date/ID/rand/title/name/type....
 * @param $order (string) - Sort direction: 'ASC' - from smallest to largest; 'DESC' - from largest to smallest
 * @return array
 */
function get_categories_of_cpt($taxonomy, $orderby, $order){
	$args = array(
		'taxonomy' => $taxonomy,
		'orderby' => $orderby,
		'order'   => $order
	);
	return get_categories($args);
}

/** Allow uploading DWG files*/
function custom_upload_mimes ( $existing_mimes=array() ) {
	$existing_mimes['dwg'] = 'image/vnd.dwg';
	$existing_mimes['dwg'] = 'application/acad';
	$existing_mimes['dwg'] = 'application/autocad';
	$existing_mimes['dwg'] = 'application/autocaddwg';
	$existing_mimes['dwg'] = 'application/dwg';
	$existing_mimes['dwg'] = 'drawing/dwg';
	$existing_mimes['dwg'] = 'image/dwg';
	return $existing_mimes;
}
add_filter('upload_mimes', 'custom_upload_mimes');
