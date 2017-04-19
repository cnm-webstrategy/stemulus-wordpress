<?php
define( 'WP_DEBUG', false );

// ** MySQL settings ** //
/** The name of the database for WordPress */
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/var/www/wordpress/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress');

/** MySQL database password */
define('DB_PASSWORD', 'wordpress');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         'Z[cgtsVbH]tp/vFVG1Q<|0c}CL?%+xIRPv|oMfM1SZv_rSudG.|!x5sGe:3WYe#b');
define('SECURE_AUTH_KEY',  '$O}XpDH Qcn5?RIq2 TCXM7;$`*DIE=$-eB(AS/,me{~BW>:`cFR4-LPD_f&&uB[');
define('LOGGED_IN_KEY',    'NT/*j[XdB$4ec5>-o9`}HRSs+Hyh&|zt|f0v.[yMoCV0~:c2R9xwHL -W2zMZ%|%');
define('NONCE_KEY',        '/R{+kNt)I8)cJxTb=|/8SrlHS,cmDB6M&_`>ju/YWP-EJg[a049~0J~cv,r}gg|#');
define('AUTH_SALT',        'Zj^*P2mRNNu;?59Y,Q6?.7[r$6[*eBg QK:#Q2TzKLU%ySO`.6&YtU0td8f!&ysf');
define('SECURE_AUTH_SALT', '#s3ww0}>98>j@APR)4<5MFlS=BqWy-6vb,(Hm*kTBDs-k3%{ld/QatG]?!/$Dz@~');
define('LOGGED_IN_SALT',   '<ARlu6W/y=u:Vo+l];>R@M}GZpVe}XG`Z<i%q3[V4,%Z<,q4#fW4gw-ZHHQM;#y;');
define('NONCE_SALT',       'BpV7[/_s9`+7^zAAL/,DT9UlN_1DN[L8[5JM(EQ|Yb48r3dYkyr=5Y4%Wy7JF-Qr');


$table_prefix = 'wp_';


define( 'WP_HOME', 'http://vccw.dev' );
define( 'WP_SITEURL', 'http://vccw.dev' );
define( 'JETPACK_DEV_DEBUG', false );
define( 'WP_DEBUG', false );
define( 'FORCE_SSL_ADMIN', false );
define( 'SAVEQUERIES', false );



define( 'WP_ALLOW_MULTISITE', true );
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', false );
$base = '/';
define( 'DOMAIN_CURRENT_SITE', 'vccw.dev' );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );
define( 'SUNRISE', 'on' );
define( 'WP_POST_REVISIONS', true );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
