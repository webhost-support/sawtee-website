<?php
/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/22/2017
 * Time: 4:26 AM
 */
?>
<div class="banner-wrap">
	<div class="logo-wrap hidden-xs">
		<h1 class="logo">
			<a class="" href="<?php echo site_url(); ?>">
				<img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="Destination">
			</a>
		</h1>
	</div>
	<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			<?php
			$args = array(
				'post_type' => 'banner',
				'posts_per_page' => '5',
			);
			$the_query = new WP_Query($args);
			$i = 0;
			if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();
				?>
				<li data-target="#carousel-example-generic" data-slide-to="<?= $i; ?>"
					class="<?php echo ($i == 0) ? 'active' : ''; ?>"></li>
					<?php $i++; endwhile; endif;
					wp_reset_postdata();
					wp_reset_query(); ?>
				</ol>
				<div class="carousel-inner">

					<?php $i = 0;
					if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post(); ?>
					<div class="item <?php echo ($i == 0) ? 'active' : ''; ?>">
						<?php echo wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'banner', 'false', array("class" => "img-responsive")); ?>
						<div class="carousel-caption">
							<div class="holder">
								<div class="wrap">
									<h2><?php the_title(); ?></h2>
								</div>
							</div>
						</div>
					</div>
					<?php $i++; endwhile; endif;
					wp_reset_postdata();
					wp_reset_query(); ?>

				</div>

				<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
			<div class="social-icons-wrap hidden-xs">
				<ul class="clearfix">
					<a href="http://www.npc.gov.np/en" target="_blank"><li><img src="<?php echo get_template_directory_uri(); ?>/images/logo_npc_new.png" alt="" class="img-responsive"> 
</li></a>
					<a href="http://www.moc.gov.np/" target="_blank"><li><img src="<?php echo get_template_directory_uri(); ?>/images/logo_moc_new.png" alt="" height="50" class="img-responsive"> 
</li></a>
					<a href="http://sawtee.org/" target="_blank"><li><img src="<?php echo get_template_directory_uri(); ?>/images/sawtee-logo.png" alt="" class="img-responsive"></li></a>
				</ul>
			</div>
		</div>
