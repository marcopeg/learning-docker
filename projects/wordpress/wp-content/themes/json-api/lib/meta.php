<?php
# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

add_action('populate_blog_meta', 'populate_blog_meta', 10, 0);
function populate_blog_meta() {
    extend_data('blog', array(
        'url' => get_bloginfo('wpurl'),
        'title' => wp_title('&raquo;', false),
        'name' => get_bloginfo('name'),
        'description' => get_bloginfo('description'),
    ));
}
