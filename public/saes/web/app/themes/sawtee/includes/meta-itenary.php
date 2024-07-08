<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2/27/2017
 * Time: 1:55 PM
 */

/*
 * save metabox data
 */
add_action( 'add_meta_boxes', 'dynamic_add_custom_box' );

/* Do something with the data entered */
add_action( 'save_post', 'dynamic_save_postdata' );

/* Adds a box to the main column on the Post and Page edit screens */
function dynamic_add_custom_box() {
	global $post;
	add_meta_box(
		'conference_agenda',
		__( 'Conference Agenda', 'sawtee' ),
		'dynamic_inner_custom_box',
		'conference_agenda',
		'normal', // $context
		'high' );
}

/* Prints the box content */
function dynamic_inner_custom_box() {
	global $post;
	// Use nonce for verification
	wp_nonce_field( plugin_basename( __FILE__ ), 'dynamicMeta_conference_agenda_noncename' );


	//get the saved meta as an arry
	$conference_agenda = get_post_meta( $post->ID, 'conference_agenda', true );

	$c = 0;
	?>
    <div id="meta_inner">
    <small>Do not create a empty row, since it will display a empty row in frontend.</small>
    <table>
        <tr>
            <th style="width:70px">Title</th>
            <th style="width:200px">Start Time</th>
            <th style="width:200px">End Time</th>
            <th style="width:200px">Venue</th>
            <th style="width:200px">Description</th>
            <th style="width:200px"></th>
        </tr>
		<?php
		if ( count( $conference_agenda ) > 0 && ( is_array( $conference_agenda ) || is_object( $conference_agenda ) ) ) {
//        print_r($conference_agenda);

			foreach ( $conference_agenda as $ite ) {
				if ( isset( $ite['Title'] ) || isset( $ite['start_time'] ) || isset( $ite['end_time'] ) || isset( $ite['venue'] ) || isset( $ite['detail'] ) ) {
					$Title      = $ite['Title'];
					$start_time = $ite['start_time'];
					$end_time = $ite['end_time'];
					$venue = $ite['venue'];
					$detail   = $ite['detail'];
					echo '<tr>';
					echo '<td><input type="text" name="conference_agenda[' . $c . '][Title]" value="' . $Title . '" style="width:70px"/> </td>';
					echo '<td><input type="text" name="conference_agenda[' . $c . '][start_time]" value="' . $start_time . '" /></td>';
					echo '<td><input type="text" name="conference_agenda[' . $c . '][end_time]" value="' . $end_time . '" /></td>';
					echo '<td><input type="text" name="conference_agenda[' . $c . '][venue]" value="' . $venue . '" /></td>';
					echo '<td><textarea name="conference_agenda[' . $c . '][detail]"/>' . $detail . '</textarea></td>';
					echo '<td><span class="remove">Remove</span></td></tr>';
					$c = $c + 1;
				}
			}
		}
		echo '</table>';
		?>
        <span id="here"></span>
        <br><span class="add"><?php _e( 'Add Conference Agenda' ); ?></span>
        <script>
            var $ = jQuery.noConflict();
            var tempVal = "";
            $(document).ready(function () {
                var count = <?php echo $c; ?>;
                $(".add").click(function () {
                    count = count + 1;
                    $('#here').append('<tr><td><input type="text" name="conference_agenda[' + count + '][Title]" style="width:70px"/></td><td><input type="text" name="conference_agenda[' + count + '][start_time]" /></td> <td><input type="text" name="conference_agenda[' + count + '][end_time]" /></td> <td><input type="text" name="conference_agenda[' + count + '][venue]" /></td> <td><textarea  name="conference_agenda[' + count + '][detail]"/></textarea></td> <td><span class="remove">Remove</span></td> </tr>');
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
function dynamic_save_postdata( $post_id ) {
	// verify if this is an auto save routine.
	// If it is our form has not been submitted, so we don't want to do anything
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// verify this came from the our screen and with proper authorization,
	// because save_post can be triggered at other times
	if ( ! isset( $_POST['dynamicMeta_conference_agenda_noncename'] ) ) {
		return;
	}

	if ( ! wp_verify_nonce( $_POST['dynamicMeta_conference_agenda_noncename'], plugin_basename( __FILE__ ) ) ) {
		return;
	}

	// OK, we're authenticated: we need to find and save the data

	$conference_agenda = $_POST['conference_agenda'];

	update_post_meta( $post_id, 'conference_agenda', $conference_agenda );
}