<?php
/**
 * Template Name: About Us
 *
 * @package maxcanvas
 */

get_header(); ?>

<!-- body-->
<div class="page__body">
    <!-- promo-->
    <div class="promo">
        <div class="promo__container container is-large">
            <div class="promo__inner is-small">
				<?php get_template_part('templates/component/page-subheader');?>
            </div>
        </div>
    </div>
    <!-- end promo-->

	<section class="section">
		<div class="about-company">
			<div class="about-company__container container is-large">
				<div class="about-company__inner">
					<div class="about-company__main">
						<?php get_template_part('templates/component/page-images');?>
					</div>
					<div class="about-company__aside">
						<a class="about-company__link" href="#">< <?=get_queried_object()->post_title;?></a>
						<?=get_field( 'text', get_the_ID() );?>
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php get_template_part('templates/content/flexible-content');?>
</div>
<!-- end body-->

<?php get_footer(); ?>