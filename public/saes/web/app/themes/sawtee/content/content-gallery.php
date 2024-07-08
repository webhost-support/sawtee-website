<?php
/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/22/2017
 * Time: 8:52 AM
 */
?>
<div class="gallery" id="gallery">
    <div class="container">
        <h2 class="heading">GALLERY
            <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
        </h2>
        <div class="hover08 column row">
            <?php query_posts(array(
                'post_type' => 'gallery',
                'posts_per_page' => 4,
                'order' => 'desc',
                'orderby' => 'date'
            ));
            if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="col-sm-3">
                <a href="<?php the_permalink(); ?>">
                    <figure>
                        <?php echo wp_get_attachment_image( get_post_thumbnail_id( $post->ID ), 'gallery', 'false', array( "class" => "img-responsive" ) ); ?>
                    </figure>
                    <span><?php the_title() ?></span>
                </a>
                </div>
            <?php endwhile; endif;
            wp_reset_postdata();
            wp_reset_query(); ?>
        </div>
    </div>
</div>
