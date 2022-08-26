<?php
/**
 * Template Name: Resource Center 2
 *
 * @package maxcanvas
 */
?>
<?php get_header();?>

<!-- body-->
<div class="page__body">
    <!-- promo-->
    <div class="promo">
        <div class="promo__container container is-large">
            <div class="promo__inner">
				<?php get_template_part('templates/component/page-subheader');?>
            </div>
        </div>
    </div>
    <!-- end promo-->
    <main class="main">
        <div id="case_studies_archive" class="main__container container">
            <div class="main__main">

                <div class="filter main__filter">
                    <form class="filter__form" action="#">
                        <div class="filter__field">
                            <img class="filter__icon" src="<?php echo get_stylesheet_directory_uri(); ?>/img/general/icons/search.svg" alt="">
                            <input id="filter__input_caseStudies" class="filter__input" type="text" placeholder="Search">
                        </div>
                    </form>
                    <ul class="filter__list is-accent">
	                    <?php $cats = get_categories_of_cpt('cases-taxonomy','name','ASC'); $cat_caseStudies_ids = [];?>
	                    <li class="filter__item filter__item--default-tab display-none" data-id="all" data-slug="all"> <span class="filter__link">All</span></li>
						<?php foreach( $cats as $cat ): setup_postdata($post);?>
							<li class="filter__item" data-id="<?=$cat->term_id;?>" data-slug="<?=$cat->slug;?>">
								<span class="filter__link"><?=$cat->name;?></span>
							</li> <!--<li class="filter__item is-active"><a class="filter__link" href="#">Case Stud. Cat-1</a></li>-->
						<?php array_push($cat_caseStudies_ids,$cat->term_id);?>
						<?php endforeach;?>
						<?php wp_reset_postdata();?>
                    </ul>
                </div>

				<?php $posts_case_studios = get_needs_post('cases', -1, 0, '', 'date', 'ASC');?> <!--Get All posts of "Case Studies" CPT-->
				<?php $all_id_posts = [];?>
	            <div id="container_archive_caseStudies" class="main__grid _posts_case_studies">
	            <?php foreach( $cat_caseStudies_ids as $cat_id ):
					$args = array('post_type'=>'cases', 'tax_query'=>array( array( 'taxonomy'=>'cases-taxonomy','field'=>'ID','terms'=>$cat_id) ));
					//dd(get_posts($args));
	            ?>

					<?php foreach( get_posts($args) as $post ):?>
						<div class="main__col col-5 _posts_case_studies" data-category="<?=$cat_id;?>" data-post_id="<?=$post->ID;?>">
	                        <div class="filter-card">
	                            <div class="filter-card__photo">
	                                <?php if( has_post_thumbnail() ):?>
	                                    <img src="<?=get_the_post_thumbnail_url();?>" alt="<?=get_bloginfo('name');?>">
	                                <?php else:?>
	                                    <img src="<?=get_stylesheet_directory_uri();?>/img/general/filter/1.jpg" alt="<?=get_bloginfo('name');?>">
	                                <?php endif;?>
	                            </div>
	                            <div class="filter-card__data">
	                                <div class="filter-card__title"><?=get_the_title();?></div>
	                                <div class="filter-card__text"><?=cut_string( get_the_excerpt(),350 );?></div>
	                                <div class="summary" style="display:none!important;"><?=$post->post_content;?></div> <!--for searching post content-->
	                            </div>
	                            <div class="filter-card__footer"> <a class="filter-card__more" href="<?=get_permalink();?>"> details</a> </div>
	                        </div>
	                    </div>
					<?php endforeach;?>
				<?php endforeach; ?>
	            </div>
            </div> <!--/.main__main-->
        </div>
    </main>
    <section class="section"></section>

	<?php get_template_part('templates/content/flexible-content');?>

</div>
<!-- end body-->

<?php get_footer(); ?>