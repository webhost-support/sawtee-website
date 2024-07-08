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
                <h2 class="heading">Blog
                    <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
                </h2>

                <div class="row news">
                <?php if ( has_post_thumbnail() ) { ?>
                    <div class="left">
                        <?php echo wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'large', 'false', array("class" => "img-responsive")); ?>
                    </div>
<?php } ?>

                    <div class="right">
                     <span class="pull-right"><?php echo do_shortcode("[ssba-buttons]"); ?></span>
                     <div class="caption">
                        <h3>
                            <?php the_title(); ?>
                        </h3>
                        <?php the_content(); ?>
                        <div class="media">
                          <div class="media-left">
                             <?php $Images = get_field('author_image'); ?>
                             <?php if (!empty($Images)): ?>
                                <img src="<?php echo $Images['url']; ?>"
                                alt="<?php echo $Images['alt']; ?>">
                            <?php endif; ?>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">- <?php echo get_field('blog_author'); ?></h4>
                            <h5>- <?php echo get_field('designation'); ?></h5>
                        </div>
                    </div>
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
