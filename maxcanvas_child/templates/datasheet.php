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
                <div class="promo__main">
                    <h2 class="promo__title">Request a Quote</h2>
                    <div class="promo__caption">
                        <p>With over 40 years of experience dealing with all sorts of water filtration needs, Tekleen Engineers can help you find the perfect setup for your project.</p>
                        <p>This form is for quote requests only. Please send all other correspondence to: <a href="mailto:info@tekleen.com">info@tekleen.com</a>
                        </p>
                    </div>
                    <img class="promo__img" src="<?php echo get_stylesheet_directory_uri(); ?>/img/general/promo/6.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- end promo-->
    <!-- section-->
    <main class="main">
        <div class="main__container container is-large">
            <div class="main__inner">
                <div class="main__main">
                    <form class="about-form main__form" action="#">
                        <!-- row-->
                        <div class="about-form__row">
                            <h4 class="about-form__title">About You</h4>
                            <div class="about-form__text">
                                <p>The privacy and protection of your personal information are vitally important to us. Automatic Filters Inc. does not make personal information available to any third parties without your permission. For more information,
                                    please review our <a href="#">Privacy Policy.</a>
                                </p>
                            </div>
                            <div class="about-form__fields">
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Full name" required>
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="email" placeholder="Email" required>
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="tel" placeholder="Phone number" required>
                                </div>
                            </div>
                        </div>
                        <!-- end row-->
                        <!-- row-->
                        <div class="about-form__row">
                            <h4 class="about-form__title">Your Filtration Needs</h4>
                            <div class="about-form__text">
                                <p>The more details you provide, the better we’ll be able to custom tailor a filtration solution to your needs.</p>
                            </div>
                            <div class="about-form__fields">
                                <div class="about-form__field">
                                    <div class="about-form__radio">
                                        <input type="radio" name="1" checked id="1">
                                        <label for="1">Industrial</label>
                                    </div>
                                    <div class="about-form__radio">
                                        <input type="radio" name="1" id="2">
                                        <label for="2">Irrigation</label>
                                    </div>
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Industry">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Application">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Pressure">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="GPM">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Line Size">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Water Source">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Why Filtration?">
                                </div>
                            </div>
                        </div>
                        <!-- end row-->
                        <!-- row-->
                        <div class="about-form__row">
                            <h4 class="about-form__title">About Your Company</h4>
                            <div class="about-form__fields">
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Company">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Address">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="City">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="State / Province">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Postal Code">
                                </div>
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Country">
                                </div>
                            </div>
                        </div>
                        <!-- end row-->
                        <!-- row-->
                        <div class="about-form__row">
                            <h4 class="about-form__title">Additional Details</h4>
                            <div class="about-form__fields">
                                <div class="about-form__field">
                                    <input class="about-form__input" type="text" placeholder="Referral">
                                </div>
                                <div class="about-form__field">
                                    <textarea class="about-form__textarea" name="" placeholder="Comments"></textarea>
                                </div>
                            </div>
                        </div>
                        <!-- end row-->
                        <!-- row-->
                        <div class="about-form__row">
                            <div class="about-form__fields">
                                <div class="about-form__field">
                                    <button class="btn btn-black about-form__btn" href="#">submit request</button>
                                </div>
                            </div>
                        </div>
                        <!-- end row-->
                    </form>
                </div>
                <div class="main__aside">
                    <div class="main__title">Contact Us Directly</div>
                    <div class="contacts-widget main__widget">
                        <div class="contacts-widget__row">
                            <div class="contacts-widget__title">Email</div>
                            <div class="contacts-widget__list"> <a class="contacts-widget__link" href="mailto:info@tekleen.com">info@tekleen.com</a>
                            </div>
                        </div>
                        <div class="contacts-widget__row">
                            <div class="contacts-widget__title">Call</div>
                            <div class="contacts-widget__list"> <a class="contacts-widget__link" href="tel:8003361942">(800) 336-1942</a><a class="contacts-widget__link" href="tel:3108392828">(310) 839-2828</a>
                            </div>
                        </div>
                        <div class="contacts-widget__row">
                            <div class="contacts-widget__title">Fax</div>
                            <div class="contacts-widget__list"> <a class="contacts-widget__link" href="#">(310) 839-6878</a>
                            </div>
                        </div>
                        <div class="contacts-widget__row">
                            <div class="contacts-widget__title">Address</div>
                            <div class="contacts-widget__list">
                                <a class="contacts-widget__link" href="#">Automatic Filters, Inc.<br>2672 S. La Cienega Blvd.<br>Los Angeles, CA 90034</a>
                            </div>
                        </div>
                        <div class="contacts-widget__row">
                            <div class="contacts-widget__title">Prefer mail or fax?</div>
                            <div class="contacts-widget__text">
                                <p>Please download and use one of these PDF datasheets:</p>
                            </div>
                            <div class="contacts-widget__list"> <a class="contacts-widget__link is-download" href="#">Industrial Application Datasheet</a><a class="contacts-widget__link is-download" href="#">Irrigation Application Datasheet</a>
                            </div>
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
