<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 3/7/2017
 * Time: 3:15 PM
 */

/*
 * save metabox data
 */
add_action('add_meta_boxes', 'features_add_custom_box');

/* Do something with the data entered */
add_action('save_post', 'features_save_postdata');

/* Adds a box to the main column on the Post and Page edit screens */
function features_add_custom_box()
{
    global $post;
    if ('template/template-about.php' == get_post_meta($post->ID, '_wp_page_template', true)) {
        add_meta_box(
            'features_dynamic_meta',
            __('Features', 'myplugin_textdomain'),
            'features_inner_custom_box',
            'page');
    }
}

/* Prints the box content */
function features_inner_custom_box()
{
    global $post;
    // Use nonce for verification
    wp_nonce_field(plugin_basename(__FILE__), 'dynamicMeta_noncename');


    //get the saved meta as an arry
    $features = get_post_meta($post->ID, 'features', true);

    $c = 0;
    ?>
    <div id="meta_inner">
    <small>Do not create a empty row, since it will display a empty row in frontend.</small>
    <table>
        <tr>
            <th>Features</th>
        </tr>
        <?php
        if (count($features) > 0 && (is_array($features) || is_object($features))) {
//        print_r($features);

            foreach ($features as $ite) {
                if (isset($ite['feature'])) {
                    $feature = $ite['feature'];
//                    $answer = $ite['answer'];
                    echo '<tr>';
                    echo '<td style="width:200px" ><input type="text" name="features[' . $c . '][feature]" value="' . $feature . '" style="width:275px" /> </td>';
                    echo '<td><span class="remove">Remove</span></td></tr>';
                    $c = $c + 1;
                }
            }
        }
        echo '</table>';
        ?>
        <span id="features"></span>
        <br><span class="addFeatures"><?php _e('Add Features'); ?></span>
        <script>
            var $ = jQuery.noConflict();
            var tempVal = "";
            $(document).ready(function () {

                var count = <?php echo $c; ?>;
                $(".addFeatures").click(function () {
                    count = count + 1;
                    $('#features').append('<tr><td><input type="text" name="features[' + count + '][feature]" style="width:275px"/></td><td><span class="remove">Remove</span></td></tr>');
                    return false;
                });
                $(".remove").live('click', function () {
                    $(this).closest("tr").remove();
                });
            });
        </script>
    </div><?php

}

/* When the post is saved, saves our custom data */
function features_save_postdata($post_id)
{
    // verify if this is an auto save routine.
    // If it is our form has not been submitted, so we don't want to do anything
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return;

    // verify this came from the our screen and with proper authorization,
    // because save_post can be triggered at other times
    if (!isset($_POST['dynamicMeta_noncename']))
        return;

    if (!wp_verify_nonce($_POST['dynamicMeta_noncename'], plugin_basename(__FILE__)))
        return;

    // OK, we're authenticated: we need to find and save the data

    $features = $_POST['features'];

    update_post_meta($post_id, 'features', $features);
}