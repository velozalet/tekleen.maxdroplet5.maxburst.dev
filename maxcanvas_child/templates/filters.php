<?php
/**
 * Template Name: Filters
 *
 * @package maxcanvas
 */

get_header();?>
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

    <main class="main">
        <div class="main__container container">
            <div class="main__inner">
                <div class="main__main">
					<?php
					$args = array(
						'post_type' => 'filters',
						'tax_query' => array(
							array(
								'taxonomy' => 'filters-taxonomy',
								'field' => 'ID', //can be set to ID
								'terms' => 8 //if field is ID you can reference by cat/term number
							)
						)
					);
					$posts_filters = get_posts( $args );
					?>
                    <div class="main__title">Filters</div>
                    <div class="main__grid">
						<?php foreach( $posts_filters as $post ): setup_postdata($post);?>
                        <div class="main__col col-5">
                            <div class="filter-card">
                                <div class="filter-card__photo">
									<?php if( has_post_thumbnail() ):?>
		                                <img src="<?=get_the_post_thumbnail_url();?>" alt="<?=get_bloginfo('name');?>">
									<?php else:?>
		                                <img src="http://tekleen.maxdroplet5.maxburst.dev/wp-content/uploads/2022/08/1.jpg" alt="<?=get_bloginfo('name');?>">
									<?php endif;?>
                                </div>
                                <div class="filter-card__data">
                                    <div class="filter-card__title"><?=get_the_title();?></div>
                                    <div class="filter-card__text"><?=cut_string( get_the_excerpt(),185 );?></div>
                                </div>
                                <div class="filter-card__footer"> <a class="filter-card__more" href="<?=get_permalink();?>"> details</a>
                                </div>
                            </div>
                        </div>
						<?php endforeach;?>
						<?php wp_reset_postdata();?>
                    </div>
                </div>

                <div class="main__aside">
					<?php
					$args = array(
						'post_type' => 'filters',
						'tax_query' => array(
							array(
								'taxonomy' => 'filters-taxonomy',
								'field' => 'ID', //can be set to ID
								'terms' => 9 //if field is ID you can reference by cat/term number
							)
						)
					);
					$posts_accessories = get_posts( $args );
					?>
                    <div class="main__title">Accessories</div>
                    <div class="advants main__advants-widget">
                        <div class="advants__grid">
							<?php foreach( $posts_accessories as $post ): setup_postdata($post);?>
                            <div class="advants__col col-100">
                                <div class="advants__card">
                                    <div class="advants__icon">
										<?php if( has_post_thumbnail() ):?>
		                                    <img src="<?=get_the_post_thumbnail_url();?>" alt="<?=get_bloginfo('name');?>">
										<?php else:?>
		                                    <img src="http://tekleen.maxdroplet5.maxburst.dev/wp-content/uploads/2022/08/1.jpg" alt="<?=get_bloginfo('name');?>">
										<?php endif;?>
                                    </div>
                                    <div class="advants__title"><?=get_the_title();?></div>
                                    <div class="advants__text"><?=cut_string( get_the_excerpt(),185 );?></div>
	                                <a class="advants__more" href="<?=get_permalink();?>">Details</a>
                                </div>
                            </div>
							<?php endforeach;?>
							<?php wp_reset_postdata();?>
                        </div>
                    </div>

                    <div class="contact-widget main__contact-widget">
						<?=get_field( 'contact_us_block_description', get_the_ID() );?>
						<?php
						$link = get_field( 'contact_us_link', get_the_ID() );
						if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
							?>
		                    <a class="btn btn-black contact-widget__more" href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
						<?php endif; ?>
                    </div>

                </div>

            </div>
        </div>
    </main>

    <!-- section-->
    <section class="section" >
        <div class="choose">
            <div class="choose__container container">
                <div class="choose__header">
                    <div class="choose__title"><?=get_field('title_section');?></div>
					<!--<div class="choose__caption">How do competing filter types stack up to automatic, self-cleaning water filters?</div>-->
                </div>
                <div class="choose__body">
					<?php
					$filter_types_table = get_field('filter_types_block_table'); //dd($filter_types_table);
					if ( ! empty ( $filter_types_table ) ) {
						echo '<table class="choose__table">';
						if ( ! empty( $filter_types_table['caption'] ) ) {
							echo '<caption>' . $filter_types_table['caption'] . '</caption>';
						}
						if ( ! empty( $filter_types_table['header'] ) ) {
							echo '<thead>';
							echo '<tr>';
							foreach ( $filter_types_table['header'] as $th ) {
								echo '<th>';
								echo $th['c'];
								echo '</th>';
							}
							echo '</tr>';
							echo '</thead>';
						}
						echo '<tbody>';
						foreach ( $filter_types_table['body'] as $tr ) {
							echo '<tr>';
							foreach ( $tr as $td ) {
								echo '<td>';
								echo $td['c'];
								echo '</td>';
							}
							echo '</tr>';
						}
						echo '</tbody>';
						echo '</table>';
					}
					?>
                </div>
            </div>
        </div>
    </section>
    <!-- end section-->

	<?php get_template_part('templates/content/flexible-content');?>

</div>
<!-- end body-->

<?php get_footer(); ?>
