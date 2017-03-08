<?php
	
/************************************************************************/
/* Enqueue parent theme and child theme styles/scripts
/************************************************************************/
	
function pv303_enqueue_styles() {
    wp_enqueue_style( 'layout', get_template_directory_uri() . '/assets/css/layout.css' );
    wp_enqueue_style( 'styles', get_template_directory_uri() . '/assets/css/styles.css' );
    
    wp_enqueue_style( 'pv303-styles',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'styles' ),
        wp_get_theme()->get('Version')
    );
    
	wp_enqueue_script( 'theme_typekit', '//use.typekit.net/ksy1vju.js' );

}




/************************************************************************/
/* ACTIONS & FILTERS
/************************************************************************/

add_action( 'wp_enqueue_scripts', 'pv303_enqueue_styles' );