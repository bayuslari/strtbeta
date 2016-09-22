// Custom JS write on JSON

var slariScript = {
    init: function() {
        slariScript.navbarChange();
        slariScript.masonryPortfolio();
        slariScript.skillBar();
        slariScript.parallaxEffect();
        slariScript.mapsInit();
        slariScript.owlInit();
        slariScript.aosInit();
        slariScript.countTo();
        slariScript.typingEffect();
        slariScript.backgroundChangerHtml();
        slariScript.backgroundChangerJS();
        slariScript.backgroundChangerInit();
        slariScript.scrollTop();
        slariScript.jqueryValidation();
        slariScript.preloader();
        slariScript.popUp();
        slariScript.backTop();
        slariScript.subscribeForm();
    },
    navbarChange: function() {
        jQuery(window).scroll(function() {
            var scroll = jQuery(window).scrollTop();
            if (scroll > 50) {
                //clearHeader, not clearheader - caps H
                jQuery("nav").removeClass("navbar-transparent");
                jQuery("body").addClass("not-on-top");
            } else {
                jQuery("body").removeClass("not-on-top");
                jQuery("nav").addClass("navbar-transparent");
            }
        });
    },
    masonryPortfolio: function() {
        // init Isotope
        var $grid = jQuery('.grid-portfolio').isotope({
            // options
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item'
            }
        });
        // filter items on button click
        jQuery('.filter-button-group').on('click', 'button', function() {
            var filterValue = jQuery(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // filter add class
        jQuery('.btn-filter button.is-checked').addClass('active');
        jQuery('.btn-filter button').on('click', function() {
            jQuery('.btn-filter button').removeClass('active');
            jQuery(this).addClass('active');
        });
    },
    skillBar: function() {
        jQuery('.skills').each(function() {
            var that = this;
            var waypoints = $(this).waypoint({
                handler: function(direction) {
                    jQuery('.skill-percent-wrap').each(function() {
                        jQuery(this).find('.skill-percent').delay(10000).css({
                            width: jQuery(this).attr('data-percent')
                        });
                    });
                },
                offset: '50%'
            });
        });
    },
    parallaxEffect: function() {
        var screenW = jQuery(window).width();
        if (screenW >= 767) {
            jQuery(".bg-fixed").attr("data-stellar-background-ratio", "0.9");
            jQuery.stellar({
                horizontalScrolling: false,
                responsive: true,
                parallaxBackgrounds: true,
                scrollProperty: 'scroll',
            });
        }
    },
    mapsInit: function() {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 15,

                scrollwheel: false,
                // navigationControl: false,
                mapTypeControl: false,
                // scaleControl: false,
                // draggable: false,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(-7.7972, 110.3688), // New York

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(-7.7972, 110.3688),
                map: map,
                title: 'Snazzy!'
            });
        }
    },
    aosInit: function() {
        AOS.init({
            easing: 'ease-out-back',
            duration: 1000,
            delay: 300,
            once: true
        });
    },
    countTo: function() {
        jQuery('#counter').each(function() {
            var that = this;
            var waypoints = $(this).waypoint({
                handler: function(direction) {
                    jQuery('.number').countTo({
                        speed: 1500
                    });
                },
                offset: '80%'
            });
        });
    },
    owlInit: function() {
        jQuery('.slideshow').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            navText: ['<span class="icon-nav-slider nav-left"></span>', '<span class="icon-nav-slider nav-right"></span>']
        });
        jQuery('.client-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        });
        jQuery('.testi-slider').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    },
    typingEffect: function() {
        jQuery(document).ready(function() {
            //type effect
            var animationDelay = 2500,
                //loading bar effect
                barAnimationDelay = 3800,
                barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
                //letters effect
                lettersDelay = 50,
                //type effect
                typeLettersDelay = 150,
                selectionDuration = 500,
                typeAnimationDelay = selectionDuration + 800,
                //clip effect
                revealDuration = 600,
                revealAnimationDelay = 1500;
            initHeadline();

            function initHeadline() {
                //insert <i> element for each letter of a changing word
                singleLetters($('.headline-typing.letters').find('b'));
                //initialise headline animation
                animateHeadline($('.headline-typing'));
            }

            function singleLetters($words) {
                $words.each(function() {
                    var word = $(this),
                        letters = word.text().split(''),
                        selected = word.hasClass('is-visible');
                    for (var i in letters) {
                        if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                        letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
                    }
                    var newLetters = letters.join('');
                    word.html(newLetters);
                });
            }

            function animateHeadline($headlines) {
                var duration = animationDelay;
                $headlines.each(function() {
                    var headline = $(this);

                    if (!headline.hasClass('type')) {
                        //assign to .word-typing the width of its longest word
                        var words = headline.find('.word-typing b'),
                            width = 0;
                        words.each(function() {
                            var wordWidth = $(this).width();
                            if (wordWidth > width) width = wordWidth;
                        });
                        headline.find('.word-typing').css('width', width);
                    }

                    //trigger animation
                    setTimeout(function() {
                        hideWord(headline.find('.is-visible').eq(0));
                    }, duration);
                });
            }

            function hideWord($word) {
                var nextWord = takeNext($word);

                if ($word.parents('.headline-typing').hasClass('type')) {
                    var parentSpan = $word.parent('.word-typing');
                    parentSpan.addClass('selected').removeClass('waiting');
                    setTimeout(function() {
                        parentSpan.removeClass('selected');
                        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
                    }, selectionDuration);
                    setTimeout(function() {
                        showWord(nextWord, typeLettersDelay);
                    }, typeAnimationDelay);
                } else {
                    switchWord($word, nextWord);
                    setTimeout(function() {
                        hideWord(nextWord);
                    }, animationDelay);
                }
            }

            function showWord($word, $duration) {
                if ($word.parents('.headline-typing').hasClass('type')) {
                    showLetter($word.find('i').eq(0), $word, false, $duration);
                    $word.addClass('is-visible').removeClass('is-hidden');

                } else if ($word.parents('.headline-typing').hasClass('clip')) {
                    $word.parents('.word-typing').animate({
                        'width': $word.width() + 10
                    }, revealDuration, function() {
                        setTimeout(function() {
                            hideWord($word);
                        }, revealAnimationDelay);
                    });
                }
            }

            function hideLetter($letter, $word, $bool, $duration) {
                $letter.removeClass('in').addClass('out');

                if (!$letter.is(':last-child')) {
                    setTimeout(function() {
                        hideLetter($letter.next(), $word, $bool, $duration);
                    }, $duration);
                } else if ($bool) {
                    setTimeout(function() {
                        hideWord(takeNext($word));
                    }, animationDelay);
                }

                if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
                    var nextWord = takeNext($word);
                    switchWord($word, nextWord);
                }
            }

            function showLetter($letter, $word, $bool, $duration) {
                $letter.addClass('in').removeClass('out');

                if (!$letter.is(':last-child')) {
                    setTimeout(function() {
                        showLetter($letter.next(), $word, $bool, $duration);
                    }, $duration);
                } else {
                    if ($word.parents('.headline-typing').hasClass('type')) {
                        setTimeout(function() {
                            $word.parents('.word-typing').addClass('waiting');
                        }, 200);
                    }
                    if (!$bool) {
                        setTimeout(function() {
                            hideWord($word);
                        }, animationDelay);
                    }
                }
            }

            function takeNext($word) {
                return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
            }

            function takePrev($word) {
                return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
            }

            function switchWord($oldWord, $newWord) {
                $oldWord.removeClass('is-visible').addClass('is-hidden');
                $newWord.removeClass('is-hidden').addClass('is-visible');
            }
        });
    },
    colorLuminance: function(hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        // convert to decimal and change luminosity
        var rgb = "#",
            c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    },

    backgroundChangerInit: function() {
        // Color Changer
        jQuery(document).on("click", ".background-changer .colors span", function() {
            jQuery("#color-changer").remove();
            var color = jQuery(this).data("color");
            var style = "<style id='color-changer'>" +
                // Backgrounds
                "span.divider, .skill-item .skill-percent,.toggle,.team-img:after,.headline-typing.type .word-typing.selected, .headline-typing.type .word-typing.waiting::after, .headline-typing.type .word-typing::after,.btn-filter .button:hover{background-color: " + color + " !important}" +
                ".btn.btn-custom{background-color: " + color + "}" +
                // Colors
                ".btn.btn-custom.btn-wire,.app-text span,.nav li.active a,#tabs-wrap .nav-tabs > li.active > a,#tabs-wrap .nav-tabs > li > a:hover,.btn-filter .button.active,.benefit-item i,a,.feature-item i,a:focus, a:hover,.panel-title > a:after,.price-title,.price-amount h2,.timeline-icon:hover,.testi-content .testi-desc span,.video-content h2 span,.contact-info-item i,#footer-copyright span,.navbar-fixed-top li > a:focus, .navbar-fixed-top li > a:hover,.hero-text span,.timeline-box:hover + .timeline-icon,.timeline-icon:hover,#back-to-top i,.counter-item > i,.vendor-icon a:hover > i {color: " + color + "}" +
                // Border Color
                ".price-item:hover,.timeline-icon:hover,.timeline-box:hover + .timeline-icon,.timeline-icon:hover,.btn-filter .button:hover{border-color: " + color + "}" +
                // Dark Background Colors
                ".btn.btn-custom.btn-wire:hover,.btn.btn-custom:hover{background-color: " + slariScript.colorLuminance(color, -0.2) + " !important} " +
                // Dark Colors
                "a:hover{color: " + slariScript.colorLuminance(color, -0.2) + "} " +
                // Dark Border Colors
                ".btn.btn-custom.btn-wire{border-color: " + slariScript.colorLuminance(color, -0.2) + "}" +
                // Bright Background Colors
                "{background-color: " + slariScript.colorLuminance(color, 0.2) + " !important} " +
                // Bright Colors
                "{color: " + slariScript.colorLuminance(color, 0.2) + " !important} " +
                // Bright Border Colors
                "{border-color: " + slariScript.colorLuminance(color, 0.2) + "}" +
                "</style>";
            jQuery("head").append(style);
        });
        // / Color Changer
        // Section and content color Changer
        jQuery(document).on("click", ".background-toggle  span", function() {
            jQuery("#bg-changer").remove();
            var color = jQuery(this).data("color");
            var bgcolor = jQuery(this).data("bg-color");
            var bgmidcolor = jQuery(this).data("bg-mid-color");
            var style = "<style id='bg-changer'>" +
                // Backgrounds section
                "body{background-color: " + bgcolor + "; color: " + color + "}" +
                "body #profile-2,#features,#timeline{background-color:" + bgmidcolor + "} " +
                "#tabs-wrap .nav-tabs > li.active > a{background-color: " + color + "}" +
                // Background
                ".panel-default>.panel-heading,.timeline-box,.timeline-icon{background-color: " + bgcolor + "}" +
                // Colors
                "#tabs-wrap .nav-tabs > li > a,.panel-title,.blog-title h3{color: " + color + "}" +
                //Border Colors
                ".timeline-wrapper .timeline-box:after{border-left-color: " + bgcolor + "}" +
                ".timeline-wrapper:nth-of-type(odd) .timeline-box:after{border-right-color: " + bgcolor + "}" +
                "@media (max-width: 992px){ .timeline-wrapper .timeline-box:after{border-right-color: " + bgcolor + "}" +
                // Bright Border Colors

                "</style>";
            // / Section and content color Changer
            jQuery("head").append(style);
        });
    },
    backgroundChangerJS: function() {
        jQuery(document).on("click", ".background-changer .toggle", function() {
            var $parent = jQuery(this).parent();
            if (!$parent.hasClass("opened")) {
                $parent.addClass("opened");
            } else {
                $parent.removeClass("opened");
            }
        });
    },
    backgroundChangerHtml: function() {
        var markup = "<div class='background-changer'>" +
            "<div class='colors'>" +
            "<h5>Colors</h5>" +
            "<span class='red' data-color='#eb6361'></span>" +
            "<span class='blue' data-color='#41baf1'></span>" +
            "<span class='green' data-color='#2cc990'></span>" +
            "<span class='yellow' data-color='#eee657'></span>" +
            "<span class='orange' data-color='#ffc400'></span>" +
            "<span class='purple' data-color='#897fba'></span>" +
            "<span class='maroon' data-color='#8a2d3c'></span>" +
            "<span class='green1' data-color='#97ce68'></span>" +
            "<span class='aqua' data-color='#008F95'></span>" +
            "</div>" +
            "<div class='background-toggle'>" +
            "<h5>Backgrounds</h5>" +
            "<span class='dark-bg' data-bg-color='#171717 ' data-bg-mid-color='#0d0c0d' data-color='#f5f5f5' ></span>" +
            "<span class='light-bg' data-bg-color='#ffffff'  data-bg-mid-color='#f5f5f5' data-color='#333333'></span>" +
            "</div>" +
            "<div class='toggle'><i class='fa fa-cog'></i></div>" +
            "</div>";
        jQuery("body").append(markup);
    },
    scrollTop: function() {
        jQuery(".navbar-right li > a").click(function(event) {
            var target = jQuery(this).attr("href");
            var top;
            if (target !== "#home") {
                top = jQuery(target).offset().top;
            } else {
                top = 0;
            }
            jQuery('html, body').animate({
                scrollTop: top
            }, 1000);
            event.preventDefault();
        });
    },
    resize: function() {
        console.log('resize');
    },
    jqueryValidation: function() {
        jQuery(function() {
            jQuery("form[name='contact-us']").validate({
                // Specify validation rules
                rules: {
                    // The key name on the left side is the name attribute
                    // of an input field. Validation rules are defined
                    // on the right side
                    name: {
                        required: true,
                        minlength: 3,
                        maxlength: 25
                    },
                    email: {
                        required: true,
                        // Specify that email should be validated
                        // by the built-in "email" rule
                        email: true
                    },
                    subject: {
                        required: true,
                        minlength: 3,
                        maxlength: 24
                    },
                    message: {
                        required: true,
                        minlength: 5
                    }
                },
                // Specify validation error messages
                messages: {
                    name: "Please enter your name at least 3 characters",
                    subject: "Please enter your subject at least 3 characters",
                    message: {
                        required: "Please provide your message",
                        minlength: "Your message must be at least 5 characters long"
                    },
                    email: {
                        required: "Please enter a valid email address",
                        email: "Your email address must be in the format of name@domain.com"
                    }
                },
                // Make sure the form is submitted to the destination defined
                // in the "action" attribute of the form when valid
                submitHandler: function(form) {
                    form.submit();
                    return false;
                }
            });
        });
    },
    preloader: function() {
        // Loading
        var loading = '<div class="wrap-preloader"><div class="preloader loading"><span class="slice"></span><span class="slice"></span><span class="slice"></span><span class="slice"></span><span class="slice"></span><span class="slice"></span></div></div>';
        jQuery('body').append(loading);

        // After loading finished
        jQuery(window).load(function() {
            setTimeout(function() {
                jQuery('body').addClass('loaded');
            }, 500);
            // Set the delay animation
        });
    },
    popUp: function() {
        jQuery('.grid-link').magnificPopup({
            type: 'image',
            delegate: '.img-pop',
            // Delay in milliseconds before popup is removed
            removalDelay: 300,
            gallery: {
                enabled: true,
                preload: [0, 2],
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Previous Project',
                tNext: 'Next Project'
            }
        });
    },
    backTop: function() {
        var button = "#back-to-top";
        jQuery(button).click(function(event) {
            event.preventDefault();
            jQuery('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    },
    subscribeForm: function() {
        jQuery('#subscribe-form').submit(function(e) {
            e.preventDefault();
            var postdata = jQuery('#subscribe-form').serialize();
            jQuery.ajax({
                type: 'POST',
                url: 'php/subscribe.php',
                data: postdata,
                dataType: 'json',
                success: function(json) {
                    if (json.valid === 0) {
                        jQuery('.success-message').hide();
                        jQuery('.error-message').hide();
                        jQuery('.error-message').html(json.message);
                        jQuery('.error-message').fadeIn('fast', function() {
                            jQuery('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                jQuery(this).removeClass('animated shake');
                            });
                        });
                    } else {
                        jQuery('.error-message').hide();
                        jQuery('.success-message').hide();
                        jQuery('.subscribe form').hide();
                        jQuery('.success-message').html(json.message);
                        jQuery('.success-message').fadeIn('fast', function() {
                            jQuery('.top-content').backstretch("resize");
                        });
                    }
                }
            });
        });
    },
};

jQuery(document).ready(function($) {
    slariScript.init();
    jQuery(window).on("resize", function() {
        slariScript.resize();
    });
});
