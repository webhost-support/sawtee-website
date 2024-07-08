<?php
/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/22/2017
 * Time: 7:59 AM
 */
?>
<div class="previous-saes" id="previous-saes">
    <div class="container">
        <h2 class="heading">PAST SUMMITS
            <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
        </h2>
        <div class="box-list">
            <?php query_posts(array(
                'post_type' => 'previous_saes',
                'order' => 'desc',
                'orderby' => 'date'
            ));
            if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div class="box">
                    <h3><?php the_title(); ?></h3>
                    <?php the_content(); ?>
                </div>
            <?php endwhile; endif;
            wp_reset_postdata();
            wp_reset_query(); ?>
        </div>
    </div>
</div>
