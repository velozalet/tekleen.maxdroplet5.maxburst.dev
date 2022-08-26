<!--This data is pulled from the Home Page-->
<section class="section" style="background: #222222;">
	<div class="help">
		<div class="help__container container">
			<?php
			$section_selection_home = get_field('section_selection',7);
			$how_can_help_section__home = [];
			foreach( $section_selection_home as $section ){
				if( $section['acf_fc_layout'] == 'how_can_help_section' ){ $how_can_help_section__home = $section; }
			}
			?>
			<?=$how_can_help_section__home['description'];?>
			<?php
			$link = $how_can_help_section__home['optional_button_link'];
			if($link): $link_target = ($link['target']) ? $link['target'] : '_self';
				?>
				<a class="btn btn-outline-white help__btn" href="<?=esc_url($link['url']);?>" target="<?=esc_attr( $link_target );?>"><?=esc_html($link['title']); ?></a>
			<?php endif; ?>
		</div>
	</div>
</section>
<!--/This data is pulled from the Home Page-->