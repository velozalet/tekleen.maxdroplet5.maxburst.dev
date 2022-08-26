<?php 
	
// Holds Custom Post types, Taxonomies, etc.

define('THEME_URL', get_bloginfo('stylesheet_directory'));
define('THEME_PATH', get_stylesheet_directory());

/*Custom Post Type "companies" adn taxonomy for them*/
function case_companies_cpt() {
	$labels = array(
		'name'                => _x( 'Companies', 'Post Type General Name'),
		'singular_name'       => _x( 'Company', 'Post Type Singular Name'),
		'menu_name'           => __( 'Companies'),
		'parent_item_colon'   => __( 'Parent Company'),
		'all_items'           => __( 'All Companies'),
		'view_item'           => __( 'View Company'),
		'add_new_item'        => __( 'Add New Company'),
		'add_new'             => __( 'Add New'),
		'edit_item'           => __( 'Edit Company'),
		'update_item'         => __( 'Update Company'),
		'search_items'        => __( 'Search Company'),
		'not_found'           => __( 'Not Found'),
		'not_found_in_trash'  => __( 'Not found in Trash'),
	);
	$args = array(
		'label'               => __( 'Companies'),
		'description'         => __( 'Company'),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions'),
		'taxonomies'          => array( 'companies-taxonomy' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 3.1,
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest' => true,
		'menu_icon' => 'dashicons-groups',
	);
	register_post_type( 'companies', $args );
} add_action( 'init', 'case_companies_cpt', 0 );
function companies_cpt_taxonomy() {
	register_taxonomy(
		'companies-taxonomy',
		'companies',
		array(
			'hierarchical' => true,
			'label' => 'Companies Category',
			'query_var' => true,
			'has_archive' => false,
			'exclude_from_search' => true,
			'show_in_rest'  => true
		)
	);
} add_action( 'init', 'companies_cpt_taxonomy');
/*__/Custom Post Type "companies" adn taxonomy for them*/

/*Custom Post Type "shows" adn taxonomy for them*/
function case_shows_cpt() {
	$labels = array(
		'name'                => _x( 'Trade shows', 'Post Type General Name'),
		'singular_name'       => _x( 'Trade show', 'Post Type Singular Name'),
		'menu_name'           => __( 'Trade shows'),
		'parent_item_colon'   => __( 'Parent Trade show'),
		'all_items'           => __( 'All Trade shows'),
		'view_item'           => __( 'View Trade show'),
		'add_new_item'        => __( 'Add New Trade show'),
		'add_new'             => __( 'Add New'),
		'edit_item'           => __( 'Edit Trade show'),
		'update_item'         => __( 'Update Trade show'),
		'search_items'        => __( 'Search Trade show'),
		'not_found'           => __( 'Not Found'),
		'not_found_in_trash'  => __( 'Not found in Trash'),
	);
	$args = array(
		'label'               => __( 'Trade shows'),
		'description'         => __( 'Trade show'),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions'),
		'taxonomies'          => array( 'show-taxonomy' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 3.2,
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest' => true,
		'menu_icon' => 'dashicons-admin-media',
	);
	register_post_type( 'shows', $args );
} add_action( 'init', 'case_shows_cpt', 0 );
function shows_cpt_taxonomy() {
	register_taxonomy(
		'show-taxonomy',
		'shows',
		array(
			'hierarchical' => true,
			'label' => 'Trade shows Category',
			'query_var' => true,
			'has_archive' => false,
			'exclude_from_search' => true,
			'show_in_rest'  => true
		)
	);
} add_action( 'init', 'shows_cpt_taxonomy');
/*__/Custom Post Type "shows" adn taxonomy for them*/

/*Custom Post Type "industrial" adn taxonomy for them*/
function case_industrial_cpt() {
	$labels = array(
		'name'                => _x( 'Industrial', 'Post Type General Name'),
		'singular_name'       => _x( 'Industrial', 'Post Type Singular Name'),
		'menu_name'           => __( 'Industrial'),
		'parent_item_colon'   => __( 'Parent Industrial'),
		'all_items'           => __( 'All Industrial'),
		'view_item'           => __( 'View Industrial'),
		'add_new_item'        => __( 'Add New Industrial'),
		'add_new'             => __( 'Add New'),
		'edit_item'           => __( 'Edit Industrial'),
		'update_item'         => __( 'Update Industrial'),
		'search_items'        => __( 'Search Industrial'),
		'not_found'           => __( 'Not Found'),
		'not_found_in_trash'  => __( 'Not found in Trash'),
	);
	$args = array(
		'label'               => __( 'Industrial'),
		'description'         => __( 'Industrial'),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions'),
		'taxonomies'          => array( 'industrial-taxonomy' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 3.3,
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => false,
		'rewrite' => ['slug'=>'industrials'],
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest' => true,
		'menu_icon' => 'dashicons-buddicons-topics',
	);
	register_post_type( 'industrial', $args );
} add_action( 'init', 'case_industrial_cpt', 0 );
function industrial_cpt_taxonomy() {
	register_taxonomy(
		'industrial-taxonomy',
		'industrial',
		array(
			'hierarchical' => true,
			'label' => 'Industrial Category',
			'query_var' => true,
			'has_archive' => false,
			'exclude_from_search' => true,
			'show_in_rest'  => true
		)
	);
} add_action( 'init', 'industrial_cpt_taxonomy');
/*__/Custom Post Type "industrial" adn taxonomy for them*/

/*Custom Post Type "irrigations" adn taxonomy for them*/
function case_irrigations_cpt() {
	$labels = array(
		'name'                => _x( 'Irrigations', 'Post Type General Name'),
		'singular_name'       => _x( 'Irrigation', 'Post Type Singular Name'),
		'menu_name'           => __( 'Irrigations'),
		'parent_item_colon'   => __( 'Parent Irrigation'),
		'all_items'           => __( 'All Irrigations'),
		'view_item'           => __( 'View Irrigation'),
		'add_new_item'        => __( 'Add New Irrigation'),
		'add_new'             => __( 'Add New'),
		'edit_item'           => __( 'Edit Irrigation'),
		'update_item'         => __( 'Update Irrigation'),
		'search_items'        => __( 'Search Irrigation'),
		'not_found'           => __( 'Not Found'),
		'not_found_in_trash'  => __( 'Not found in Trash'),
	);
	$args = array(
		'label'               => __( 'Irrigations'),
		'description'         => __( 'Irrigation'),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions'),
		'taxonomies'          => array( 'irrigations-taxonomy' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 3.4,
		'can_export'          => true,
		'has_archive'         => false,
		'rewrite' => ['slug'=>'irrigations'],
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest' => true,
		'menu_icon' => 'dashicons-networking',
	);
	register_post_type( 'irrigations', $args );
} add_action( 'init', 'case_irrigations_cpt', 0 );
function irrigations_cpt_taxonomy() {
	register_taxonomy(
		'irrigations-taxonomy',
		'irrigations',
		array(
			'hierarchical' => true,
			'label' => 'Irrigations Category',
			'query_var' => true,
			'has_archive' => false,
			'exclude_from_search' => true,
			'show_in_rest'  => true
		)
	);
} add_action( 'init', 'irrigations_cpt_taxonomy');
/*__/Custom Post Type "irrigations" adn taxonomy for them*/

/*Custom Post Type "filters" adn taxonomy for them*/
function case_filters_cpt() {
	$labels = array(
		'name'                => _x( 'Filters', 'Post Type General Name'),
		'singular_name'       => _x( 'Filter', 'Post Type Singular Name'),
		'menu_name'           => __( 'Filters & Accessories'),
		'parent_item_colon'   => __( 'Parent Filter'),
		'all_items'           => __( 'All Filters'),
		'view_item'           => __( 'View Filter'),
		'add_new_item'        => __( 'Add New Filter'),
		'add_new'             => __( 'Add New'),
		'edit_item'           => __( 'Edit Filter'),
		'update_item'         => __( 'Update Filter'),
		'search_items'        => __( 'Search Filter'),
		'not_found'           => __( 'Not Found'),
		'not_found_in_trash'  => __( 'Not found in Trash'),
	);
	$args = array(
		'label'               => __( 'Filters'),
		'description'         => __( 'Filter'),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions'),
		'taxonomies'          => array( 'filters-taxonomy' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 3.5,
		'can_export'          => true,
		'has_archive'         => false,
		'rewrite' => ['slug'=>'filters'],
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest' => true,
		'menu_icon' => 'dashicons-filter',
	);
	register_post_type( 'filters', $args );
} add_action( 'init', 'case_filters_cpt', 0 );
function filters_cpt_taxonomy() {
	register_taxonomy(
		'filters-taxonomy',
		'filters',
		array(
			'hierarchical' => true,
			'label' => 'filters Category',
			'query_var' => true,
			'has_archive' => false,
			'exclude_from_search' => true,
			'show_in_rest'  => true
		)
	);
} add_action( 'init', 'filters_cpt_taxonomy');
/*__/Custom Post Type "filters" adn taxonomy for them*/

/*Custom Post Type "cases" adn taxonomy for them*/
function case_cases_cpt() {
	$labels = array(
		'name'                => _x( 'Cases', 'Post Type General Name'),
		'singular_name'       => _x( 'Case', 'Post Type Singular Name'),
		'menu_name'           => __( 'Case Studies'),
		'parent_item_colon'   => __( 'Parent Case'),
		'all_items'           => __( 'All Cases'),
		'view_item'           => __( 'View Case'),
		'add_new_item'        => __( 'Add New Case'),
		'add_new'             => __( 'Add New'),
		'edit_item'           => __( 'Edit Case'),
		'update_item'         => __( 'Update Case'),
		'search_items'        => __( 'Search Case'),
		'not_found'           => __( 'Not Found'),
		'not_found_in_trash'  => __( 'Not found in Trash'),
	);
	$args = array(
		'label'               => __( 'Cases'),
		'description'         => __( 'Case'),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions'),
		'taxonomies'          => array( 'cases-taxonomy' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 3.6,
		'can_export'          => true,
		'has_archive'         => false,
		'rewrite' => ['slug'=>'cases'],
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest' => true,
		'menu_icon' => 'dashicons-archive',
	);
	register_post_type( 'cases', $args );
} add_action( 'init', 'case_cases_cpt', 0 );
function cases_cpt_taxonomy() {
	register_taxonomy(
		'cases-taxonomy',
		'cases',
		array(
			'hierarchical' => true,
			'label' => 'Cases Category',
			'query_var' => true,
			'has_archive' => false,
			'exclude_from_search' => true,
			'show_in_rest'  => true
		)
	);
} add_action( 'init', 'cases_cpt_taxonomy');
/*__/Custom Post Type "cases" adn taxonomy for them*/