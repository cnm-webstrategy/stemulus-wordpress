<?php
define('WP_ALLOW_REPAIR', true);

# Database Configuration
define( 'DB_NAME', 'wp_ingenuity' );
define( 'DB_USER', 'ingenuity' );
define( 'DB_PASSWORD', 'y9UklUODsRMcGJePxqJn' );
define( 'DB_HOST', '127.0.0.1' );
define( 'DB_HOST_SLAVE', '127.0.0.1' );
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
$table_prefix = 'wp_';

# Security Salts, Keys, Etc
define('AUTH_KEY',         'U~t-Oa_2+@t_9EEMz&X)A>!bwJv}Gg4d{?c0$`cMQ:#azquj&oq fZb}>yLGF-Qe');
define('SECURE_AUTH_KEY',  'u!|vsc4 ,oWJ~ZhE|*o:CuqS1da6qf~5y[|ZR|pF4F//xPC9,#UwH&f?{e32++I6');
define('LOGGED_IN_KEY',    'K_=3O,s*+Rvhe&Mc/nG;w!pbBfQx=:9DATo51%]){J~/t-x:CO#S;neA,TTl9%Q`');
define('NONCE_KEY',        'xOZ>C4Qaem{L;s=0GU;}/u8)-?In 9H_w-{1r5(Iwa.5M(N3-gl_q~)[FZ&kYHl}');
define('AUTH_SALT',        '<$fFTq r%zL%Ad,[N3|u#}Ddr3UlP:wL$$%PQ+:-/>;XiAVs#tuoF7U]K.?<9m]=');
define('SECURE_AUTH_SALT', 'C=l*Ag<QH(c@;JJF%dA+QBEXEf2>GWw.aAAA6h9*BRu`,;U?9up3&)+]fFB:D%p*');
define('LOGGED_IN_SALT',   'y-h{-_ !J-0wJzQ#e7Em4W(?WNP$r3RC|_&fR/b8FBh>!mD0Z)A?|>Mq,$NhFBHo');
define('NONCE_SALT',       '.3[e?# v+ 7o0-o5?I1ST>(Z3Map#5Jb~++n)e@I-gG-g+u+MWqb.O=/A*U;Ka-c');


# Localized Language Stuff

define( 'WP_CACHE', TRUE );

define( 'WP_AUTO_UPDATE_CORE', false );

define( 'PWP_NAME', 'ingenuity' );

define( 'FS_METHOD', 'direct' );

define( 'FS_CHMOD_DIR', 0775 );

define( 'FS_CHMOD_FILE', 0664 );

define( 'PWP_ROOT_DIR', '/nas/wp' );

define( 'WPE_APIKEY', '43e296c49a2e5966ae8f58a58971cb8ce3b184f2' );

define( 'WPE_FOOTER_HTML', "" );

define( 'WPE_CLUSTER_ID', '31156' );

define( 'WPE_CLUSTER_TYPE', 'pod' );

define( 'WPE_ISP', true );

define( 'WPE_BPOD', false );

define( 'WPE_RO_FILESYSTEM', false );

define( 'WPE_LARGEFS_BUCKET', 'largefs.wpengine' );

define( 'WPE_SFTP_PORT', 2222 );

define( 'WPE_LBMASTER_IP', '192.237.192.80' );

define( 'WPE_CDN_DISABLE_ALLOWED', true );

define( 'DISALLOW_FILE_MODS', FALSE );

define( 'DISALLOW_FILE_EDIT', FALSE );

define( 'DISABLE_WP_CRON', false );

define( 'WPE_FORCE_SSL_LOGIN', false );

define( 'FORCE_SSL_LOGIN', false );

/*SSLSTART*/ if ( isset($_SERVER['HTTP_X_WPE_SSL']) && $_SERVER['HTTP_X_WPE_SSL'] ) $_SERVER['HTTPS'] = 'on'; /*SSLEND*/

define( 'WPE_EXTERNAL_URL', false );

define( 'WP_POST_REVISIONS', FALSE );

define( 'WPE_WHITELABEL', 'wpengine' );

define( 'WP_TURN_OFF_ADMIN_BAR', false );

define( 'WPE_BETA_TESTER', false );

umask(0002);

$wpe_cdn_uris=array ( );

$wpe_no_cdn_uris=array ( );

$wpe_content_regexs=array ( );

$wpe_all_domains=array ( 0 => 'cnmingenuity.org', 1 => 'fusemakerspace.org', 2 => 'ingenuitysoftwarelabs.com', 3 => 'ingenuity.wpengine.com', 4 => 'nmitap.org', 5 => 'stemuluscenter.org', 6 => 'www.cnmingenuity.org', 7 => 'www.fusemakerspace.org', 8 => 'www.nmitap.org', 9 => 'www.stemuluscenter.org', );

$wpe_varnish_servers=array ( 0 => 'pod-31156', );

$wpe_special_ips=array ( 0 => '166.78.46.191', );

$wpe_ec_servers=array ( );

$wpe_largefs=array ( );

$wpe_netdna_domains=array ( 0 =>  array ( 'match' => 'ingenuity.wpengine.com', 'zone' => '5gmkt4a52bj381asf18zyde1', 'enabled' => true, ), 1 =>  array ( 'match' => 'cnmingenuity.org', 'zone' => '3873t036b7729q0ai3hih725', 'enabled' => true, ), );

$wpe_netdna_domains_secure=array ( );

$wpe_netdna_push_domains=array ( );

$wpe_domain_mappings=array ( );

$memcached_servers=array ( );


# WP Engine ID


# WP Engine Settings


define( 'WP_POST_REVISIONS', true );



define('WP_DEBUG', false);
define('WP_ALLOW_MULTISITE', true);
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
define('DOMAIN_CURRENT_SITE', 'cnmingenuitylocal.com');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
define('SUNRISE', 'on');

# That's It. Pencils down
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
require_once(ABSPATH . 'wp-settings.php');

$_wpe_preamble_path = null; if(false){}
