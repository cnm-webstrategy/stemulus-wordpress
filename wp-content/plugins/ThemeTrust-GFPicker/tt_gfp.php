<?php

    /*
    Plugin Name: ThemeTrust Google Font Picker
    Plugin URI: http://www.themetrust.com
    Description: Allows you to customize the fonts on your ThemeTrust themes using the Google Fonts library.
    Author: ThemeTrust
    Version: 0.2
    Author URI: http://www.themetrust.com
    License: GPL2

    Copyright 2014  ThemeTrust  (email : support@themetrust.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
    */

// Require the Customizer API custom classes
require_once('customizer_classes.php');

// Require the gfonts picker class
require_once('gfonts.class.php');


// Instantiate the class
$tt_gfp = new tt_gfonts();

?>