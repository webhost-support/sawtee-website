<?php
/**
 * Template Name: Blog
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 10/17/2017
 * Time: 1:40 PM
 */
get_header(); ?>

<div class="content-wrap pad inner about clearfix">
    <div class="container">
        <div class="breadcrumb">
            <ol>
                <?php custom_breadcrumbs(); ?>
            </ol>
        </div>
        <div class="gallery-wrap">
            <div class="container">
                <h2 class="heading">Blog
                    <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
                </h2>
                <div class="row">
                    <?php
                    global $query_string;
                    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                    query_posts(array(
                        'post_type' => 'blog',
                        'posts_per_page' => 10,
                        'order' => 'DESC',
                        'orderby' => 'date',
                        'paged' => $paged
                    ));
                    if (have_posts()) : while (have_posts()) :
                        the_post(); ?>

                        <div class="col-md-6">
                            <div class="thumbnail">
                                <div class="row blog-list">
                                    <div class="left">
<?php if ( has_post_thumbnail() ) { ?>
                                        <a href="<?php the_permalink(); ?>">
                                        
                                            <?php echo wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'speaker', 'false', array("class" => "img-responsive col-sm-6")); ?>
                                        </a>
                                        <?php } ?>
                                    </div>

                                    <div class="right">
                                        <a href="<?php the_permalink(); ?>">
                                            <div class="caption">
                                                <h3>
                                                    <?php the_title(); ?>
                                                </h3>
                                                <h5><?php echo get_field('blog_author'); ?></h5>
                                                <p><?php echo wp_trim_words(get_the_content(), 45, '... ') ?></p>
                                                <?php echo do_shortcode("[ssba-buttons]"); ?>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; endif;
                    wp_reset_postdata();
                    wp_reset_query();
                    sawteewp_pagination();
                    ?>

                </div>
            </div>
        </div>
    </div>
</div> <!-- /.content-wrap end -->

<?php get_footer(); ?>


