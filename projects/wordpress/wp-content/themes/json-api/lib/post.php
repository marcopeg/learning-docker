<?php
# Learning Docker
# by @thepeg
# https://github.com/marcopeg/learning-docker

add_action('populate_blog_post', 'populate_blog_post', 10, 0);
function populate_blog_post() {
    global $post;
    if (have_posts()) {
        the_post();

        ob_start();
        the_permalink();
        $permalink = ob_get_clean();

        extend_data('post', array(
            'id' => $post->ID,
            'permalink' => $permalink,
            'title' => $post->post_title,
            'excerpt' => $post->post_excerpt,
            'content' => $post->post_content,
            'date' => $post->post_date,
        ));
    }
}
