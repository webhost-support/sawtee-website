<?php get_header(); ?>
<div class="content-wrap clearfix">
    <!-- welcome -->
    <?php get_template_part('content/content', 'about'); ?>
    <!-- timeline -->
    <?php get_template_part('content/content', 'conference-agenda'); ?>
    <!-- co-organizer -->
    <?php get_template_part('content/content', 'organizers'); ?>
    <!-- partners -->
    <?php get_template_part('content/content', 'partners'); ?>
    <!-- facebook -->
    <?php get_template_part('content/content', 'facebook'); ?>

</div>

<!-- previous saes -->
<?php get_template_part('content/content', 'previous-saes'); ?>
<!-- gallery -->
<?php get_template_part('content/content', 'gallery'); ?>
<!-- news -->
<?php get_template_part('content/content', 'news'); ?>

</div> <!-- /.content-wrap end -->
</div> <!-- /.wrapper end -->

<?php get_footer(); ?>
