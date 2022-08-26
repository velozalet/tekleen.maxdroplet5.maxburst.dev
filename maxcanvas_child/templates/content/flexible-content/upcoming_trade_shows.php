<section class="section" style="background: #F7F7F7;">
	<div class="trade">
		<div class="trade__container container is-large">
			<div class="trade__header">
				<h2 class="trade__title"><?=get_sub_field('title_section');?></h2>
			</div>
			<div class="trade__body">
				<div class="trade__grid">
				<?php if( get_sub_field('trade_shows_post') ):?>
					<?php foreach( get_sub_field('trade_shows_post') as $trade_shows_post ):?>
					<div class="trade__col">
						<div class="trade-card">
							<a class="trade-card__photo" href="<?=$trade_shows_post->guid;?>" style="background-image: url(<?=get_field('logo',$trade_shows_post->ID);?>);">
								<!--<img src="--><?//=get_field('logo',$trade_shows_post->ID)?><!--" alt="--><?//=get_bloginfo('name');?><!--">-->
							</a>
							<div class="trade-card__body">
								<a class="trade-card__title" href="<?=$trade_shows_post->guid;?>"><?=$trade_shows_post->post_title;?></a>
								<div class="trade-card__chips">
									<div class="trade-card__chips-row">
										<div class="trade-card__chips-title">When:</div> <div class="trade-card__chips-text"><?=get_field('event_date',$trade_shows_post->ID)?></div>
									</div>
									<div class="trade-card__chips-row">
										<div class="trade-card__chips-title">Where:</div> <div class="trade-card__chips-text"><?=get_field('country',$trade_shows_post->ID)?>
										<?php
											$link = get_field('view_map_link',$trade_shows_post->ID);
											if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
											?>
												<a href="<?=esc_url($link['url']);?>" target="<?=esc_attr( $link_target );?>"><?=esc_html($link['title']);?></a>
										<?php endif;?>
										</div>
									</div>
									<div class="trade-card__chips-row">
										<div class="trade-card__chips-title">Booth:</div> <div class="trade-card__chips-text"><?=str_replace('Booth', '', get_field('booth',$trade_shows_post->ID));?></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				<?php endforeach;?>
				<?php else:?>
					<?php $posts_shows = get_needs_post('shows', 2, 0, '', 'date', 'DESC');?>
					<?php foreach( $posts_shows as $trade_shows_post ):?>
						<div class="trade__col">
							<div class="trade-card">
								<a class="trade-card__photo" href="#">
									<img src="<?=get_field('logo',$trade_shows_post->ID)?>" alt="<?=get_bloginfo('name');?>">
								</a>
								<div class="trade-card__body">
									<a class="trade-card__title" href="#"><?=$trade_shows_post->post_title;?></a>
									<div class="trade-card__chips">
										<div class="trade-card__chips-row">
											<div class="trade-card__chips-title">When:</div> <div class="trade-card__chips-text"><?=get_field('event_date',$trade_shows_post->ID)?></div>
										</div>
										<div class="trade-card__chips-row">
											<div class="trade-card__chips-title">Where:</div> <div class="trade-card__chips-text"><?=get_field('country',$trade_shows_post->ID)?>
												<?php
												$link = get_field('view_map_link',$trade_shows_post->ID);
												if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
													?>
													<a href="<?=esc_url($link['url']);?>" target="<?=esc_attr( $link_target );?>"><?=esc_html($link['title']);?></a>
												<?php endif;?>
											</div>
										</div>
										<div class="trade-card__chips-row">
											<div class="trade-card__chips-title">Booth:</div> <div class="trade-card__chips-text"><?=get_field('booth',$trade_shows_post->ID)?></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					<?php endforeach;?>
				<?php endif;?>
				</div>
			</div>
		</div>
	</div>
</section>