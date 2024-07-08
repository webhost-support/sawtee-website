<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2/27/2017
 * Time: 11:31 AM
 */
/*------------------------------------*\
	Custom Post Types
\*------------------------------------*/

/**
 * Register `Banner` post type
 */
function spa_banner() {

    // Labels
    $labels = array(
        'name' => _x("Banner", "post type general name"),
        'singular_name' => _x("Banner", "post type singular name"),
        'menu_name' => 'Banner',
        'add_new' => _x("Add New", "Banner item"),
        'add_new_item' => __("Add New Banner"),
        'edit_item' => __("Edit Banner"),
        'new_item' => __("New Banner"),
        'view_item' => __("View Banner"),
        'search_items' => __("Search Banner"),
        'not_found' =>  __("No Banner Found"),
        'not_found_in_trash' => __("No Banner Found in Trash"),
        'parent_item_colon' => ''
    );

    // Register post type
    register_post_type('banner' , array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-images-alt',
        'rewrite' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
    ) );
}
add_action( 'init', 'spa_banner', 0 );

/**
 * Register `Conference Agenda` post type
 */
function conference_agenda_post_type() {

	// Labels
	$labels = array(
		'name' => _x("Conference Agenda", "post type general name"),
		'singular_name' => _x("Conference Agenda", "post type singular name"),
		'menu_name' => 'Conference Agenda',
		'add_new' => _x("Add New", "Conference Agenda"),
		'add_new_item' => __("Add New Conference Agenda"),
		'edit_item' => __("Edit Conference Agenda"),
		'new_item' => __("New Conference Agenda"),
		'view_item' => __("View Conference Agenda"),
		'search_items' => __("Search Conference Agenda"),
		'not_found' =>  __("No Conference Agenda Found"),
		'not_found_in_trash' => __("No Conference Agenda Found in Trash"),
		'parent_item_colon' => ''
	);

	// Register post type
	register_post_type('conference_agenda' , array(
		'labels' => $labels,
		'public' => true,
		'has_archive' => false,
		'menu_icon' => 'dashicons-flag',
		'rewrite' => false,
		'supports' => array('title', 'editor', 'thumbnail'),
	) );
}
add_action( 'init', 'conference_agenda_post_type', 0 );

/**
 * Register `Co-organizers` post type
 */
function co_organisers() {

	// Labels
	$labels = array(
		'name' => _x("Co-organizers", "post type general name"),
		'singular_name' => _x("Co-organizers", "post type singular name"),
		'menu_name' => 'Co-organizers',
		'add_new' => _x("Add New", "Co-organizers"),
		'add_new_item' => __("Add New Co-organizers"),
		'edit_item' => __("Edit Co-organizers"),
		'new_item' => __("New Co-organizers"),
		'view_item' => __("View Co-organizers"),
		'search_items' => __("Search Co-organizers"),
		'not_found' =>  __("No Co-organizers Found"),
		'not_found_in_trash' => __("No Co-organizers Found in Trash"),
		'parent_item_colon' => ''
	);

	// Register post type
	register_post_type('co_organizer' , array(
		'labels' => $labels,
		'public' => true,
		'has_archive' => false,
		'menu_icon' => 'dashicons-businessman',
		'rewrite' => false,
		'supports' => array('title', 'editor', 'thumbnail'),
	) );
}
add_action( 'init', 'co_organisers', 0 );

/**
 * Register `Partner` post type
 */
function swat_partner() {

	// Labels
	$labels = array(
		'name' => _x("Partner", "post type general name"),
		'singular_name' => _x("Partner", "post type singular name"),
		'menu_name' => 'Partner',
		'add_new' => _x("Add New", "Partner"),
		'add_new_item' => __("Add New Partner"),
		'edit_item' => __("Edit Partner"),
		'new_item' => __("New Partner"),
		'view_item' => __("View Partner"),
		'search_items' => __("Search Partner"),
		'not_found' =>  __("No Partner Found"),
		'not_found_in_trash' => __("No Partner Found in Trash"),
		'parent_item_colon' => ''
	);

	// Register post type
	register_post_type('partner' , array(
		'labels' => $labels,
		'public' => true,
		'has_archive' => false,
		'menu_icon' => 'dashicons-networking',
		'rewrite' => false,
		'supports' => array('title', 'editor', 'thumbnail'),
	) );
}
add_action( 'init', 'swat_partner', 0 );

/**
 * Register `Facebook Post` post type
 */
function swat_facebook() {

	// Labels
	$labels = array(
		'name' => _x("Facebook Post", "post type general name"),
		'singular_name' => _x("Facebook Post", "post type singular name"),
		'menu_name' => 'Facebook Post',
		'add_new' => _x("Add New", "Facebook Post"),
		'add_new_item' => __("Add New Facebook Post"),
		'edit_item' => __("Edit Facebook Post"),
		'new_item' => __("New Facebook Post"),
		'view_item' => __("View Facebook Post"),
		'search_items' => __("Search Facebook Post"),
		'not_found' =>  __("No Facebook Post Found"),
		'not_found_in_trash' => __("No Facebook Post Found in Trash"),
		'parent_item_colon' => ''
	);

	// Register post type
	register_post_type('facebook_post' , array(
		'labels' => $labels,
		'public' => true,
		'has_archive' => false,
		'menu_icon' => 'dashicons-facebook-alt',
		'rewrite' => false,
		'supports' => array('title', 'editor', 'thumbnail'),
	) );
}
add_action( 'init', 'swat_facebook', 0 );

/**
 * Register `Previous SAES` post type
 */
function swat_previous_saes() {

    // Labels
    $labels = array(
        'name' => _x("Previous SAES", "post type general name"),
        'singular_name' => _x("Previous SAES", "post type singular name"),
        'menu_name' => 'Previous SAES',
        'add_new' => _x("Add New", "Previous SAES"),
        'add_new_item' => __("Add New Previous SAES"),
        'edit_item' => __("Edit Previous SAES"),
        'new_item' => __("New Previous SAES"),
        'view_item' => __("View Previous SAES"),
        'search_items' => __("Search Previous SAES"),
        'not_found' =>  __("No Previous SAES Found"),
        'not_found_in_trash' => __("No Previous SAES Found in Trash"),
        'parent_item_colon' => ''
    );

    // Register post type
    register_post_type('previous_saes' , array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-image-filter',
        'rewrite' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
    ) );
}
add_action( 'init', 'swat_previous_saes', 0 );

/**
 * Register `Gallery` post type
 */
function swat_gallery() {

    // Labels
    $labels = array(
        'name' => _x("Gallery", "post type general name"),
        'singular_name' => _x("Gallery", "post type singular name"),
        'menu_name' => 'Gallery',
        'add_new' => _x("Add New", "Gallery"),
        'add_new_item' => __("Add New Gallery"),
        'edit_item' => __("Edit Gallery"),
        'new_item' => __("New Gallery"),
        'view_item' => __("View Gallery"),
        'search_items' => __("Search Gallery"),
        'not_found' =>  __("No Gallery Found"),
        'not_found_in_trash' => __("No Gallery Found in Trash"),
        'parent_item_colon' => ''
    );

    // Register post type
    register_post_type('gallery' , array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-gallery',
        'rewrite' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
    ) );
}
add_action( 'init', 'swat_gallery', 0 );

/**
 * Register `News` post type
 */
function swat_news() {

    // Labels
    $labels = array(
        'name' => _x("News", "post type general name"),
        'singular_name' => _x("News", "post type singular name"),
        'menu_name' => 'News',
        'add_new' => _x("Add New", "News"),
        'add_new_item' => __("Add New News"),
        'edit_item' => __("Edit News"),
        'new_item' => __("New News"),
        'view_item' => __("View News"),
        'search_items' => __("Search News"),
        'not_found' =>  __("No News Found"),
        'not_found_in_trash' => __("No News Found in Trash"),
        'parent_item_colon' => ''
    );

    // Register post type
    register_post_type('News' , array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-megaphone',
        'rewrite' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
    ) );
}
add_action( 'init', 'swat_news', 0 );

/**
 * Register `Speaker` post type
 */
function swat_speaker() {

    // Labels
    $labels = array(
        'name' => _x("Speakers", "post type general name"),
        'singular_name' => _x("Speakers", "post type singular name"),
        'menu_name' => 'Speakers',
        'add_new' => _x("Add New", "Speakers"),
        'add_new_item' => __("Add New Speakers"),
        'edit_item' => __("Edit Speakers"),
        'new_item' => __("New Speakers"),
        'view_item' => __("View Speakers"),
        'search_items' => __("Search Speakers"),
        'not_found' =>  __("No Speakers Found"),
        'not_found_in_trash' => __("No Speakers Found in Trash"),
        'parent_item_colon' => ''
    );

    // Register post type
    register_post_type('speakers' , array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-microphone',
        'rewrite' => false,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'page-attributes'),
    ) );
}
add_action( 'init', 'swat_speaker', 0 );

/**
 * Register `Video` post type
 */
function swat_video() {

    // Labels
    $labels = array(
        'name' => _x("Video", "post type general name"),
        'singular_name' => _x("Video", "post type singular name"),
        'menu_name' => 'Video',
        'add_new' => _x("Add New", "Video"),
        'add_new_item' => __("Add New Video"),
        'edit_item' => __("Edit Video"),
        'new_item' => __("New Video"),
        'view_item' => __("View Video"),
        'search_items' => __("Search Video"),
        'not_found' =>  __("No Video Found"),
        'not_found_in_trash' => __("No Video Found in Trash"),
        'parent_item_colon' => ''
    );

    // Register post type
    register_post_type('video' , array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-video',
        'rewrite' => false,
        'supports' => array('title', 'thumbnail', 'excerpt'),
    ) );
}
add_action( 'init', 'swat_video', 0 );

/**
 * Register `Documents` post type
 */
function swat_documents() {

    // Labels
    $labels = array(
        'name' => _x("Documents", "post type general name"),
        'singular_name' => _x("Documents", "post type singular name"),
        'menu_name' => 'Documents',
        'add_new' => _x("Add New", "Documents"),
        'add_new_item' => __("Add New Documents"),
        'edit_item' => __("Edit Documents"),
        'new_item' => __("New Documents"),
        'view_item' => __("View Documents"),
        'search_items' => __("Search Documents"),
        'not_found' =>  __("No Documents Found"),
        'not_found_in_trash' => __("No Documents Found in Trash"),
        'parent_item_colon' => ''
    );

    // Register post type
    register_post_type('documents' , array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-book-alt',
        'rewrite' => false,
        'supports' => array('title', 'thumbnail', 'editor'),
    ) );
}
add_action( 'init', 'swat_documents', 0 );

/**
 * Register `Blog` post type
 */
function sawtee_blog() {

    // Labels
    $labels = array(
        'name' => _x("Blog", "post type general name"),
        'singular_name' => _x("Blog", "post type singular name"),
        'menu_name' => 'Blog',
        'add_new' => _x("Add New", "Blog"),
        'add_new_item' => __("Add New Blog"),
        'edit_item' => __("Edit Blog"),
        'new_item' => __("New Blog"),
        'view_item' => __("View Blog"),
        'search_items' => __("Search Blog"),
        'not_found' =>  __("No Blog Found"),
        'not_found_in_trash' => __("No Blog Found in Trash"),
        'parent_item_colon' => ''
    );

    // Register post type
    register_post_type('blog' , array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-book-alt',
        'rewrite' => false,
        'supports' => array('title', 'thumbnail', 'editor'),
    ) );
}
add_action( 'init', 'sawtee_blog', 0 );