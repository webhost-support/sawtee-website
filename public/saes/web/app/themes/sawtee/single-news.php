<?php get_header(); 
if (have_posts()): while (have_posts()): the_post();?>

<div class="content-wrap pad inner about clearfix">
    <div class="container">
        <div class="breadcrumb">
            <ol>
                <?php custom_breadcrumbs(); ?>
            </ol>
        </div>
        <div class="gallery-wrap">
            <div class="container">
                <h2 class="heading"><?php the_title(); ?>
                    <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
                </h2>

                <div class="row news">
                <?php if ( has_post_thumbnail() ) { ?>
                    <div class="left">

                        <?php echo wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'large', 'false', array("class" => "img-responsive")); ?>
                    </div>
<?php } ?>
                    <div class="right">
                        <div class="caption">
                            <h3>
                                <?php the_title(); ?>
                            </h3>
                            <?php the_content(); ?>
                               <?php echo do_shortcode("[ssba-buttons]"); ?>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>

            </div>
        </div>
    </div>
</div> <!-- /.content-wrap end -->

<?php 
endwhile;
endif;
get_footer(); ?>
