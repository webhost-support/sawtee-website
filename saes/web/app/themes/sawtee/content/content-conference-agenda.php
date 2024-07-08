<?php

/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 9/22/2017
 * Time: 6:02 AM
 */
?>
<div class="timeline" id="agenda">
    <div class="container">
        <h2 class="heading">SUMMIT AGENDA
            <small class="icon-holder"><i class="fa fa-gg" aria-hidden="true"></i></small>
        </h2>
        <h3>Tenth South Asia Economic Summit (SAES X)</h3>
        <p>14-16 November 2017</p>
        <p>Venue: Hyatt Regency Kathmandu, Nepal
        </p>
        <?php
        $args              = array(
            'post_type'      => 'conference_agenda',
            'posts_per_page' => 4,
            'order'          => 'desc',
            'orderby'        => 'date'
        );
        $conference_agenda = new WP_Query($args);
        $i                 = 0;
        ?>

        <ul class="nav nav-tabs">
            <?php if ($conference_agenda->have_posts()) : while ($conference_agenda->have_posts()) : $conference_agenda->the_post(); ?>
                    <li class="<?php echo ($i == 0) ? 'active' : ''; ?>"><a data-toggle="pill" href="#tab-<?php echo $i; ?>"><?php the_title() ?></a>
                    </li>
            <?php
                    $i++;
                endwhile;
            endif; ?>
        </ul>

        <div class="tab-content">
            <?php $j = 0; ?>
            <?php if ($conference_agenda->have_posts()) : while ($conference_agenda->have_posts()) :
                    $conference_agenda->the_post(); ?>
                    <div id="tab-<?php echo $j; ?>" class="tab-pane fade in <?php echo ($j == 0) ? 'active' : ''; ?>">
                        <!--                <h2 class="title">Day 1 Agenda</h2>-->

                        <section id="cd-timeline" class="cd-container">
                            <?php $Conf_agenga = get_post_meta($post->ID, 'conference_agenda', true); ?>
                            <?php
                            // var_dump($Conf_agenga);
                            if (is_array($Conf_agenga) || is_object($Conf_agenga)) {
                                foreach ($Conf_agenga as $ite) {

                            ?>
                                    <div class="cd-timeline-block">
                                        <div class="cd-timeline-img cd-picture">
                                            <!-- <img src="image/team/img04.jpg" alt="Movie"> -->
                                        </div> <!-- cd-timeline-img -->
                                        <div class="cd-timeline-content">
                                            <h2><?php echo $ite['Title']; ?></h2>
                                            <span><i class="fa fa-clock-o" aria-hidden="true"></i> <?php echo $ite['start_time']; ?>
                                                - <?php echo $ite['end_time']; ?></span>
                                            <p class="card-text"><?php echo $ite['detail']; ?></p>
                                            <!-- <p class="venue">Venue: <span><?php echo $ite['venue']; ?></span></p> -->
                                            <!-- <a href="#0" class="cd-read-more">Read more</a> -->
                                            <span class="cd-date"><?php echo $ite['start_time']; ?></span>
                                        </div> <!-- cd-timeline-content -->
                                    </div> <!-- cd-timeline-block -->
                            <?php }
                            } ?>

                        </section> <!-- cd-timeline -->
                        <div class="fileDownload">
                            <?php

                            $file = get_field('conference_agenda_file');

                            if ($file) : ?>

                                <a href="<?php echo $file['url']; ?>">Download Tentative Programme Agenda</a>

                            <?php endif; ?>
                        </div>
                    </div>

            <?php
                    $j++;
                endwhile;
            endif;
            wp_reset_query();
            wp_reset_postdata(); ?>

        </div>


    </div>
</div>
