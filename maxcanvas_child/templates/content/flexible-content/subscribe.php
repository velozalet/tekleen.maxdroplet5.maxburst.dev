
<div class="subs">
	<div class="subs__container container">
		<?php
		$section_selection_home = get_field('section_selection',7);
		$subscribe_section__home = [];
		foreach( $section_selection_home as $section ){
			if( $section['acf_fc_layout'] == 'subscribe_section' ){ $subscribe_section__home = $section; }
		}
		?>
		<div class="subs__inner">
			<div class="subs__title"><?=$subscribe_section__home['title'];?></div>
			<form class="subs__form" action="#">
				<div class="subs__field">
					<input class="subs__input" type="email" required placeholder="Email me updates and special offers">
					<button class="subs__send">subscribe</button>
				</div>
			</form>
		</div>
	</div>
</div>