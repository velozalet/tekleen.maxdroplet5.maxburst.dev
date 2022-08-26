<?php
/**
 * INDEX
 *
 * @package maxcanvas
 */

get_header(); ?>

<main id="main" class="site-main" role="main">
	<div class="container">
		<?php if ( have_posts() ) : ?>
			<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>
					<?php get_template_part( 'templates/content/post' ); ?>
				<?php endwhile; ?>

				<?php get_template_part( 'templates/component/pagination' ); ?>

		<?php else : ?>
			<?php get_template_part( 'templates/content/none' ); ?>
		<?php endif; ?>
	</div>
</main><!-- #main -->

<?php get_footer(); ?>
