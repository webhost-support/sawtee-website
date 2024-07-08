<?php get_header(); ?>
<div class="content-wrap pad inner about clearfix">
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

			

		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

			<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

				<?php the_content(); ?>

				<?php comments_template( '', true ); // Remove if you don't want comments ?>

				<br class="clear">

				<?php edit_post_link(); ?>

			</article>
			<!-- /article -->

		<?php endwhile; ?>

		<?php else: ?>

			<!-- article -->
			<article>

				<h2><?php _e( 'Sorry, nothing to display.', 'sawtee' ); ?></h2>

			</article>
			<!-- /article -->

		<?php endif; ?>

		</div>
		<!-- /section -->
	</div>
</div>


</div>
<?php get_footer(); ?>
