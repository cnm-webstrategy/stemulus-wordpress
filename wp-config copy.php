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


define('WP_HOME','http://ingenuity.local');
define('WP_SITEURL','http://ingenuity.local');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wpengine-stemulus');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'MKUnKoeicngBgXtPfg9KZmte');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'e<{p014Y:hvdQP}+fjn>SLZqz$rej <(ZD#P$do>46!jqd1uF[RkG28?]-l3_1y}');
define('SECURE_AUTH_KEY',  '.?<5iUu!]QqQ+8cMuKLo;gi(PFN5%xIgKw4Vm0+`qv;.V5MuSFl]ElwVPoQ.>f$q');
define('LOGGED_IN_KEY',    'eE#K0?2TW;Kz)sUpfjcoLp.GP^B6!Ba?/pKJ&Ttx5qNLHG.K-)&iYk^;EdRFRGJ(');
define('NONCE_KEY',        'H<KDPCACMdT|WK|2VO&5cAN|xZ<6]$Gz?!uts@1{b&8p3`jK|^e25]SFFFm5mM&f');
define('AUTH_SALT',        'P#wml;r)l~;1wxx]L`<S--Vq&7cor/P:$?q7y)y*<aPwaO8D~F`b(Xha%6ze]!OT');
define('SECURE_AUTH_SALT', 'fIt*PUBAqfG0q?&)QX:(#5j81NVXRL{R3jz3hGl~qP-Rw e{,rRAC]!;<9ovhe<l');
define('LOGGED_IN_SALT',   'X4t1lZsfGVGPn`N~.Qpb:* gU+:0 mC#v$aN.%8t9M:EqQ;OeN>X0yz+r WX#eC#');
define('NONCE_SALT',       ',9I!us$fAw%>bLp7B;5-`Ip7NbXOFxg:U~PoDCyJ$].:~4Qk]LwGIF%_OBcvjutu');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* Multisite */
define( 'WP_ALLOW_MULTISITE', true );

define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
define('DOMAIN_CURRENT_SITE', 'localhost');
define('PATH_CURRENT_SITE', '/~aryon/wordpress-ingenuity/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
