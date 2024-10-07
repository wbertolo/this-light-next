<?php
/**
 * This Light functions and definitions
 *
 *
 * @package ThisLight
 */

 // If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The first header is a way to bypass CORS security measure so that only your front-end app can 
 * fetch the contents when going to the specified file.
 * Second, disable directory traversal of your app. You can do this by modifying nginx settings, 
 * or add Options -Indexes to your .htaccess file if you’re on an Apache server.
 * 
 */

// Timber directory renaming.
// if ( class_exists( 'Timber' ) ) {
// 	Timber::$dirname = [
// 		'templates',
// 	];
// }


if ( ! function_exists( 'tl_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 *
	 * Create your own tl_setup() function to override in a child theme.
	 *
	 * @since Twenty Sixteen 1.0
	 */
	function tl_setup() {
		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5', array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats', array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'status',
				'audio',
				'chat',
			)
		);

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
		 */
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		set_post_thumbnail_size( 1200, 9999 );

	}
endif;

// tl_setup.
// add_action( 'after_setup_theme', 'tl_setup' );


/**
 * Performs cleanup
 *
 * @since Twenty Sixteen 1.0
 */
function tl_cleanup() {

	// Removes unnecessary scripts.
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'classic-theme-styles' );
	wp_deregister_script( 'wp-embed' );

	// Other
	remove_action( 'wp_head', 'rsd_link' );
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'start_post_rel_link');
	remove_action('wp_head', 'index_rel_link');
	remove_action('wp_head', 'adjacent_posts_rel_link');

	// emojis.
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );

}
// add_action( 'wp_enqueue_scripts', 'tl_cleanup' );

/**
 * Adds a css class to the body element
 *
 * @param  array $classes the current body classes
 * @return array $classes modified classes
 */
function body_class_for_pages( $classes ) {
	global $post;
	$classes[] = 'page-' . $post->post_name;
	return $classes;
}

// add_filter( 'body_class', 'body_class_for_pages' );


if ( ! function_exists( 'twentynineteen_the_posts_navigation' ) ) :
	/**
	 * Posts Nav
	 */
	function twentynineteen_the_posts_navigation() {
		the_posts_pagination(
			array(
				'mid_size'  => 0,
				'prev_text' => sprintf(
					'%s <span class="nav-prev-text">%s</span>',
					'',
					__( '<', 'twentynineteen' )
				),
				'next_text' => sprintf(
					'<span class="nav-next-text">%s</span> %s',
					__( '>', 'twentynineteen' ),
					''
				),
			)
		);
	}
endif;

/**
 * Enqueues scripts and styles.
 *
 * @since Twenty Sixteen 1.0
 */
function thislight_scripts() {
	
	// Theme stylesheet.
	wp_register_style( 'styles', get_stylesheet_directory_uri() . '/dist/css/styles.min.css', '', filemtime( get_stylesheet_directory() . '/dist/css/styles.min.css' ) );
	wp_enqueue_style( 'styles' );

	// Global scripts.
	// wp_register_script( 'scripts', get_stylesheet_directory_uri() . '/dist/bundle.min.js', '', filemtime( get_stylesheet_directory_uri() . '/dist/bundle.min.js' ), true );
	// wp_enqueue_script( 'scripts' );

}
// add_action( 'wp_enqueue_scripts', 'thislight_scripts' );

// Global Variables.
require_once( get_template_directory() . '/includes/global-variables.php' );

// Transient Management.
require_once( get_template_directory() . '/includes/class-json-transients.php' );

// API.
require_once( get_template_directory() . '/includes/api.php' );

include_once( __DIR__ . '/class-this-light.php' );
new This_Light();

add_action( 'init', 'stop_heartbeat', 1 );
function stop_heartbeat() {
	wp_deregister_script('heartbeat');
}