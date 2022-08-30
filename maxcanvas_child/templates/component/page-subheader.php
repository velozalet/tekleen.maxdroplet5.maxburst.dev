<?php
/**
 * Internal Page Subheader
 *
 * @package maxcanvas
 */
?>
<div class="promo__main wow--animate wow fadeInUp" style="visibility:hidden">
	<?=get_field('subheader_descriptions');?>
	<?php
	$link = get_field('optional_button_link');
	if($link):
		$link_target = ($link['target']) ? $link['target'] : '_self';
		?>
		<a class="btn btn-black promo__btn" href="<?=esc_url($link['url']); ?>" target="<?=esc_attr( $link_target ); ?>"><?=esc_html($link['title']);?></a>
	<?php endif; ?>
</div>
<img class="promo__img wow--animate wow fadeInRight" src="<?=get_field('subheader_image');?>" alt="<?=get_bloginfo('name');?>" style="visibility: hidden">
