<?php $posts_tradeShows2 = get_needs_post('shows', -1, 0, '', 'date', 'ASC');?>
<div id="announcements_posts_grid" class="main__grid display-none">
	<?php foreach( $posts_tradeShows2 as $post ): setup_postdata($post);?>
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

<?php $posts_tradeShows2_desc = get_needs_post('shows', -1, 0, '', 'date', 'DECS');?>
<div id="announcements_posts_grid_desc" class="main__grid display-none">
	<?php foreach( $posts_tradeShows2_desc as $post ): setup_postdata($post);?>
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