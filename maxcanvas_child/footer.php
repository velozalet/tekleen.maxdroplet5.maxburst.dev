<?php
/**
 * FOOTER
 *
 * @package maxcanvas
 */
?>
<?php
$locations = get_nav_menu_locations(); //get all menu locations
$footer1 = wp_get_nav_menu_object($locations['footer1']); //"ABOUT US" Menu
$footer2 = wp_get_nav_menu_object($locations['footer2']); //"Filters" Menu
$footer3 = wp_get_nav_menu_object($locations['footer3']); //"IRRIGATION" Menu
$footer4 = wp_get_nav_menu_object($locations['footer4']); //"INDUSTRIAL" Menu
?>
		<!-- footer-->
        <div class="page__footer">
            <footer class="footer">
                <div class="footer__container container is-large">
                    <div class="footer__inner">
                        <div class="footer__aside">
                            <img class="footer__logo" src="<?=get_field('logo_upload', 'options');?>" alt="<?=get_bloginfo('name');?>" />
                        </div>
                        <div class="footer__data">
                            <div class="footer__main">
                                <div class="footer__grid">
                                    <div class="footer__col">
                                        <div class="footer__text"><?=get_field('contact_information', 'options');?></div>
                                    </div>
                                    <div class="footer__col">
                                        <div class="footer__block">
                                            <div class="footer__title">Email</div><a class="footer__link" href="mailto:<?=get_field('contact_email', 'options');?>"><?=get_field('contact_email', 'options');?></a>
                                        </div>
                                    </div>
                                    <div class="footer__col">
                                        <div class="footer__block">
                                            <div class="footer__title">Call</div>
	                                        <a class="footer__link" href="tel:<?=get_numerics( get_field('contact_phone_number1', 'options') );?>"><?=get_field('contact_phone_number1', 'options');?></a>
	                                        <a class="footer__link" href="tel:<?=get_numerics( get_field('contact_phone_number2', 'options') );?>"><?=get_field('contact_phone_number2', 'options');?></a>
                                        </div>
                                        <div class="footer__block">
                                            <div class="footer__title">Fax</div><a class="footer__link" href="#"><?=get_field('contact_fax', 'options');?></a>
                                        </div>
                                    </div>
                                    <div class="footer__col">
										<?php
										$link = get_field('request_quote_button', 'options');
										if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
										?>
		                                    <a class="btn btn-outline footer__btn" href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
										<?php endif; ?>

                                        <div class="socials footer__socials">
	                                    <?php if( get_field('social_links', 'options') ):?>
	                                        <?php
	                                        foreach( get_field('social_links', 'options') as $social_link_item):?>
		                                        <div class="socials__item">
			                                        <a class="socials__link" href="<?=$social_link_item['link_social'];?>">
				                                        <img src="<?=$social_link_item['icon_social'];?>" alt="<?=get_bloginfo('name');?>" />
			                                        </a>
		                                        </div>
	                                        <?php endforeach;?>
	                                    <?php endif;?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer__bottom">
                                <div class="footer__grid">
									<!--"INDUSTRIAL" Menu-->
                                    <div class="footer__col">
                                        <div class="footer__title"><?=$footer4->name;?></div>
										<?php
										$args = [
											'theme_location'  => 'footer4',
											'menu'            => 'Industrial',
											'container'       => false,
											'container_class' => '',
											'container_id'    => '',
											'menu_class'      => 'footer__list',
											'menu_id'         => '',
											'add_li_class'     => 'footer__item',
											'link_class'     => 'footer__link',
											'echo'            => true,
											'fallback_cb'     => 'wp_page_menu',
											'before'          => '',
											'after'           => '',
											'link_before'     => '',
											'link_after'      => '',
											'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
											'depth'           => 0,
											'walker'          => '',
										];
										wp_nav_menu($args);
										?>
                                    </div>
	                                <!--/"INDUSTRIAL" Menu-->
	                                <!--"IRRIGATION" Menu-->
                                    <div class="footer__col">
                                        <div class="footer__title"><?=$footer3->name;?></div>
										<?php
										$args = [
											'theme_location'  => 'footer3',
											'menu'            => 'Irrigation',
											'container'       => false,
											'container_class' => '',
											'container_id'    => '',
											'menu_class'      => 'footer__list',
											'menu_id'         => '',
											'add_li_class'     => 'footer__item',
											'link_class'     => 'footer__link',
											'echo'            => true,
											'fallback_cb'     => 'wp_page_menu',
											'before'          => '',
											'after'           => '',
											'link_before'     => '',
											'link_after'      => '',
											'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
											'depth'           => 0,
											'walker'          => '',
										];
										wp_nav_menu($args);
										?>
                                    </div>
	                                <!--/"IRRIGATION" Menu-->
	                                <!--"FILTERS" Menu-->
                                    <div class="footer__col">
                                        <div class="footer__title"><?=$footer2->name;?></div>
										<?php
										$args = [
											'theme_location'  => 'footer2',
											'menu'            => 'Filters',
											'container'       => false,
											'container_class' => '',
											'container_id'    => '',
											'menu_class'      => 'footer__list',
											'menu_id'         => '',
											'add_li_class'     => 'footer__item',
											'link_class'     => 'footer__link',
											'echo'            => true,
											'fallback_cb'     => 'wp_page_menu',
											'before'          => '',
											'after'           => '',
											'link_before'     => '',
											'link_after'      => '',
											'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
											'depth'           => 0,
											'walker'          => '',
										];
										wp_nav_menu($args);
										?>
                                    </div>
	                                <!--/"FILTERS" Menu-->
	                                <!--"ABOUT US" Menu-->
                                    <div class="footer__col">
                                        <div class="footer__title"><?=$footer1->name;?></div>
										<?php
										$args = [
											'theme_location'  => 'footer1',
											'menu'            => 'About Us',
											'container'       => false,
											'container_class' => '',
											'container_id'    => '',
											'menu_class'      => 'footer__list',
											'menu_id'         => '',
											'add_li_class'     => 'footer__item',
											'link_class'     => 'footer__link',
											'echo'            => true,
											'fallback_cb'     => 'wp_page_menu',
											'before'          => '',
											'after'           => '',
											'link_before'     => '',
											'link_after'      => '',
											'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
											'depth'           => 0,
											'walker'          => '',
										];
										wp_nav_menu($args);
										?>
                                    </div>
	                                <!--/"ABOUT US" Menu-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <!-- end footer-->
		<?php wp_footer(); ?>
    </body>
</html>
