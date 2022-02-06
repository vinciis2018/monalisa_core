<?php

/*
Plugin Name: Monalisa Plugin by Vinciis
Plugin URI:
Description:
Author: vinciis
Version: 0.1
Author URI: http://vblinds.herokuapp.com
Network: True
*/
defined( 'ABSPATH' ) or die( 'Direct script access disallowed.' );
define( 'ERW_WIDGET_PATH', plugin_dir_path( __FILE__ ) . '/widget' );
define( 'ERW_ASSET_MANIFEST', ERW_WIDGET_PATH . '/build/asset-manifest.json' );
define( 'ERW_INCLUDES', plugin_dir_path( __FILE__ ) . '/includes' );


require_once( ERW_INCLUDES . '/enqueue.php' );
require_once( ERW_INCLUDES . '/shortcode.php' );
