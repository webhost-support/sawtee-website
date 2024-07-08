<?php
/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/22/2017
 * Time: 8:53 AM
 */
?>
<div class="news" id="news">
    <div class="container">
        <h2 class="heading">RECENT NEWS
            <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
        </h2>
        <div class="news-list">
            <?php query_posts(array(
                'post_type' => 'news',
                'posts_per_page' => -1,
                'order' => 'desc',
                'orderby' => 'date'
            ));
            if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div class="thumbnail">
                <?php if ( has_post_thumbnail() ) { ?>
                   <?php echo wp_get_attachment_image( get_post_thumbnail_id( $post->ID ), 'gallery', 'false', array( "class" => "img-responsive" ) ); ?>
                   
                   <?php } else{ ?>
<!-- <img src="<?php echo get_template_directory_uri(); ?>/img/noimage.png" alt="" class="img-responsive"> -->
<?php } ?>
                    <!--<span class="date"><?php the_time('j F'); ?></span>-->
                    <div class="caption">
                        <a href="<?php the_permalink(); ?>">
                            <h3><?php the_title(); ?></h3>
                        </a>
                        <p>
                            <?php echo wp_trim_words( get_the_content(), 10, '... ' ) ?>
                        </p>
                    </div>
                </div>
            <?php endwhile; endif;
            wp_reset_postdata();
            wp_reset_query(); ?>
        </div>
    </div>
</div>
