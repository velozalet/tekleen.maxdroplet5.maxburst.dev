<?php $posts_tradeShows_asc = get_needs_post('shows', -1, 0, '', 'date', 'ASC');?>
<div id="announcements_posts_list" class="main__grid announcements-grid-container">
	<?php foreach( $posts_tradeShows_asc as $post ): setup_postdata($post);?>

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

<?php $posts_tradeShows_desc = get_needs_post('shows', -1, 0, '', 'date', 'DESC');?>
<div id="announcements_posts_list_desc" class="main__grid announcements-grid-container display-none">
	<?php foreach( $posts_tradeShows_desc as $post ): setup_postdata($post);?>

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


