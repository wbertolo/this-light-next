<?php
/**
 * This Light Backend main class. 
 *
 * @package ThisLight
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

session_start();


/**
 * The Games site settings.
 */
class This_Light {

	/**
	 * Page ID
	 *
	 * @var number
	 */
	private static $page_id;

	/**
	 * Helpers
	 *
	 * @var object
	 */
	private static $helpers;	

	/**
	 * Spotify Session
	 *
	 * @var object
	 */
	private static $spotify_session;	

	/**
	 * Spotify Callback page
	 *
	 * @var string
	 */
	private static $callback_page;	

	/**
	 * Constructor
	 */
	public function __construct() {

		global $environment;
		global $domain;
		global $allowed_html;

		if ( 'p' === $environment ) {
			set_error_handler( array( $this, 'outputError' ) );
		}

		add_filter( 'wp', array( $this, 'initialize_spotify_api' ) );

		// Helpers.
		require_once( get_template_directory() . '/includes/class-helpers.php' );
		self::$helpers = new Helpers();	
		
		if ( strpos( $_SERVER['REQUEST_URI'], '/playlists' ) > -1 ) {
			self::$callback_page .= $domain . '/playlists-callback/';
		} elseif ( strpos( $_SERVER['REQUEST_URI'], '/wp-admin' ) > -1 ) {
			self::$callback_page .= $domain . '/wp-admin/admin.php?page=playlist-submissions-callback';
		}

		self::$spotify_session = self::$helpers->start_spotify_session( self::$callback_page );

		// Playlist.
		require_once( get_template_directory() . '/components/playlists/class-playlist.php' );
		new Playlist($allowed_html);

	}


	/**
	 * Initializes the Spotify API
	 */	
	public function initialize_spotify_api() {

		if ( '/playlists/' === $_SERVER['REQUEST_URI'] || '/playlists' === $_SERVER['REQUEST_URI'] ) {
			$options = [
				'scope' => [
					'playlist-modify-public',
					'playlist-modify-private',
					'user-follow-modify',
				],
			];

			header('Location: ' . self::$spotify_session->getAuthorizeUrl($options));
			die();

		}

	}

	public function outputError( $errno, $errstr ) {
		header('Location: /error');
		die;
	}
	
}
