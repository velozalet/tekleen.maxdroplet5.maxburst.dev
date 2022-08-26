<section class="section" style="background: #F7F7F7;">
	<!-- good-->
	<div class="good">
		<div class="good__container container">
			<div class="good__header">
				<?=get_sub_field('description');?>
			</div>
			<div class="good__body">
				<div class="good__grid">
				<?php if( get_sub_field('companies_post') ):?>
					<?php foreach( get_sub_field('companies_post') as $post_company ):?>
						<div class="good__col">
							<div class="good__card" style="background-image:url(<?=wp_get_attachment_url( get_post_thumbnail_id($post_company->ID), 'thumbnail' );?>);background-size:cover;  min-height:135px;"></div>
						</div>
					<?php endforeach;?>
				<?php endif;?>
				</div>
			</div>
			<?php
			$link = get_sub_field('optional_button_link');
			if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
				?>
				<div class="good__footer">
					<a class="btn btn-outline good__btn" href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']); ?></a>
				</div>
			<?php endif; ?>
		</div>
	</div>
	<!-- end good-->
</section>