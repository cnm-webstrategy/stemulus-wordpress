<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */


// load local dev config file if it exists. This file should not exist in production
if ( file_exists( dirname( __FILE__ ) . '/local-config.php' ) ) {
  require_once( dirname( __FILE__ ) . '/local-config.php' );

} else {

    define('WP_HOME','http://cnm-ingenuity.net');
    define('WP_SITEURL','http://cnm-ingenuity.net');

    // ** MySQL settings - You can get this info from your web host ** //
    /** The name of the database for WordPress */
    define('DB_NAME', 'fusemake_wordpress');
    /** MySQL database username */
    define('DB_USER', 'fusemake_admin');
    /** MySQL database password */
    define('DB_PASSWORD', '7RW~D7;6$ODe');
    /** MySQL hostname */
    define('DB_HOST', 'localhost');
    /** Database Charset to use in creating database tables. */
    define('DB_CHARSET', 'utf8');
    /** The Database Collate type. Don't change this if in doubt. */
    define('DB_COLLATE', '');
    /**#@+
     * Authentication Unique Keys and Salts.
     *
     * Change these to different unique phrases!
     * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
     * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
     *
     * @since 2.6.0
     */
    define('AUTH_KEY',         'hszfxhfjjtdcyfgos94vel1c806bezfhknny3cqdyinmsnpe1ezltpslnamtk6op');
    define('SECURE_AUTH_KEY',  'gqtu2n9peedgfhlarw7gltfvgypay01r0gfyjqyq1hhbp0wusmqlrm0caot8nxm1');
    define('LOGGED_IN_KEY',    'kgorl3bc6zgdkhmheevngirr9ujyzrnnnhpniv1uk4eqs71ntm1rt5twpaos380s');
    define('NONCE_KEY',        'eacqc797iojfjw2mj67rzithemkeaqw84x4ii80cbfo5wcgvkr37cbjemkarpxov');
    define('AUTH_SALT',        'waryuontl5mvqp7wud4keeyqg2x94nqehiawvrzinnzbirxp54wxixwxzrctlloz');
    define('SECURE_AUTH_SALT', 'dzhk7934j1mnzzitciybgo3m4qnadnc3hjos0vlhfyaig3cjsumhudqxngiemnkb');
    define('LOGGED_IN_SALT',   'crmuk1yjbdh1pbmy8gwrxwfvru6gjr6lsd9zgmvksrhndoghetyukkfjsgkky3fv');
    define('NONCE_SALT',       'letdb8idvqxlamakymmloyebumljerlbctg99vr6ytsxebcfsyfkjo1ecnu2jct0');
    /**#@-*/
    /**
     * WordPress Database Table prefix.
     *
     * You can have multiple installations in one database if you give each a unique
     * prefix. Only numbers, letters, and underscores please!
     */

    $table_prefix  = 'wp_';

    /**
     * For developers: WordPress debugging mode.
     *
     * Change this to true to enable the display of notices during development.
     * It is strongly recommended that plugin and theme developers use WP_DEBUG
     * in their development environments.
     */
    define('WP_DEBUG', false);

    /* Multisite */
    define( 'WP_ALLOW_MULTISITE', true );
    define('MULTISITE', true );
    define('SUBDOMAIN_INSTALL', false);
    define('DOMAIN_CURRENT_SITE', 'cnm-ingenuity.net');
    define('PATH_CURRENT_SITE', '/');
    define('SITE_ID_CURRENT_SITE', 1);
    define('BLOG_ID_CURRENT_SITE', 1);
}

define( 'SUNRISE', 'on' );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
        define('ABSPATH', dirname(__FILE__) . '/');



/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');