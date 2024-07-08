<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2/28/2017
 * Time: 9:30 AM
 */

// Creating the widget
class socials_widget extends WP_Widget
{

    function __construct()
    {
        parent::__construct(
// Base ID of your widget
            'wpb_widget',

// Widget name will appear in UI
            __('Socials Widget', 'socials_widget_domain'),

// Widget description
            array('description' => __('Sample widget based on WPBeginner Tutorial', 'socials_widget_domain'),)
        );
    }

// Creating widget front-end
// This is where the action happens
    public function widget($args, $instance)
    {
        $facebook = apply_filters('widget_title', $instance['facebook']);
        $twitter = apply_filters('widget_title', $instance['twitter']);
        $googleplus = apply_filters('widget_title', $instance['googleplus']);
// before and after widget arguments are defined by themes
        echo $args['before_widget'];

// This is where you run the code and display the output
        echo '<li><a href="' . $facebook . '" class="facebook"><i class="fa fa-facebook">&nbsp;</i></a></li>&nbsp;';
        echo '<li><a href="' . $twitter . '" class="twitter"><i class="fa fa-twitter">&nbsp;</i></a></li>&nbsp;';
        echo '<li><a href="' . $googleplus . '" class="google-plus"><i class="fa fa-google-plus">&nbsp;</i></a></li>&nbsp;';
        echo $args['after_widget'];
    }

// Widget Backend
    public function form($instance)
    {
        if (isset($instance['facebook'])) {
            $facebook = $instance['facebook'];
        } else {
            $facebook = __('', 'socials_widget_domain');
        }
        if (isset($instance['twitter'])) {
            $twitter = $instance['twitter'];
        } else {
            $twitter = __('', 'socials_widget_domain');
        }
        if (isset($instance['googleplus'])) {
            $googleplus = $instance['googleplus'];
        } else {
            $googleplus = __('', 'socials_widget_domain');
        }
// Widget admin form
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('facebook'); ?>"><?php _e('Facebook:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('facebook'); ?>"
                   name="<?php echo $this->get_field_name('facebook'); ?>" type="text"
                   value="<?php echo esc_attr($facebook); ?>"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('twitter'); ?>"><?php _e('Twitter:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('twitter'); ?>"
                   name="<?php echo $this->get_field_name('twitter'); ?>" type="text"
                   value="<?php echo esc_attr($twitter); ?>"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('googleplus'); ?>"><?php _e('Google Plus:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('googleplus'); ?>"
                   name="<?php echo $this->get_field_name('googleplus'); ?>" type="text"
                   value="<?php echo esc_attr($googleplus); ?>"/>
        </p>
        <?php
    }

// Updating widget replacing old instances with new
    public function update($new_instance, $old_instance)
    {
        $instance = array();
        $instance['facebook'] = (!empty($new_instance['facebook'])) ? strip_tags($new_instance['facebook']) : '';
        $instance['twitter'] = (!empty($new_instance['twitter'])) ? strip_tags($new_instance['twitter']) : '';
        $instance['googleplus'] = (!empty($new_instance['googleplus'])) ? strip_tags($new_instance['googleplus']) : '';
        return $instance;
    }
} // Class socials_widget ends here

// Register and load the widget
function wpb_load_widget()
{
    register_widget('socials_widget');
}

add_action('widgets_init', 'wpb_load_widget');