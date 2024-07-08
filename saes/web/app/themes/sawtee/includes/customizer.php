<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2/21/2017
 * Time: 12:36 PM
 */

/**
 * Adds the individual sections, settings, and controls to the theme customizer
 */

//address, phone
function thub_customizer($wp_customize)
{

//Phone and address
    $wp_customize->add_section(
        'website_phone_address',
        array(
            'title' => 'Contact Footer',
            'description' => 'Contact Footer',
            'priority' => 35,
        )
    );
    //contact name
    $wp_customize->add_setting('thub_contact_name', array(
        'default' => 'Contact Name',
    ));
    $wp_customize->add_control('thub_contact_name', array(
        'label' => 'Contact Name',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));

    //phone
    $wp_customize->add_setting('thub_detail', array(
        'default' => 'Detail',
    ));
    $wp_customize->add_control('thub_detail', array(
        'label' => 'Detail',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));

    //phone
    $wp_customize->add_setting('thub_email', array(
        'default' => 'Email',
    ));
    $wp_customize->add_control('thub_email', array(
        'label' => 'Email',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));

    //phone
    $wp_customize->add_setting('thub_phone', array(
        'default' => 'Phone',
    ));
    $wp_customize->add_control('thub_phone', array(
        'label' => 'Phone',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));

//addreess
    $wp_customize->add_setting('thub_address_heading', array(
        'default' => 'Thamel, Kathmandu',
    ));
    $wp_customize->add_control('thub_address_heading', array(
        'label' => 'Address Heading',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));
//addreess
    $wp_customize->add_setting('thub_address', array(
        'default' => 'Thamel, Kathmandu',
    ));
    $wp_customize->add_control('thub_address', array(
        'label' => 'Address line 1',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));
//addreess
    $wp_customize->add_setting('thub_address2', array(
        'default' => 'Thamel, Kathmandu',
    ));
    $wp_customize->add_control('thub_address2', array(
        'label' => 'Address line 2',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));
//addreess
    $wp_customize->add_setting('thub_address3', array(
        'default' => 'Thamel, Kathmandu',
    ));
    $wp_customize->add_control('thub_address3', array(
        'label' => 'Address line 3',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));
//addreess
    $wp_customize->add_setting('thub_address4', array(
        'default' => 'Thamel, Kathmandu',
    ));
    $wp_customize->add_control('thub_address4', array(
        'label' => 'Address line 4',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));
//addreess
    $wp_customize->add_setting('thub_address5', array(
        'default' => 'Thamel, Kathmandu',
    ));
    $wp_customize->add_control('thub_address5', array(
        'label' => 'Address line 5',
        'section' => 'website_phone_address',
        'type' => 'text',
        'sanitize_callback' => 'thub_sanitize_text',
    ));

}

add_action('customize_register', 'thub_customizer');

/*
 * sanitize text input
 */
function thub_sanitize_text($input)
{
    return wp_kses_post(force_balance_tags($input));
}