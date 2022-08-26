<?php
$page_images = get_field( 'image_item', get_the_ID() );
$img_collection1 = null;
$img_collection2 = null;
?>
<?php if($page_images):?>
	<?php
	for( $i=0; $i < count($page_images); $i++ ){ //2
		if( $page_images_counts == 1 ){ $img_collection1[$i] = $page_images[$i]['image']; break; }
		if($i%2 == 0){ $img_collection1[$i] = $page_images[$i]['image']; }else{ $img_collection2[$i] = $page_images[$i]['image']; }
	}
	?>
	<div class="gallery">
		<div class="gallery__grid">
			<?php if($img_collection1):?>
			<div class="gallery__col">
				<?php foreach( $img_collection1 as $img_url ):?>
					<img class="gallery__img" src="<?=$img_url;?>" alt="<?=get_bloginfo('name');?>">
				<?php endforeach;?>
			</div>
			<?php endif;?>

			<?php if($img_collection2):?>
			<div class="gallery__col">
				<?php foreach( $img_collection2 as $img_url ):?>
					<img class="gallery__img" src="<?=$img_url;?>" alt="<?=get_bloginfo('name');?>">
				<?php endforeach;?>
			</div>
			<?php endif;?>
		</div>
	</div>
<?php endif;?>