<?php get_header();?>
<main class="main">
	<div class="main__container container is-large single-trade-show-container">
		<div class="main__main">
			<div class="main__grid announcements-single-grid-container">
				<!-- col-->
				<div class="breadcrumbs">
					<a class="about-company__link" href="announcements/"> &lt; announcements</a>
				</div>

				<div class="grid-container-item">
					<div class="trade-card--grid">
						<div class="trade-card--grid-item trade-card--grid-item-text">
						<?php while( have_posts() ): the_post();?>
							<h1><?=the_title();?></h1>
							<?=the_content();?>
						<?php endwhile;?>
							<div class="trade-card__body">
								<div class="trade-card__chips">
									<div class="trade-card__chips-row">
										<div class="trade-card__chips-title">When:</div>
										<div class="trade-card__chips-text"><?=get_field('event_date',get_the_ID());?></div>
									</div>
									<div class="trade-card__chips-row">
										<div class="trade-card__chips-title">Where:</div>
										<div class="trade-card__chips-text"><?=get_field('place',get_the_ID());?><?=get_field('country',get_the_ID());?>
											<?php
											$link = get_field('view_map_link',get_the_ID());
											if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
												?>
												<a href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
											<?php endif;?>
										</div>
									</div>
									<div class="trade-card__chips-row">
										<div class="trade-card__chips-title">Booth:</div> <div class="trade-card__chips-text"><?=str_replace('Booth', '', get_field('booth',get_the_ID()));?></div>
									</div>
								</div>
							</div>
						</div>
						<div class="trade-card--grid-item trade-card--grid-item-photo">
							<img src="<?=get_field('logo', get_the_ID());?>" alt="">
						</div>
					</div>
				</div>
				<!-- end col-->
			</div>
		</div> <!--/.sorting main__sorting-->
	</div> <!--/.main__main-->
</main>
<?php get_footer();?>
