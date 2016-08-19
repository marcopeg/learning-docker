<?php
# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

// WordPress Titles
add_theme_support('title-tag');

// Custom actions definitions
include_once('lib/meta.php');
include_once('lib/post.php');
include_once('lib/posts.php');

$data = array();

function extend_data($key, $value) {
    global $data;
    $data[$key] = $value;
}

function get_data() {
    global $data;
    return $data;
}

function debug($v, $die = true) {
	echo '<pre>';
	var_dump($v);
	echo '</pre>';
	if ($die) die();
}
