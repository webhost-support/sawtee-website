<?php
/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/22/2017
 * Time: 6:45 AM
 */
?>
<div class="partners" id="partners">
    <div class="container">
        <h2 class="heading">PARTNERS
            <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
        </h2>
        <div class="parnter-list">
			<?php
			$args       = array(
				'post_type'      => 'partner',
				'posts_per_page' => -1,
				'order'          => 'desc',
				'orderby'        => 'date'
			);
			$organizers = new WP_Query( $args );
			if ( $organizers->have_posts() ) : while ( $organizers->have_posts() ) : $organizers->the_post(); ?>
                <figure>
                <a href="<?php echo get_field('url_link');?>" target="_blank">
                <?php echo wp_get_attachment_image( get_post_thumbnail_id( $post->ID ), 'partners', 'false', array( "class" => "img-responsive" ) ); ?>
                </a>
	                
                </figure>
				<?php
			endwhile;
			endif;
			wp_reset_query();
			wp_reset_postdata(); ?>
        </div>
    </div>
</div>
