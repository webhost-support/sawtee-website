<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php wp_title(''); ?><?php if (wp_title('', false)) {
		echo ' :';
	} ?><?php bloginfo('name'); ?></title>

	<link href="//www.google-analytics.com" rel="dns-prefetch">
	<link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
	<link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="<?php bloginfo('description'); ?>">

	<?php wp_head(); ?>
	<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
        	assets: '<?php echo get_template_directory_uri(); ?>',
        	tests: {}
        });
    </script>

</head>
<body <?php body_class(); ?> data-spy="scroll" data-target=".navbar" data-offset="350">

<!-- 	Page structure start
	================================================== -- -->
	<?php
		        if (is_home() || is_front_page()) {
		            echo '<div class="wrapper">';
		        }else{
		            echo '<div class="wrapper blog">';
		        } ?>
	
		<a href="#" class="TopButton">
			<i class="fa fa-angle-up "></i>
		</a>
		<?php
		        if (is_home() || is_front_page()) {
		            get_template_part('content/content', 'banner');
		        } ?>
		<!-- header starts -->
		<header class="header clearfix">
			<nav class="navbar navbar-default" data-spy="affix" data-offset-top="300">
				<div class="container">
					<div class="row">
						<div class="logo-wrap">
							<h1 class="logo clearfix">
								<a class="navbar-brand" href="<?php echo site_url(); ?>">
									<img class="img-responsive"
									src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt=""></a>
								</h1>
							</div>
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse"
								data-target=".navbar-ex1-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>

						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse navbar-ex1-collapse navigation">
							<?php
							if (!is_home() || !is_front_page()) {
								wp_nav_menu(array(
									'menu' => 'secondary',
									'depth' => 2,
									'container' => 'ul',
									'menu_class' => 'nav navbar-nav',
									'walker' => new wp_bootstrap_navwalker()
								)
							);
							} else {
								wp_nav_menu(array(
									'menu' => 'primary',
									'depth' => 2,
									'container' => 'ul',
									'menu_class' => 'nav navbar-nav',
									'walker' => new wp_bootstrap_navwalker()
								)
							);
							}
							?>
							<span>	
								<div id="wrap">
									<?php get_search_form() ?>
								</div></span>
							
						</div><!-- /.navbar-collapse -->
					</div>
				</div>
			</nav>
		</header>
