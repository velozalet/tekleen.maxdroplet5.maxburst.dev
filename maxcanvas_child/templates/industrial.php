<?php
/**
 * Template Name: Industrial
 *
 * @package maxcanvas
 */
?>
<?php get_header();?>
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

    <!-- section-->
	<?php $posts_industrial = get_needs_post('industrial', -1, 0, '', 'date', 'ASC');?>
    <section class="section">
        <div class="advants">
            <div class="advants__container container">
                <div class="advants__grid">
					<?php foreach( $posts_industrial as $post ): setup_postdata($post);?>
                    <div class="advants__col">
                        <div class="advants__card">
                            <div class="advants__icon">
								<?php if( has_post_thumbnail() ):?>
									<img src="<?=get_the_post_thumbnail_url();?>" alt="<?=get_bloginfo('name');?>">
								<?php else:?>
									<img src="<?=home_url();?>/wp-content/uploads/2022/08/1.jpg" alt="<?=get_bloginfo('name');?>">
								<?php endif;?>
                            </div>
                            <div class="advants__title"><?=get_the_title();?></div>
                            <div class="advants__text"><?=cut_string( get_the_excerpt(),135 );?></div>
	                        <a class="advants__more" href="<?=get_permalink();?>">Read more </a>
                        </div>
                    </div>
					<?php endforeach;?>
					<?php wp_reset_postdata();?>
                </div>
            </div>
        </div>
    </section>
    <!-- end section-->

	<?php get_template_part('templates/content/flexible-content');?>
</div>
<!-- end body-->

<?php get_footer();?>