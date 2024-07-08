<?php
/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/22/2017
 * Time: 6:38 AM
 */
?>
<div class="co-organizer" id="organizer">
    <div class="container">
        <h2 class="heading">CO-ORGANIZERS
            <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
        </h2>
        <div class="row">
			<?php
			$args       = array(
				'post_type'      => 'co_organizer',
				'posts_per_page' => 4,
				'order'          => 'desc',
				'orderby'        => 'date'
			);
			$organizers = new WP_Query( $args );
			if ( $organizers->have_posts() ) : while ( $organizers->have_posts() ) : $organizers->the_post(); ?>
                <div class="col-xs-6 col-sm-3">
                    <figure>
	                    <a href="<?php echo get_field('url_link');?>" target="_blank"><?php echo wp_get_attachment_image( get_post_thumbnail_id( $post->ID ), 'organizers', 'false', array( "class" => "img-responsive" ) ); ?></a>
                    </figure>
                </div>
				<?php
			endwhile;
			endif;
			wp_reset_query();
			wp_reset_postdata(); ?>
        </div>
    </div>
</div>
