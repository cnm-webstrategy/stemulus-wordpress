<?php

/*
Plugin Name: My Admin Theme
Plugin URI: http://example.com/my-crazy-admin-theme
Description: My WordPress Admin Theme - Upload and Activate.
Author: Ms. WordPress
Version: 1.0
Author URI: http://example.com
*/

function my_admin_theme_style() {
    wp_enqueue_style('my-admin-theme', plugins_url('wp-admin.css', __FILE__));
}

<<<<<<< HEAD
if (function_exists('is_wpe_snapshot') && is_wpe_snapshot()) {
=======
if (is_wpe_snapshot()) {
>>>>>>> c7ce9202df615e6029c02430280a540aaed85db9
	add_action('admin_enqueue_scripts', 'my_admin_theme_style');
	add_action('login_enqueue_scripts', 'my_admin_theme_style');
}

?>