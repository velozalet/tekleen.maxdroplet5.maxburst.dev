<?php
/*
	if( have_rows('section_selection') ):
		printf( "Total Templates = %d", count(get_field('section_selection')) ); echo '<br><br>';
		while( have_rows('section_selection') ): the_row();
			echo get_row_layout(), '<br>'; //$layout = get_row_layout(); //Get the row layout.
		endwhile;
	endif;
*/

if( have_rows('section_selection') ):
	while( have_rows('section_selection') ): the_row();
		if( get_row_layout() == 'for_engineers_section' ){ get_template_part( 'templates/content/flexible-content/for_engineers' ); }
		if( get_row_layout() == 'how_can_help_section' ){ get_template_part( 'templates/content/flexible-content/how_can_help' ); }
		if( get_row_layout() == 'subscribe_section' ){ get_template_part( 'templates/content/flexible-content/subscribe' ); }
		if( get_row_layout() == 'buckets_green' ){ get_template_part( 'templates/content/flexible-content/buckets_green' ); }
		if( get_row_layout() == 'company_section' ){ get_template_part( 'templates/content/flexible-content/company' ); }
		if( get_row_layout() == 'trade_shows_section' ){ get_template_part( 'templates/content/flexible-content/trade_shows' ); }
		if( get_row_layout() == 'upcoming_trade_shows_and_expos' ){ get_template_part( 'templates/content/flexible-content/upcoming_trade_shows' ); }
		if( get_row_layout() == 'case_studies' ){ get_template_part( 'templates/content/flexible-content/case_studies' ); }
	endwhile;
endif;
?>