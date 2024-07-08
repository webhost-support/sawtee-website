<?php if (have_posts()): while (have_posts()) : the_post(); ?>

	<!-- article -->
	<article  id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<!-- post thumbnail -->
		<?php if ( has_post_thumbnail()) : // Check if thumbnail exists ?>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
				<?php the_post_thumbnail(array(120,120)); // Declare pixel size you need inside the array ?>
			</a>
		<?php endif; ?>
		<!-- /post thumbnail -->

		<!-- post title -->
		<h3>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
		</h3>
		<!-- /post title -->

		<!-- post details -->
		<!-- /post details -->

		<?php sawteewp_excerpt('sawteewp_index'); // Build your custom callback length in functions.php ?>
	</article>
	<hr>
	<!-- /article -->

<?php endwhile; ?>

<?php else: ?>

	<!-- article -->
	<article>
		<h2><?php _e( 'Sorry, nothing to display.', 'sawtee' ); ?></h2>
	</article>
	<!-- /article -->

<?php endif; ?>
