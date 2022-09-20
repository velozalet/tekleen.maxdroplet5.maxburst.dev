<?php $posts_tradeShows3 = get_needs_post('shows', -1, 0, '', 'date', 'ASC'); //dd($posts_tradeShows3);?>
<section class="section">



	<div class="speaker">
		<div class="speaker__container container is-large">
			<div class="speaker__swiper js-speaker-swiper">

				<div class="speaker__swiper-wrapper js-swiper-wrapper">
					<?php foreach( $posts_tradeShows3 as $post ): setup_postdata($post);?>
						<?php if(get_field('speaker_name',$post->ID)):?>
						<div class="speaker__swiper-slide js-swiper-slide">
							<div class="speaker-card">
								<div class="speaker-card__data">
									<div class="speaker-card__label">Meet our Speaker</div>
									<div class="speaker-card__info">
										<h2 class="speaker-card__title"><?=get_field('speaker_name',$post->ID);?></h2>
									</div>
									<div class="speaker-card__text"> <p><?=get_field('speaker_info',$post->ID);?></p> </div>
								</div>
								<?php if( get_field('speaker_photo',$post->ID) ):?>
								<div class="speaker-card__photo">
									<img src="<?=get_field('speaker_photo',$post->ID);?>" alt="<?=get_bloginfo('name');?>">
								</div>
								<?php endif;?>
							</div>
						</div>
						<?php endif;?>
					<?php endforeach;?>
					<?php wp_reset_postdata();?>
				</div>
<!--				<div class="speaker__swiper-actions">-->
<!--					<div class="speaker__swiper-button is-prev js-speaker-prev"></div>-->
<!--				</div>-->
				<div class="speaker__swiper-actions">
					<div class="speaker__swiper-button is-next js-speaker-next"></div>
				</div>
			</div>
		</div>
	</div>


</section>