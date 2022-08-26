<?php
/**
 * Template Name: Datasheet
 *
 * @package maxcanvas
 */

get_header(); ?>

<!-- body-->
<div class="page__body">
    <!-- promo-->
    <div class="promo">
        <div class="promo__container container is-large">
            <div class="promo__inner is-small">
				<?php get_template_part('templates/component/page-subheader');?>
            </div>
        </div>
    </div>
    <!-- end promo-->
    <!-- section-->
    <main class="main">
        <div class="main__container container is-large">
            <div class="main__inner">
                <div class="main__main">
	                <?=get_field('code_form_jotform', get_the_ID());?> <!--Form of jotform ID = 222372444345049(for searching and editing)-->
                </div>

                <div class="main__aside">
                    <div class="main__title"><?=get_field('sub_header_page', get_the_ID());?></div>
                    <div class="contacts-widget main__widget">
                        <div class="contacts-widget__row">
                            <div class="contacts-widget__title">Email</div>
                           <div class="contacts-widget__list">
	                           <a class="contacts-widget__link" href="mailto:<?=get_field('contact_email', 'options');?>"><?=get_field('contact_email', 'options');?></a>
                            </div>
                        </div>
                        <div class="contacts-widget__row">
                            <div class="contacts-widget__title">Call</div>
                            <div class="contacts-widget__list">
	                            <a class="contacts-widget__link" href="tel:<?=get_numerics( get_field('contact_phone_number1', 'options') );?>" style="margin-bottom:0;"><?=get_field('contact_phone_number1', 'options');?></a>
	                            <a class="contacts-widget__link" href="tel:<?=get_numerics( get_field('contact_phone_number2', 'options') );?>" style="margin-bottom:0;"><?=get_field('contact_phone_number2', 'options');?></a>
                            </div>
                        </div>
                        <div class="contacts-widget__row">
                            <div class="contacts-widget__title">Fax</div>
                            <div class="contacts-widget__list"> <a class="contacts-widget__link" href="#"><?=get_field('contact_fax', 'options');?></a>
                            </div>
                        </div>
                        <div class="contacts-widget__row">
                            <div class="contacts-widget__title">Address</div>
                            <div class="contacts-widget__list">
                                <a class="contacts-widget__link" href="https://goo.gl/maps/ZL6TuntG2rT6aZjT7" target="_blank">
									<?=get_field('contact_information', 'options');?>
                                </a>
                            </div>
                        </div>

						<?=get_field('description', get_the_ID());?>


                        <div class="contacts-widget__row">
	                       <?php $files_for_downloads = get_field('files_for_download', get_the_ID());?>
	                        <?php foreach( $files_for_downloads as $file_for_download ):?>
		                        <a class="contacts-widget__link is-download" href="<?=$file_for_download['file_download']['url'];?>" target="_blank"><?=$file_for_download['file_download']['title'];?></a> <br>
	                        <?php endforeach;?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- end section-->
    <!-- section-->
    <section class="section" style="background: #222222;">
        <!-- help-->
        <div class="help">
            <div class="help__container container">
                <h2 class="help__title">How can we help?</h2>
                <div class="help__caption">Why do all the research on your own? We have trained specialists with decades of experience who can help you design the perfect filtration system to meet your needs. Fill out a simple form and we’ll get right back to you.</div>
                <a
                class="btn btn-outline-white help__btn" href="#">Request a quote</a>
            </div>
        </div>
        <!-- end help-->
    </section>
    <!-- end section-->
    <div class="subs">
        <div class="subs__container container">
            <div class="subs__inner">
                <div class="subs__title">Get the latest from TEKLEEN</div>
                <form class="subs__form" action="#">
                    <div class="subs__field">
                        <input class="subs__input" type="email" required placeholder="Email me updates and special offers">
                        <button class="subs__send">subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- end body-->

<?php get_footer(); ?>
