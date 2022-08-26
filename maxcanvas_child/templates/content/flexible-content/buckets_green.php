<section class="section">
	<div class="advants">
		<div class="advants__container container">
			<div class="advants__grid">
			<?php if( get_sub_field('bucket_item') ):?>
				<?php foreach( get_sub_field('bucket_item') as $bucket_item ):?>
				<div class="advants__col">
					<div class="advants__card">
						<div class="advants__icon">
							<img src="<?=$bucket_item['icon'];?>" alt="<?=get_bloginfo('name');?>">
						</div>
						<?=$bucket_item['description'];?>
					</div>
				</div>
				<?php endforeach;?>
			<?php endif;?>
			</div>
		</div>
	</div>
</section>