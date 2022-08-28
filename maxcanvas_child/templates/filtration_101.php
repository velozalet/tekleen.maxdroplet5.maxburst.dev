<?php
/**
 * Template Name: Filtration 101
 *
 * @package maxcanvas
 */
?>
<?php get_header();?>

<!-- body-->
<div class="page__body filtration_101_page">
	<section class="section">
		<div class="filtration_101">
			<div class="about-company__container container is-large">
				<div class="about-company__inner">
					<div class="about-company__main">
						<?=get_queried_object()->post_content;?>
					</div>
					<div class="about-company__aside">
					<?php if(get_field('video_horizontal_configuration', get_the_ID())):?>
						<div class="filter-video">
							<span>Horizontal Configuration</span>
							<iframe width="100%" height="320" src="<?=str_replace("watch?v=","embed/",get_field('video_horizontal_configuration', get_the_ID()));?>" frameborder="0" allowfullscreen></iframe>
						</div>
					<?php endif;?>
					<?php if(get_field('video_vertical_configuration', get_the_ID())):?>
						<div class="filter-video">
							<span>Vertical Configuration</span>
							<iframe width="100%" height="320" src="<?=str_replace("watch?v=","embed/",get_field('video_vertical_configuration', get_the_ID()));?>" frameborder="0" allowfullscreen></iframe>
						</div>
					<?php endif;?>
						<div class="filter-description">
							<?=get_field('description', get_the_ID());?>
						</div>
						<hr class="wp-block-separator has-alpha-channel-opacity">

						<h2>Filtration Guides</h2>
						<?php //dd( get_field('tabular_data', get_the_ID()) );
						$filtration_101_tabular_data = get_field('tabular_data', get_the_ID()); ?>
						<table class="about-table__table filtration-page--documentation">
							<thead>
							<tr style="background-color:#A2B900;">
								<th>File</th>
								<th>Document Title</th>
								<th>Document Type</th>
							</tr>
							</thead>
							<tbody>
							<?php foreach( $filtration_101_tabular_data as $arr):?>
								<tr>
									<?php foreach($arr as $info=>$value):?>
										<?php if( is_array($value) ):?>
											<td>
												<a class="doc-file-link" href="<?=$value["url"];?>" target="_blank"><?=$value["title"];?></a>
											</td>
										<?php else:?>
											<td><?=$value;?></td>
										<?php endif;?>
									<?php endforeach;?>
								</tr>
							<?php endforeach;?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php get_template_part('templates/content/flexible-content');?>
</div>
<!-- end body-->


<?php get_footer();?>
