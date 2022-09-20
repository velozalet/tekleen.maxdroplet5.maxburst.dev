<?php if( get_sub_field('trade_shows_post') ):?>
<?php $trade_shows_post_cnt = count( get_sub_field('trade_shows_post') );?>
<section class="section">
	<div class="follow">
		<div class="follow__container container">
			<div class="follow__header">
				<h2 class="follow__title"><?=get_sub_field('title_section');?></h2>
			</div>

			<div class="follow__body">
				<div class="follow__grid">
					<?php if( get_sub_field('trade_shows_post') ):?>
					<?php foreach( get_sub_field('trade_shows_post') as $trade_shows_post ):?>
						<div class="follow__col <?=($trade_shows_post_cnt == 1) ? '': 'follow__col-border';?>">
							<div class="follow__card">
								<img class="follow__logo" src="<?=get_field('logo',$trade_shows_post->ID)?>" alt="<?=get_bloginfo('name');?>">
								<div class="follow__data">
									<div class="follow__data-title"><?=$trade_shows_post->post_title;?></div>
									<div class="follow__text"><?=get_field('place',$trade_shows_post->ID)?></div>
									<div class="follow__text"><?=get_field('country',$trade_shows_post->ID)?></div>
									<div class="follow__text"><?=get_field('event_date',$trade_shows_post->ID)?></div>
									<div class="follow__text"><?=get_field('booth',$trade_shows_post->ID)?></div>
									<?php
									$link = get_field('view_map_link',$trade_shows_post->ID);
									if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
									?>
										<a class="follow__link" href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
									<?php endif;?>
								</div>
							</div>
						</div>
					<?php endforeach;?>
					<?php else:?>
						<?php $posts_shows = get_needs_post('shows', 2, 0, '', 'date', 'DESC');?>
						<?php foreach( $posts_shows as $trade_shows_post ):?>
							<div class="follow__col">
								<div class="follow__card">
									<img class="follow__logo" src="<?=get_field('logo',$trade_shows_post->ID)?>" alt="<?=get_bloginfo('name');?>">
									<div class="follow__data">
										<div class="follow__data-title"><?=$trade_shows_post->post_title;?></div>
										<div class="follow__text"><?=get_field('place',$trade_shows_post->ID)?></div>
										<div class="follow__text"><?=get_field('country',$trade_shows_post->ID)?></div>
										<div class="follow__text"><?=get_field('event_date',$trade_shows_post->ID)?></div>
										<div class="follow__text"><?=get_field('booth',$trade_shows_post->ID)?></div>
										<?php
										$link = get_field('view_map_link',$trade_shows_post->ID);
										if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
											?>
											<a class="follow__link" href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
										<?php endif;?>
									</div>
								</div>
							</div>
						<?php endforeach;?>
					<?php endif;?>
				</div>
			</div>

			<?php
			$link = get_sub_field('optional_button_link');
			if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
				?>
				<div class="follow__footer">
					<a class="btn btn-outline follow__btn" href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
				</div>
			<?php endif; ?>

		</div>
	</div>
</section>
<?php endif;?>