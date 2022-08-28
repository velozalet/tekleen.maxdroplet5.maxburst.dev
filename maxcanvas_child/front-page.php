<?php
/**
 * HOMEPAGE
 *
 * @package maxcanvas
 */

get_header(); ?>

  <div class="page__body">
      <!-- promo-->
      <div class="promo">
          <div class="promo__container container is-large">
              <div class="promo__inner" >
				  <?php get_template_part('templates/component/page-subheader');?>
              </div>
          </div>
      </div>
      <!-- end promo-->

	  <?php get_template_part('templates/content/flexible-content');?>

  </div>
  <!-- end body-->

<?php get_footer(); ?>
