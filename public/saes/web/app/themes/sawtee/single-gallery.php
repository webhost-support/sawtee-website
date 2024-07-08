<?php get_header(); 
if (have_posts()): while (have_posts()): the_post();?>

<div class="content-wrap inner clearfix">
    <div class="container">
        <div class="breadcrumb">
            <ol>
                <?php custom_breadcrumbs(); ?>
            </ol>
        </div>
        <div class="gallery-wrap">
            <h2 class="heading"><?php the_title(); ?>
                <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
            </h2>
            <div class="galleryinner row">
                <?php
                add_filter('shortcode_atts_gallery', 'wpse_141896_shortcode_atts_gallery');
                $galleries = get_post_gallery_images(get_the_ID()); ?>
                <?php
                foreach ($galleries as $image) {
                    ?>
                    <a href="<?php echo $image; ?>" class="col-sm-4">
                        <img src="<?php echo $image; ?>" alt="" title=""/>
                    </a>
                    <?php
                }
                remove_filter('shortcode_atts_gallery', 'wpse_141896_shortcode_atts_gallery'); ?>
                <div class="clear"></div>

            </div>
        </div>
    </div>
</div>


<?php 
endwhile;
endif;
get_footer(); ?>
