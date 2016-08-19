<?php
# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

add_action('populate_blog_posts', 'populate_blog_posts', 10, 0);
function populate_blog_posts() {
    global $post;
    $posts = [];
    if (have_posts()) {
        while (have_posts()) {
            the_post();

            // debug($post);

            ob_start();
            the_permalink();
            $permalink = ob_get_clean();

            $posts[] = array(
                'id' => $post->ID,
                'permalink' => $permalink,
                'title' => $post->post_title,
                'excerpt' => $post->post_excerpt,
                'date' => $post->post_date,
            );
        }
    }
    extend_data('posts', $posts);
}
