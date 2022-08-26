<?php if( get_field('image', get_the_ID()) || get_field('description', get_the_ID()) ):?>
<div class="about-table__tab __filter_spareparts_tab" data-view="spare_parts">
	<div class="grid--content">
		<figure>
			<img src="<?=get_field('image', get_the_ID())['url'];?>" alt="" style="margin:0 auto; display:block;">
		</figure>
		<div>
			<?=get_field('description', get_the_ID());?>
		</div>
	</div>
</div>
<?php endif;?>
