<!-- footer wrap -->
<footer class="footer-wrap pad clearfix" id="contact">
    <div class="footer-top clearfix">
        <h2>CONTACT US
       	<!--<img src="<?php echo get_template_directory_uri(); ?>/images/sawtee-logo.png" alt="" class="img-responsive"> -->
        </h2>
        <address class="address">
            <h3><?php echo get_theme_mod( 'thub_contact_name', 'No address saved yet.' ); ?></h3>
            <p>
                <?php echo get_theme_mod( 'thub_detail', 'No address saved yet.' ); ?>
            </p>
            <p>
                <i class="fa fa-envelope">&nbsp;</i> <a href="mailto:<?php echo get_theme_mod( 'thub_email', 'No address saved yet.' ); ?>" target="_top"><?php echo get_theme_mod( 'thub_email', 'No address saved yet.' ); ?></a>
            </p>
            <p>
                <i class="fa fa-phone">&nbsp;</i> <?php echo get_theme_mod( 'thub_phone', 'No address saved yet.' ); ?>
            </p>
        
           <!-- <h3><?php echo get_theme_mod( 'thub_address_heading', 'No address saved yet.' ); ?></h3> -->
            <p>
                <?php echo get_theme_mod( 'thub_address', 'No address saved yet.' ); ?>
            </p>
            <p>
                <?php echo get_theme_mod( 'thub_address2', 'No address saved yet.' ); ?>
            </p>
            <p>
                <?php echo get_theme_mod( 'thub_address3', 'No address saved yet.' ); ?>
            </p>
            <p>
                <?php echo get_theme_mod( 'thub_address4', 'No address saved yet.' ); ?>
            </p>
            <p>
                <?php echo get_theme_mod( 'thub_address5', 'No address saved yet.' ); ?>
            </p>
                  <div class="social-icon">
            <ul class="clearfix">
               <li><a class="icon1" href="https://www.facebook.com/South-Asia-Watch-on-Trade-Economics-and-Environment-SAWTEE-317451665536" target="_blank"><i class="fa fa-facebook">&nbsp;</i></a></li>
               <li><a class="icon1" href="https://www.linkedin.com/company-beta/13342337" target="_blank"><i class="fa fa-linkedin">&nbsp;</i></a></li>
               <li><a class="icon2" href="https://twitter.com/sawteenp" target="_blank"><i class="fa fa-twitter">&nbsp;</i></a></li>
               <li><a class="icon3" href="https://www.youtube.com/user/nepalsawtee?feature=watch" target="_blank"><i class="fa fa-youtube">&nbsp;</i></a></li>
           </ul>
       </div>
        </address>
    </div>

    <div class="footer-btm clearfix">
        <div class="copyright">
            <p>Copyright &copy; 2017 SAES. All rights reserved.</p>
            <div class="footer-center">
                <span>Powered by :</span>
                <span class="footer-logo-hold">
							<a target="_blank" href="http://www.ultrabyte.com.np/">
								<img src="<?php echo get_template_directory_uri(); ?>/images/ultrabyte-logo1.png" alt="ultrabyte">
							</a>

							<a class="last" target="_blank" href="http://www.ultrabyte.com.np/">
								<img src="<?php echo get_template_directory_uri(); ?>/images/ultrabyte-logo1.png" alt="ultrabyte">
							</a>
						</span>
            </div>
        </div>
    </div>
</footer>

<!-- Page structure end
================================================== -->

<?php wp_footer(); ?>
<script>
    jQuery(function(){
        // var $gallery = $('.gallery a').simpleLightbox();
        var $gallery = jQuery('.galleryinner a').simpleLightbox();
    });
</script>
<script type="text/javascript" charset="utf-8">
    jQuery(document).ready(function(){
        jQuery("a[rel^='prettyPhoto']").prettyPhoto();
    });
    jQuery(document).ready(function ($) {
    $('img').removeAttr('width').removeAttr('height');
});
</script>

</body>
</html>
