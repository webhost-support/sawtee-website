<?php
/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/22/2017
 * Time: 7:59 AM
 */
?>
<div class="facebook">
    <div class="container">
        <h2 class="heading"><i class="fa fa-facebook" aria-hidden="true"></i>
            <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
        </h2>
        <div class="fb-post-list">
            <?php query_posts(array(
                'post_type' => 'facebook_post',
                'posts_per_page' => 6,
                'order' => 'desc',
                'orderby' => 'date'
            ));
            if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div class="fb-post">
                    <?php the_content(); ?>
                </div>
            <?php endwhile; endif;
            wp_reset_postdata();
            wp_reset_query(); ?>
        </div>
    </div>
</div>
