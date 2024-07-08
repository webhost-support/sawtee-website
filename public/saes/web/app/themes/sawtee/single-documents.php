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
            <div class="row">
                <?php the_content(); ?>
                <div class="clear"></div>

            </div>
        </div>
    </div>
</div>

<?php 
endwhile;
endif;
get_footer(); ?>
