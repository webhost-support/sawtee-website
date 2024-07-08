<?php get_header(); 
?>
<div class="content-wrap pad inner about clearfix">
    <div class="container">
        <div class="breadcrumb">
            <ol>
                <?php custom_breadcrumbs(); ?>
            </ol>
        </div>
        <div class="speakers">
            <div class="container">
                <?php if (have_posts()): while (have_posts()) : the_post(); ?>
                    <?php $single_post_id = $post->ID; ?>
                    <h2 class="heading"><?php the_title(); ?>
                        <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
                    </h2>
                    <div class="media">
                        <div class="media-left">
                            <?php echo wp_get_attachment_image( get_post_thumbnail_id( $post->ID ), 'speaker-inner', 'false', array( "class" => "img-responsive" ) ); ?>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading"><?php the_excerpt(); ?></h4>
                            <?php the_content(); ?>
                        </div>
                    </div>
                <?php endwhile; endif; ?>
                <hr>
                <h2 class="heading">OTHER SPEAKERS
                    <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
                </h2>
                <p>List of speakers will be updated as we get confirmations  </p>
                <div class="row">
                    <?php query_posts(array(
                        'post_type' => 'speakers',
                        'posts_per_page' => -1,
                        'post__not_in' => array($single_post_id),
                        'order' => 'ASC',
                        'orderby' => 'menu_order'
                    ));
                    if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <div class="col-sm-4 col-md-3">
                            <div class="thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php echo wp_get_attachment_image( get_post_thumbnail_id( $post->ID ), 'speaker', 'false', array( "class" => "img-responsive" ) ); ?>
                                    <div class="caption">
                                        <h3>
                                            <?php the_title(); ?>
                                        </h3>
                                        <p><?php the_excerpt(); ?> </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    <?php endwhile; endif;
                    wp_reset_postdata();
                    wp_reset_query(); ?>
                </div>
            </div>
        </div>
    </div>
</div> <!-- /.content-wrap end -->

<?php 
get_footer(); ?>
