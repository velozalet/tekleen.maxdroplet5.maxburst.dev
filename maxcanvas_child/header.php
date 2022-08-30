<?php
/**
 * HEADER
 *
 * @package maxcanvas
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php if (strpos($_SERVER['HTTP_USER_AGENT'],"MSIE 8")) { header("X-UA-Compatible: IE=Edge");} ?>
<?php wp_head(); ?>
</head>

    <body <?php body_class(); ?> id="body">
        <mark id="breakpoint_check" style="display:none!important;"></mark>
        <!-- banner-->
        <?php if( get_field('toggle_display', 'options')[0] ):?>
        <div class="page__banner">
            <div class="banner">
                <div class="banner__container container">
                    <div class="banner__inner">
	                    <a class="banner__text" href="<?=esc_url( home_url('/filters') );?>" target="_blank"><?php the_field('notification_bar', 'options');?></a>
                    </div>
                </div>
            </div>
        </div>
        <?php endif;?>
        <!-- end banner-->
        <!-- header-->
        <div class="page__header">
            <header class="header">
                <div class="header__container container is-large">
                    <div class="header__inner">
                        <div class="header__main">
                            <a class="header__logo" href="<?=esc_url( home_url() );?>">
	                            <img src="<?=get_field('logo_upload', 'options');?>" alt="<?=get_bloginfo('name');?>">
                            </a>
                            <?php wp_nav_menu([
                                'theme_location'  => 'primary',
                                'container'       => 'div',
                                'container_class' => 'header__menu menu',
                                'menu_class'      => 'menu__list',
                                'add_li_class'    => 'menu__item',
                                'link_class'      => 'menu__link',
                                'walker'          => new Custom_Submenu_Container
                            ]); ?>
                            <?php /* ?>
                            <div class="menu header__menu">
                                <ul class="menu__list">
                                    <li class="menu__item"><a class="menu__link" href="#">Industrial</a>
                                        <div class="menu__dropdown">
                                            <div class="menu__grid">
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">HVAC</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Sugar</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Plastics</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Petrochemical</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Metal Processing</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Food Industry</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Pulp & Paper</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Waste Water</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Power Generation</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Drinking Water</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Sea Water Filtration</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Car Wash</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Prepared Foods</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Swimming Pools</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Data Center</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Oil Production</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Beverages</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Rain Harvesting</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link is-accent" href="#">See All Industrial Filters »</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                            </div>
                                        </div>
                                    </li>
                                    <li class="menu__item"> <a class="menu__link" href="#">Irrigation</a>
                                        <div class="menu__dropdown">
                                            <div class="menu__grid">
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">HVAC</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Sugar</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Plastics</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Petrochemical</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Metal Processing</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Food Industry</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Pulp & Paper</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Waste Water</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Power Generation</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Drinking Water</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Sea Water Filtration</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Car Wash</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Prepared Foods</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Swimming Pools</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Data Center</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Oil Production</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Beverages</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Rain Harvesting</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link is-accent" href="#">See All Industrial Filters »</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                            </div>
                                        </div>
                                    </li>
                                    <li class="menu__item"> <a class="menu__link" href="#">Filters</a>
                                        <div class="menu__dropdown">
                                            <div class="menu__grid">
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">HVAC</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Sugar</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Plastics</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Petrochemical</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Metal Processing</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Food Industry</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Pulp & Paper</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Waste Water</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Power Generation</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Drinking Water</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Sea Water Filtration</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Car Wash</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Prepared Foods</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Swimming Pools</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Data Center</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Oil Production</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Beverages</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Rain Harvesting</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link is-accent" href="#">See All Industrial Filters »</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                            </div>
                                        </div>
                                    </li>
                                    <li class="menu__item"> <a class="menu__link" href="#">About us</a>
                                        <div class="menu__dropdown">
                                            <div class="menu__grid">
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">HVAC</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Sugar</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Plastics</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Petrochemical</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Metal Processing</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Food Industry</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Pulp & Paper</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Waste Water</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Power Generation</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Drinking Water</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Sea Water Filtration</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Car Wash</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Prepared Foods</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Swimming Pools</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Data Center</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                                <!-- col-->
                                                <div class="menu__col">
                                                    <ul class="menu__sub-list">
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Oil Production</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Beverages</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link" href="#">Rain Harvesting</a>
                                                        </li>
                                                        <li class="menu__sub-item"> <a class="menu__sub-link is-accent" href="#">See All Industrial Filters »</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- end col-->
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <?php */ ?>
                        </div>
                        <div class="header__aside">
	                        <a class="header__tel" href="tel:<?=get_numerics( get_field('phone_number', 'options') );?>"><?=get_field('phone_number', 'options');?></a>
							<?php
							$link = get_field('request_quote_button', 'options');
							if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
							?>
	                        <a class="btn btn-outline header__btn" href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
							<?php endif; ?>
                        </div>
                        <div class="header__mobile-btn"></div>
                    </div>
                </div>
            </header>
        </div>
        <!-- end header-->
