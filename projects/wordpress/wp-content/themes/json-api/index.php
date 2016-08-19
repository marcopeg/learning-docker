<?php
# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

do_action('populate_blog_meta');
do_action('populate_blog_posts');

header('Content-Type: application/json');
echo json_encode(get_data());
