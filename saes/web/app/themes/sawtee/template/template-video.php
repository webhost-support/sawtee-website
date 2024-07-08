<?php
/**
 * Template Name: Video
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/24/2017
 * Time: 4:15 AM
 */
get_header();
?>
<div class="content-wrap inner clearfix">
    <div class="container">
        <div class="breadcrumb">
            <ol>
                <?php custom_breadcrumbs(); ?>
            </ol>
        </div>
        <div class="gallery-wrap">
            <h2 class="heading">Video Gallery
                <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
            </h2>
            <div class="row">
                <?php
                global $query_string;
                $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
                query_posts( array(
                    'post_type'      => 'video',
                    'posts_per_page' => 9,
                    'order'          => 'ASC',
                    'orderby'        => 'date',
                    'paged'          => $paged
                ) );
                if ( have_posts() ) : while ( have_posts() ) :
                    the_post(); ?>
                    <div class="video col-sm-4">
                        <?php $excerpt = get_the_excerpt( $post->ID );
                        $temp_video = explode("=", $excerpt);
                        ?>
                        <iframe width="100%" height="200" src="https://www.youtube.com/embed/<?php echo $temp_video[1] ?>?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
                        <a href="<?php the_excerpt() ?>" rel="prettyPhoto" title="" class="overlay">
                        </a>
                    </div>
                    <?php
                endwhile; endif;
                pagination_numeric_posts_nav(); ?>
                <div class="clear"></div>

            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>