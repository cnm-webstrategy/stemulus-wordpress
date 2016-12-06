<?php

global $page_option;

$home1_demo = cs_get_demo_content('home1.json');
$home2_demo = cs_get_demo_content('home2.json');
$home3_demo = cs_get_demo_content('home3.json');
$home4_demo = cs_get_demo_content('home4.json');
$home5_demo = cs_get_demo_content('home5.json');
$home6_demo = cs_get_demo_content('home6.json');
$home7_demo = cs_get_demo_content('home7.json');
$home8_demo = cs_get_demo_content('home8.json');
$home9_demo = cs_get_demo_content('home9.json');
$home10_demo = cs_get_demo_content('home10.json');

$page_option[] = array();
$page_option['theme_options'] = array(
    'select' => array(
        'home1' => 'Awaken Church',
        'home2' => 'Awaken Green',
        'home3' => 'Home Government',
        'home4' => 'Awaken Fundraising',
        'home5' => 'Mission Education',
        'home6' => 'Home Mosque',
        'home7' => 'Nonprofit Ngo',
        'home8' => 'Home Politics',
        'home9' => 'Home Petition',
        'home10' => 'Home News',
    ),
    'home1' => array(
        'name' => 'Awaken Church',
        'page_slug' => 'home-awaken-church',
        'theme_option' => $home1_demo,
        'thumb' => 'home1'
    ),
    'home2' => array(
        'name' => 'Awaken Green',
        'page_slug' => 'home-greeneco',
        'theme_option' => $home2_demo,
        'thumb' => 'home2'
    ),
    'home3' => array(
        'name' => 'Home Government',
        'page_slug' => 'home-government',
        'theme_option' => $home3_demo,
        'thumb' => 'home3'
    ),
    'home4' => array(
        'name' => 'Awaken Fundraising',
        'page_slug' => 'home-fundraising',
        'theme_option' => $home4_demo,
        'thumb' => 'home4'
    ),
    'home5' => array(
        'name' => 'Mission Education',
        'page_slug' => 'home-missioneducation',
        'theme_option' => $home5_demo,
        'thumb' => 'home5'
    ),
    'home6' => array(
        'name' => 'Home Mosque',
        'page_slug' => 'home-mosque',
        'theme_option' => $home6_demo,
        'thumb' => 'home6'
    ),
    'home7' => array(
        'name' => 'Nonprofit Ngo',
        'page_slug' => 'home-nonprofit-ngo',
        'theme_option' => $home7_demo,
        'thumb' => 'home7'
    ),
    'home8' => array(
        'name' => 'Home Politics',
        'page_slug' => 'home-politics',
        'theme_option' => $home8_demo,
        'thumb' => 'home8'
    ),
    'home9' => array(
        'name' => 'Home Petition',
        'page_slug' => 'home-petition',
        'theme_option' => $home9_demo,
        'thumb' => 'home9'
    ),
    'home10' => array(
        'name' => 'Home News',
        'page_slug' => 'home-news',
        'theme_option' => $home10_demo,
        'thumb' => 'home10'
    ),
);
