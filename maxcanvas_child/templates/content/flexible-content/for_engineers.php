<section class="section" style="background: #222222;">
	<!-- help-->
	<div class="help">
		<div class="help__container container">
			<?=get_sub_field('description');?>
			<?php
			$link = get_sub_field('optional_button_link');
			if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
			?>
				<a class="btn btn-outline-white help__btn" href="<?=esc_url($link['url']);?>" target="<?=esc_attr( $link_target );?>"><?=esc_html($link['title']); ?></a>
			<?php endif; ?>
		</div>
	</div>
	<!-- end help-->
</section>