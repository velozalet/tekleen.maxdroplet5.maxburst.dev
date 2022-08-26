<?php
/**
 * Template Name: Announcements
 *
 * @package maxcanvas
 */

get_header();?>
<?php
if( $_POST ){
	if( $_POST["date_select"] ){ $date_select = $_POST["date_select"]; }
	if( $_POST["type_select"] ){ $type_select = array(array('taxonomy' => 'show-taxonomy','field' => 'ID', 'terms' => $_POST["type_select"])); }
}
if(!$date_select){ $date_select = 'asc'; }
if(!$type_select){ $type_select = false; }
?>

        <!-- body-->
        <div class="page__body">
            <!-- promo-->
            <div class="promo is-secondary">
                <div class="promo__container container is-large">
                    <div class="promo__inner">
                        <div class="promo__main">
                            <div class="promo__label"><?=get_field('banner_text',get_the_ID());?></div>

							<?php $trade_shows_for_banner = get_field('select_trade_shows_to_display_for_banner',get_the_ID());?>
                            <h2 class="promo__title"><?=$trade_shows_for_banner->post_title;?></h2>
                            <div class="promo__caption">
	                            <?=get_field('country',$trade_shows_for_banner->ID);?>
	                            <?php if( get_field('place',$trade_shows_for_banner->ID) ):?>
	                                <?=', ';?><?=get_field('place',$trade_shows_for_banner->ID);?></div>
	                            <?php endif;?>
                            <div class="promo__dates">
	                            <div class="promo__date"> <span><?=get_field('event_date',$trade_shows_for_banner->ID);?></span> </div>
                            </div>
                        </div>
                        <img class="promo__img is-accent" src="<?=get_field('logo',$trade_shows_for_banner->ID);?>" alt="<?=get_bloginfo('name');?>">
                    </div>
                </div>
            </div>
            <!-- end promo-->

            <main class="main">
                <div class="main__container container is-large">
                    <div class="main__main">
                        <div class="sorting main__sorting">
                            <form class="sorting__form" action="" method="post">
                                <h4 class="sorting__title">Upcoming Events</h4>

                                <div class="sorting__actions">
	                                <?php if( $_POST ):?> <div id="reset_upcoming_events_form" title="Reset All filters">X</div><?php endif;?>
                                    <div class="sorting__select">
                                        <select id="date_select" class="js-select" name="date_select" data-placeholder="By Date">
                                            <option value=""></option>
                                            <option value="asc" <?=($_POST["date_select"] == 'asc') ? 'selected': '';?>>less to more</option>
                                            <option value="desc" <?=($_POST["date_select"] == 'desc') ? 'selected': '';?>>more to less</option>
                                        </select>
                                    </div>
                                    <div class="sorting__select">
	                                    <?php $show_taxonomy_categories = get_categories( array('taxonomy'=>'show-taxonomy','orderby'=>'name','order'=>'DESC') );?>
                                        <select id="event_type__select" class="js-select" name="type_select" data-placeholder="Event Type">
	                                        <option value=""></option>
	                                        <?php foreach( $show_taxonomy_categories as $cat ):?>
                                            <option value="<?=$cat->term_id;?>" <?=($_POST["type_select"] == $cat->term_id) ? 'selected': '';?>><?=str_replace('Event', '', $cat->name);?></option>
	                                        <?php endforeach;?>
                                        </select>
                                    </div>

                                    <div class="sorting__select" style="display:none !important;">
                                        <select class="js-select" data-placeholder="Any Category">
                                            <option value=""></option>
                                            <option value="1">Weekdays1</option>
                                            <option value="1">Weekdays2</option>
                                        </select>
                                    </div>
                                    <div class="sorting__views">
                                        <div class="sorting__view sorting__view--list is-active" data-view="list">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_4441_6282)">
                                                    <path d="M21.7914 0.0126953H2.20861C0.990797 0.0126953 0 1.00345 0 2.22281C0 3.44062 0.990797 4.43141 2.20861 4.43141H21.7914C23.0092 4.43141 24 3.44062 24 2.22281C24 1.00345 23.0092 0.0126953 21.7914 0.0126953Z" fill="#C4C4C4" />
                                                    <path d="M21.7914 9.79053H2.20861C0.990797 9.79053 0 10.7813 0 12.0006C0 13.2184 0.990797 14.2092 2.20861 14.2092H21.7914C23.0092 14.2092 24 13.2184 24 12.0006C24 10.7813 23.0092 9.79053 21.7914 9.79053Z" fill="#C4C4C4" />
                                                    <path d="M21.7914 19.5684H2.20861C0.990797 19.5684 0 20.5592 0 21.7785C0 22.9963 0.990797 23.9871 2.20861 23.9871H21.7914C23.0092 23.9871 24 22.9963 24 21.7785C24 20.5592 23.0092 19.5684 21.7914 19.5684Z" fill="#C4C4C4" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4441_6282">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div class="sorting__view sorting__view--grid" data-view="grid">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.71771 0H1.82723C0.819634 0 0 0.819634 0 1.82723V8.71771C0 9.7253 0.819634 10.5449 1.82723 10.5449H8.71771C9.7253 10.5449 10.5449 9.7253 10.5449 8.71771V1.82723C10.5448 0.819634 9.7253 0 8.71771 0Z" fill="#C4C4C4" />
                                                <path d="M22.1728 0H15.2823C14.2747 0 13.4551 0.819634 13.4551 1.82723V8.71771C13.4551 9.7253 14.2747 10.5449 15.2823 10.5449H22.1728C23.1804 10.5449 24 9.7253 24 8.71771V1.82723C24 0.819634 23.1804 0 22.1728 0Z" fill="#C4C4C4" />
                                                <path d="M8.71771 13.4551H1.82723C0.819634 13.4551 0 14.2746 0 15.2822V22.1727C0 23.1803 0.819634 23.9999 1.82723 23.9999H8.71771C9.7253 23.9999 10.5449 23.1803 10.5449 22.1727V15.2822C10.5448 14.2746 9.7253 13.4551 8.71771 13.4551Z" fill="#C4C4C4" />
                                                <path d="M22.1728 13.4551H15.2823C14.2747 13.4551 13.4551 14.2747 13.4551 15.2823V22.1728C13.4551 23.1804 14.2747 24 15.2823 24H22.1728C23.1804 23.9999 24 23.1803 24 22.1727V15.2822C24 14.2746 23.1804 13.4551 22.1728 13.4551Z" fill="#C4C4C4" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
	                            <button id="submit_upcoming_events_form" type="submit" style="display:none !important;">Send</button>
                            </form>
                        </div>

						<div id="announcements_posts_container">
							<?php //$posts_tradeShows = get_needs_post('shows', -1, 0, '', 'date', $date_select);?>
							<?php
							$posts_tradeShows = get_posts( array(
								'numberposts' => -1,
								'orderby'     => 'date',
								'order'       => $date_select,
								'include'     => array(),
								'exclude'     => array(),
								'post_type'   => 'shows',
								'tax_query'    => $type_select,
								'suppress_filters' => false,
							) );
							?>
							<div id="announcements_posts_list" class="main__grid announcements-grid-container">
								<?php foreach( $posts_tradeShows as $post ): setup_postdata($post);?>

									<!-- col-->
									<div class="grid-container-item"
									     data-category="<?=get_the_terms($post->ID, 'show-taxonomy')[0]->term_id;?>"
									     data-slug_category="<?=get_the_terms($post->ID, 'show-taxonomy')[0]->slug;?>"
									     data-post_id="<?=$post->ID;?>"
									     data-timestamp="<?=get_post_timestamp($post->ID,$field = 'date');?>"
									>
										<div class="trade-card--grid">
											<div class="trade-card--grid-item trade-card--grid-item-date">
												<div>
													<?php $trade_card_item_date = explode(" ",get_field('event_date',$post->ID));?>
													<aside><?=$trade_card_item_date[0];?></aside>
													<aside><?=str_replace(',', '', $trade_card_item_date[1]);?></aside>
												</div>
											</div>
											<div class="trade-card--grid-item trade-card--grid-item-photo">
												<div>
													<!--<a class="trade-card__photo" href="#"> 	<img src="http://tekleen.maxdroplet5.maxburst.dev/wp-content/uploads/2022/08/1-1.jpg" alt=""></a>-->
													<a class="trade-card__photo" href="<?=get_permalink();?>" style="background-image: url(<?=get_field('logo',$post->ID);?>);"></a>
												</div>
											</div>
											<div class="trade-card--grid-item trade-card--grid-item-text">
												<h3><a class="trade-card__title" href="<?=get_permalink();?>"><?=$post->post_title;?></a></h3>
												<?php if( get_the_excerpt() ):?>
													<p><?=cut_string( get_the_excerpt(),350 )?></p>
												<?php else:?>
													<p><?=cut_string( $post->post_content,350 )?></p>
												<?php endif;?>
											</div>
											<div class="trade-card--grid-item trade-card--grid-item-info">
												<div>
													<a class="btn btn-outline detail-upcoming-event" href="<?=get_permalink();?>" target="_self">Read More</a>
													<div class="socials socials-upcoming-event">
														<?php if( get_field('speaker_facebook',$post->ID) ):?>
															<div class="socials__item">
																<a class="socials__link" href="<?=get_field('speaker_facebook',$post->ID);?>" target="_blank">
																	<img src="<?=home_url();?>/wp-content/uploads/2022/08/1.svg" alt="<?=get_bloginfo('name');?>">
																</a>
															</div>
														<?php endif;?>
														<?php if( get_field('speaker_twitter',$post->ID) ):?>
															<div class="socials__item">
																<a class="socials__link" href="<?=get_field('speaker_twitter',$post->ID);?>" target="_blank">
																	<img src="<?=home_url();?>/wp-content/uploads/2022/08/2.svg" alt="<?=get_bloginfo('name');?>">
																</a>
															</div>
														<?php endif;?>
														<?php if( get_field('speaker_linkedin',$post->ID) ):?>
															<div class="socials__item">
																<a class="socials__link" href="<?=get_field('speaker_linkedin',$post->ID);?>" target="_blank">
																	<img src="<?=home_url();?>/wp-content/uploads/2022/08/3.svg" alt="<?=get_bloginfo('name');?>">
																</a>
															</div>
														<?php endif;?>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- end col-->
								<?php endforeach;?>
								<?php wp_reset_postdata();?>
							</div>

							<?php //get_template_part('templates/component/announcements_posts_grid');?>
							<?php //get_template_part('templates/component/announcements_posts_list');?>

							<div id="announcements_posts_grid" class="main__grid display-none">
								<?php foreach( $posts_tradeShows as $post ): setup_postdata($post);?>
									<!-- col-->
									<div class="main__col col-3"
									     data-category="<?=get_the_terms($post->ID, 'show-taxonomy')[0]->term_id;?>"
									     data-slug_category="<?=get_the_terms($post->ID, 'show-taxonomy')[0]->slug;?>"
									     data-post_id="<?=$post->ID;?>"
									     data-timestamp="<?=get_post_timestamp($post->ID,$field = 'date');?>"
									>
										<div class="trade-card">
											<a class="trade-card__photo" href="<?=get_permalink();?>" style="background-image: url(<?=get_field('logo',$post->ID);?>);">
												<!--<img src="--><?//=get_field('logo',$post->ID);?><!--" alt="">-->
											</a>
											<div class="trade-card__body"> <a class="trade-card__title" href="<?=get_permalink();?>"><?=$post->post_title;?></a>
												<div class="trade-card__chips">
													<div class="trade-card__chips-row">
														<div class="trade-card__chips-title">When:</div>
														<div class="trade-card__chips-text"><?=get_field('event_date',$post->ID);?></div>
													</div>
													<div class="trade-card__chips-row">
														<div class="trade-card__chips-title">Where:</div>
														<div class="trade-card__chips-text"><?=get_field('place',$post->ID);?><?=get_field('country',$post->ID);?>
															<?php
															$link = get_field('view_map_link',$trade_shows_post->ID);
															if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
																?>
																<a href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
															<?php endif;?>
														</div>
													</div>
													<div class="trade-card__chips-row">
														<div class="trade-card__chips-title">Booth:</div> <div class="trade-card__chips-text"><?=str_replace('Booth', '', get_field('booth',$post->ID));?></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- end col-->
								<?php endforeach;?>
								<?php wp_reset_postdata();?>
							</div>
						</div> <!--/#announcements_posts_container-->
                    </div> <!--/.sorting main__sorting-->
                </div> <!--/.main__main-->
            </main>

			<?php get_template_part('templates/component/announcements_speaker_slider');?>

			<?php get_template_part('templates/content/flexible-content');?>

<?php get_footer(); ?>