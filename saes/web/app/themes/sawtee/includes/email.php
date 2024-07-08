<?php
/**
 * Created by PhpStorm.
 * User: Ultrabyte
 * Date: 4/27/2017
 * Time: 1:14 PM
 */

// Ajax Booking General Package Form
function generalMessage()
{
    global $wpdb;
    $adminEmail = get_bloginfo('admin_email');
    $name = $_POST['fullname'];
    $email = $_POST['email'];
    $package_name = $_POST['package_name'];
    $link = $_POST['link'];
    $checkin = $_POST['checkin'];
    $checkout = $_POST['checkout'];
    $adults = $_POST['adults'];
    $children = $_POST['children'];

    $quote = 'Name: ' . $name . "\n\r";
    $quote .= 'Email: ' . $email . "\n\r";
    $quote .= 'Adults: ' . $adults . "\n\r";
    $quote .= 'Check in Date: ' . $checkin . "\n\r";
    $quote .= 'Check out Date: ' . $checkout . "\n\r";
    $quote .= 'Adults: ' . $adults . "\n\r";
    $quote .= 'Children: ' . $children . "\n\r";
    $quote .= 'Package Name: ' . $package_name . "\n\r";
    $quote .= 'Link: ' . $link . "\n\r";
    $to = $adminEmail; // put your email here
    $headers = 'From:' . $name . ' <' . $email . '>' . "\r\n";
    $subject = 'Travel Talents General Booking Form';

    if (wp_mail($to, $subject, $quote, $headers) === FALSE) {
        echo "<h4 style='color:#5488c2;'>Error in Booking Form!!</h4>";
    } else {
        echo "<h4 style='color:#5488c2;'>Booking Successfully Done!!</h4>";
    }
    die();
}

add_action('wp_ajax_generalMessage', 'generalMessage');
add_action('wp_ajax_nopriv_generalMessage', 'generalMessage'); // not really needed

// Booking Form for contact Pages
function contactForm() {

    $adminEmail = get_bloginfo( 'admin_email' );;
    $name    = $_POST['fullName'];
    $email   = $_POST['email'];
    $phone   = $_POST['phone'];
    $message = $_POST['message'];
    $quote   = 'Full Name: ' . $name . "\n\r" . 'Email: ' . $email . "\n\r" . 'Phone: ' . $phone . "\n\r" . 'Message: ' . $message . "\n\r";
    $to      = $adminEmail; // put your email here
    $headers = 'From:' . $name . '<' . $email . '>' . "\r\n"; // put user's email here or duplicate your email
    $subject = 'Contact Form';

    if ( wp_mail( $to, $subject, $quote, $headers ) === false ) {
        echo "Error";
    } else {
        echo "<h3> Mail Sent Successfully</h3>";
    }
    die();
}

add_action( 'wp_ajax_contactForm', 'contactForm' );
add_action( 'wp_ajax_nopriv_contactForm', 'contactForm' ); // not really needed