<?php get_header();?>

<!-- body-->
<div class="page__body">
	<section class="section">
		<div class="about-company">
			<div class="about-company__container container is-large">
				<div class="about-company__inner">
					<?php
					$page_images = get_field( 'post_image', get_the_ID() );
					$img_collection1 = null;
					$img_collection2 = null;
					?>
					<?php if($page_images):?>
					<div class="about-company__main">
						<?php
						for( $i=0; $i < count($page_images); $i++ ){ //2
							if( $page_images_counts == 1 ){ $img_collection1[$i] = $page_images[$i]['image']; break; }
							if($i%2 == 0){ $img_collection1[$i] = $page_images[$i]['image']; }else{ $img_collection2[$i] = $page_images[$i]['image']; }
						} ?>
						<div class="gallery">
							<div class="gallery__grid">
								<?php if($img_collection1):?>
									<div class="gallery__col col-50">
										<?php foreach( $img_collection1 as $img_url ):?>
											<img class="gallery__img" src="<?=$img_url;?>" alt="<?=get_bloginfo('name');?>">
										<?php endforeach;?>
									</div>
								<?php endif;?>

								<?php if($img_collection2):?>
									<div class="gallery__col col-50">
										<?php foreach( $img_collection2 as $img_url ):?>
											<img class="gallery__img" src="<?=$img_url;?>" alt="<?=get_bloginfo('name');?>">
										<?php endforeach;?>
									</div>
								<?php endif;?>
							</div>
						</div>
					</div>
					<?php endif;?>
					<div class="about-company__aside" style="<?=($page_images) ? '' : 'width:100%';?>">
						<a class="about-company__link" href="#"> < filters & Accessories</a>
						<h2 class="about-company__title"><?=get_the_title();?></h2>
						<div class="about-company__text"><?=get_the_content();?></div>

						<div class="about-company__section">
							<h2 class="about-company__section-title">Standard Features</h2>
							<div class="props about-company__props">
								<div class="props__grid">
									<div class="props__col">
										<div class="props__item">
											<div class="props__text"><strong>Line Sizes:</strong> <?=get_field( 'line_sizes', get_the_ID() );?> </div>
										</div>
										<div class="props__item">
											<div class="props__text"><strong>Flow Rate:</strong> <?=get_field( 'flow_rate', get_the_ID() );?> </div>
										</div>
										<div class="props__item">
											<div class="props__text"><strong>Screen Opening:</strong> <?=get_field( 'screen_opening', get_the_ID() );?> </div>
										</div>
										<div class="props__item">
											<div class="props__text"><strong>Material:</strong> <?=get_field( 'material', get_the_ID() );?> </div>
										</div>
										<div class="props__item">
											<div class="props__text"><strong>Pressure:</strong> <?=get_field( 'pressure', get_the_ID() );?> </div>
										</div>
										<div class="props__item">
											<div class="props__text"><strong>Temperature to:</strong> <?=get_field( 'temperature_to', get_the_ID() );?> </div>
										</div>
									</div>
									<div class="props__col">
										<div class="props__item">
											<div class="props__text"><strong>Flush Valve Size: </strong> <?=get_field( 'flush_valve_size', get_the_ID() );?> </div>
										</div>
										<div class="props__item">
											<div class="props__text"><strong>Flush Flow Rate: </strong> <?=get_field( 'flush_flow_rate', get_the_ID() );?> </div>
										</div>
										<div class="props__item">
											<div class="props__text"><strong>Flush Duration: </strong> <?=get_field( 'flush_duration', get_the_ID() );?> </div>
										</div>
										<div class="props__item">
											<div class="props__text"><strong>Flushing Volume: </strong> <?=get_field( 'flushing_volume', get_the_ID() );?> </div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="about-company__section">
							<?=get_field( 'contact_us_block_description', 14 );?>
							<?php
							$link = get_field( 'contact_us_link', 14 );
							if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
								?>
								<a class="btn btn-black contact-widget__more" href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
							<?php endif; ?>
						</div>

					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- end section-->


	<!-- section-->
	<section class="section">
		<div class="about-table">
			<div class="about-table__container container is-large">
				<div class="about-table__header">
					<ul class="about-table__list filters-tabs-list">
						<li class="about-table__item is-active" data-view="filter_models">Filter models</li>
						<li class="about-table__item" data-view="documentation">Documentation</li>
						<li class="about-table__item" data-view="spare_parts">Spare Parts</li>
						<li class="about-table__item" data-view="troubleshooting" style="display:none">Troubleshooting</li>
					</ul>
				</div>
				<div class="about-table__body filters-view-list">
					<div class="about-table__tabs">

						<div id="sorting__select_metric_filter_models" class="sorting__select">
							<select class="js-select" data-placeholder="metric">
								<option value="metric">metric</option>
								<option value="imperial">imperial</option>
							</select>
						</div>

						<!--__filter_models_tab-->
						<?php get_template_part('templates/component/single_filters_filter_models_tabcontent');?>
						<!--/__filter_models_tab-->

						<!--__filter_documentation_tab-->
						<?php get_template_part('templates/component/single_filters_documentation_tabcontent');?>
						<!--/__filter_documentation_tab-->

						<!--__filter_spareparts_tab-->
						<?php get_template_part('templates/component/single_filters_spareparts_tabcontent');?>
						<!--/__filter_spareparts_tab-->
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- end section-->


	<?php get_template_part('templates/content/flexible-content');?>
</div>
<!-- end body-->

<?php get_footer();?>
