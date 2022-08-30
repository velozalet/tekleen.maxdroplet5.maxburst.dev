<?php get_header(); ?>
<!-- body-->
<div class="page__body">
	<section class="section">
		<div class="about-company">
			<div class="about-company__container container is-large">
				<div class="about-company__inner">
					<div class="about-company__main">
						<img class="about-company__img visibility-hidden" src="<?php echo get_stylesheet_directory_uri(); ?>/img/general/about/3.png" alt="<?=get_bloginfo('name');?>">
						<ul class="bubbles">
							<li><div class="inner"></div></li>
							<li><div class="inner"></div></li>
							<li><div class="inner"></div></li>
							<li><div class="inner"></div></li>
							<li><div class="inner"></div></li>
							<li><div class="inner"></div></li>
							<li><div class="inner"></div></li>
							<li><div class="inner"></div></li>
							<li><div class="inner"></div></li>
						</ul>
					</div>
					<div class="about-company__aside">
						<a class="about-company__link" href="<?=home_url();?>/industrial">< Industrial Filters</a>

						<h2 class="about-company__title"><?=get_the_title();?></h2>
						<div class="about-company__text">
							<p><?=get_the_excerpt();?></p>
						</div>
					</div>
				</div>

				<?php $slider_imgs = get_field( 'slider', get_the_ID() );?>
				<?php if($slider_imgs):?>
				<div class="gallery-swiper about-company__swiper">
					<?php if( count($slider_imgs) >= 2 ):?>
					<div class="gallery-swiper__swiper-container js-gallery-swiper">
						<div class="gallery-swiper__swiper-wrapper js-swiper-wrapper">
							<?php foreach( $slider_imgs as $item ):?>
							<div class="gallery-swiper__swiper-slide js-swiper-slide">
								<div class="gallery-card">
									<a class="gallery-card__photo" href="#">
										<img src="<?=$item['image']['url'];?>" alt="<?=get_bloginfo('name');?>">
									</a>
									<div class="gallery-card__body"> <a class="gallery-card__title" href="#"><?=$item['title'];?></a>
										<div class="gallery-card__text"><?=$item['sub_title'];?></div>
									</div>
								</div>
							</div>
							<?php endforeach;?>
						</div>
						<div class="gallery-swiper__swiper-actions">
							<div class="gallery-swiper__swiper-button is-prev"></div>
							<div class="gallery-swiper__swiper-button is-next"></div>
						</div>
					</div>
					<?php else:?>
						<div class="gallery-card gallery-card-single">
							<a class="gallery-card__photo" href="#">
								<img src="<?=$slider_imgs[0]['image']['url'];?>" alt="<?=get_bloginfo('name');?>">
							</a>
							<div class="gallery-card__body"> <a class="gallery-card__title" href="#"><?=$slider_imgs[0]['title'];?></a>
								<div class="gallery-card__text"><?=$slider_imgs[0]['sub_title'];?></div>
							</div>
						</div>
					<?php endif;?>
				</div>
				<?php endif;?>

				<div class="about-company__description"><?=get_the_content();?></div>
			</div>
		</div>
	</section>
	<!-- end section-->

	<?php get_template_part('templates/content/flexible-content');?>

</div>
<!-- end body-->
<?php get_footer();?>
