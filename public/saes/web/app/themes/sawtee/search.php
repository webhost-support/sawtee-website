<?php get_header(); ?>
<div class="content-wrap inner clearfix">
	<div class="container">
		<div class="search">
			<!-- section -->
			<section>

				<h1 class="heading"><?php echo sprintf( __( '%s Search Results for ', 'sawtee' ), $wp_query->found_posts ); echo get_search_query(); ?></h1>
				<hr>
				<?php get_template_part('loop'); ?>
				
				<?php get_template_part('pagination'); ?>

			</section>
			<!-- /section -->
		</div>
	</div>
</div>

<?php get_footer(); ?>

