<?php
/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/22/2017
 * Time: 5:20 AM
 */
?>
<div class="welcome-wrap pad" id="about">
    <div class="container">
        <div class="welcome-txt">
			<?php
			// query for the about page
			$args  = array(
				'post_type' => 'page',
				'post__in'  => array( 15 )
			);
			$about = new WP_Query( $args );
			// "loop" through query (even though it's just one page)
			if ( $about->have_posts() ): while ( $about->have_posts() ) : $about->the_post();
				?>
                <h2 class="heading"><?php the_title(); ?>
                    <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
                </h2>
				<?php the_content(); ?>
                <div class="clearfix"></div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="thumbnail">
<a href="http://sawtee.org/saes/wp-content/uploads/2017/11/SAES-X_Background-Note_13Nov2017.pdf" target="_blank">
							<?php

							$image = get_field( 'image_1' );
							//						print_r($image);
							$size = 'about'; // (thumbnail, medium, large, full or custom size)

							if ( $image ) {
								echo wp_get_attachment_image( $image['id'], $size, "", array( "class" => "card-img-top" ) );
							}

							?>
</a>
                            <div class="caption">
                               
								<?php echo get_field( 'description_1' ); ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="thumbnail">
<a href="http://sawtee.org/" target="_blank">
							<?php

							$image = get_field( 'image_2' );
							//						print_r($image);
							$size = 'about'; // (thumbnail, medium, large, full or custom size)

							if ( $image ) {
								echo wp_get_attachment_image( $image['id'], $size, "", array( "class" => "card-img-top" ) );
							}

							?>
</a>
                            <div class="caption">
                              
								<?php echo get_field( 'description_2' ); ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="thumbnail">
<a href="http://www.npc.gov.np/en" target="_blank">
							<?php

							$image = get_field( 'image_3' );
							//						print_r($image);
							$size = 'about'; // (thumbnail, medium, large, full or custom size)

							if ( $image ) {
								echo wp_get_attachment_image( $image['id'], $size, "", array( "class" => "card-img-top" ) );
							}

							?>
</a>
                            <div class="caption">
                               
								<?php echo get_field( 'description_3' ); ?>
                            </div>
                        </div>
                    </div>

			<?php endwhile; endif;
			wp_reset_postdata();
			wp_reset_query();
			?>
        </div>

    </div>
</div>
