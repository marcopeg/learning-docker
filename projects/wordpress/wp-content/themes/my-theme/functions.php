<?php
# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

// meta title
add_theme_support( 'title-tag' );

// styles and scripts
add_action('wp_enqueue_scripts', 'start_wordpress_scripts');
function start_wordpress_scripts() {
    wp_enqueue_style('style', get_template_directory_uri() . '/style.css', array(), '0.0.0');
}
