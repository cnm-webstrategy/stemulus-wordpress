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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ingenuityLocal');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'local');

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
define('AUTH_KEY',         '46cRl4f9+:$Z[5CP{qEZrEaZ[0[8CV*G`)5@2lY*`9Q3f]2xv+m~ |8=k}.4Sj+<');
define('SECURE_AUTH_KEY',  'WM=Nkp[ZW 09jrVb@hn!|~ro:BN!8w>L+.)F%VJc>53Sv565t,4%cI99]N%rwVG:');
define('LOGGED_IN_KEY',    '?VE)hWMH^6I0 l2Ek+k4wQ gCC*R_~%eCD6j62iSBcaaUfvds[shC!5tr|YX.t|g');
define('NONCE_KEY',        'J)[A8OPq4?>K<p-1b+mu%PGf&.GqW-Ue/yWt_QiH4A[hoZ!*}C2K>j^FI<+JDJR;');
define('AUTH_SALT',        '4eEVHrhV,xB}G(w8|Lw:Wbp|.Z.XH~yMVpN44]}di,q8 KP$6vJX|~/*x9!juET;');
define('SECURE_AUTH_SALT', 'C#e[G>i^31=(kEO#)AjxXA&~z{H9P9Xeq51></lBr>epLtcDk/18vgU9[/>*}wo)');
define('LOGGED_IN_SALT',   '?=j+P.o(iBDt<4@eg.18cN2JJGe<t]B~K9=+b4c*nTzkZt}jMn3neILTPy?.2|@a');
define('NONCE_SALT',       'D?>n{]|e0+< -s]7Ca|-4s|&wQOXcrvkEecJV`:5h8Tj2;|+r8247Gny5-sy[}lM');

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
