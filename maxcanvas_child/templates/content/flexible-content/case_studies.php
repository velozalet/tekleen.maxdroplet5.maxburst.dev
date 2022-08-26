<?php
//dd( get_sub_field('case_studies_post') );
?>
<?php if( get_sub_field('case_studies_post') ):?>
<section class="section">
	<div class="cases">
		<div class="cases__container container">
			<h2 class="cases__title"><?=get_sub_field('title_section');?></h2>

			<div class="cases__grid">
				<?php foreach( get_sub_field('case_studies_post') as $case_study ):?>
				<div class="cases__col">
					<div class="cases-card">
						<a class="cases-card__photo" href="#">
							<img src="<?=wp_get_attachment_url( get_post_thumbnail_id($case_study->ID), 'thumbnail' );?>" alt="<?=get_bloginfo('name');?>">
						</a>
						<div class="cases-card__body">
							<a class="cases-card__title" href="#"><?=$case_study->post_title;?></a>
							<div class="cases-card__text">

								<?php if($case_study->post_excerpt):?>
									<p><?=$case_study->post_excerpt;?></p>
								<?php else:?>
									<p><?=cut_string( $case_study->post_content,185 );?></p>
								<?php endif;?>
							</div>

							<?php if( get_field('upload_file',$case_study->ID) ):?>
								<a class="btn btn-outline cases-card__more" href="<?=get_field('upload_file',$case_study->ID)['url']?>" target="_blank">Download</a>
							<?php endif;?>

						</div>
					</div>
				</div>
				<?php endforeach;?>
			</div>
		</div>
	</div>
</section>
<?php else:?>
	<section class="section">
		<div class="cases">
			<div class="cases__container container">
				<?php if( get_sub_field('title_section') ):?>
					<h2 class="cases__title"><?=get_sub_field('title_section');?></h2>
				<?php else:?>
					<h2 class="cases__title">Case Studies</h2>
				<?php endif;?>
				<div class="cases__grid">
					<?php $posts_cases_studies = get_needs_post('cases', 2, 0, '', 'date', 'DESK'); ?>
					<?php foreach( $posts_cases_studies as $case_study):?>
						<div class="cases__col">
							<div class="cases-card">
								<a class="cases-card__photo" href="#">
									<img src="<?=wp_get_attachment_url( get_post_thumbnail_id($case_study->ID), 'thumbnail' );?>" alt="<?=get_bloginfo('name');?>">
								</a>
								<div class="cases-card__body">
									<a class="cases-card__title" href="#"><?=$case_study->post_title;?></a>
									<div class="cases-card__text">

										<?php if($case_study->post_excerpt):?>
											<p><?=$case_study->post_excerpt;?></p>
										<?php else:?>
											<p><?=cut_string( $case_study->post_content,185 );?></p>
										<?php endif;?>
									</div>

									<?php if( get_field('upload_file',$case_study->ID) ):?>
										<a class="btn btn-outline cases-card__more" href="<?=get_field('upload_file',$case_study->ID)['url']?>" target="_blank">Download</a>
									<?php endif;?>


								</div>
							</div>
						</div>
					<?php endforeach;?>
				</div>
			</div>
		</div>
	</section>
<?php endif;?>