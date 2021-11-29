//////////////INDEX
            //sell button
            $(document).ready(function() {
                $('.btn-sell').click(function() {
                    $('.btn-sell').toggleClass('active');
                    $(".btn-rent").removeClass('active')
                    $(".btn-buy").removeClass('active')
                })
            })

            //buy button
            $(document).ready(function() {
                $('.btn-buy').click(function() {
                    $('.pop-buy').toggleClass('active');
                    $(".pop-rent").removeClass('active')
                    $(".pop-buy").addClass('active')
                    $('.btn-buy').toggleClass('active');
                    $(".btn-rent").removeClass('active')
                    $(".btn-sell").removeClass('active')
                })
            })
            
            //rent button
            $(document).ready(function() {
                $('.btn-rent').click(function() {
                    $('.pop-rent').toggleClass('active');
                    $('.pop-buy').removeClass('active')
                    $(".pop-rent").addClass('active')
                    $('.btn-rent').toggleClass('active');
                    $(".btn-sell").removeClass('active')
                    $(".btn-buy").removeClass('active')
                })
            })

//////////////APARTMENT SEARCH MAP
            //select2
            $(document).ready(function() {
                $('.js-example-basic-single').select2();

                $(document).ready(function() {
                    $('.js-example-basic-multiple').select2();
                });

                $('.category').click(function() {
                    var text = $( this ).text();
                    $( "#vrt-typeahead" ).val( text );
                });
            });
            
            //hide tags
            
            //breadcrum input
            $('#breadInput').on('keyup', function() {
                var input = $(this);
                if(input.val().length === 0) {
                    input.addClass('empty');
                } else {
                    input.removeClass('empty');
                }
            });
            
            //buy lease button
            $(document).ready(function() {
                $('.slider').click(function() {
                    $('.switch').find('input').toggleClass('inputActive');
                    $('.buy-sw').toggleClass('active');
                    $('.lease-sw').toggleClass('active');
                    $('.slider').toggleClass('active');
                })
            })
            
            //pop nearby
            $(document).ready(function() {
                $('.wrapper-neadv .btnby').click(function() {
                    $('.nearby-maps .wrapper-nearby .pop-nearby').toggleClass('active');
                     $('.nearby-maps .close-nearby ').addClass('active');
                })
                $('.nearby-maps .close-nearby').click(function() {
                    $('.nearby-maps .wrapper-nearby .pop-nearby').removeClass('active');
                     $('.nearby-maps .close-nearby ').removeClass('active');
                })
            })
            
            //nearby kilos button
            $(document).ready(function() {
                $('.nearby-maps .wrapper-nearby .near-checkbox .shelter .round-check').click(function() {
                    $('.nearby-maps .wrapper-nearby .near-checkbox .shelter .round-check').toggleClass('active');
                })
                $('.nearby-maps .wrapper-nearby .near-checkbox .mall .round-check').click(function() {
                    $('.nearby-maps .wrapper-nearby .near-checkbox .mall .round-check').toggleClass('active');
                })
                $('.nearby-maps .wrapper-nearby .near-checkbox .train .round-check').click(function() {
                    $('.nearby-maps .wrapper-nearby .near-checkbox .train .round-check').toggleClass('active');
                })
                $('.nearby-maps .wrapper-nearby .near-checkbox .traditional .round-check').click(function() {
                    $('.nearby-maps .wrapper-nearby .near-checkbox .traditional .round-check').toggleClass('active');
                })
                $('.nearby-maps .wrapper-nearby .near-checkbox .highway .round-check').click(function() {
                    $('.nearby-maps .wrapper-nearby .near-checkbox .highway .round-check').toggleClass('active');
                })
                $('.nearby-maps .wrapper-nearby .near-checkbox .univ .round-check').click(function() {
                    $('.nearby-maps .wrapper-nearby .near-checkbox .univ .round-check').toggleClass('active');
                })
                $('.nearby-maps .wrapper-nearby .near-checkbox .hospital .round-check').click(function() {
                    $('.nearby-maps .wrapper-nearby .near-checkbox .hospital .round-check').toggleClass('active');
                })
            })
            
            //adv search bed room
            
            //adv search bed room row 2
            
            //buy lease button advance search on yes or no
            
            //unit aminities button
            
            //nearby bottom button
            $(document).ready(function() {
                $('.menu-btm-nearby .shelter .round-check').click(function() {
                    $('.menu-btm-nearby .shelter .round-check').toggleClass('active');
                })
                $('.menu-btm-nearby .mall .round-check').click(function() {
                    $('.menu-btm-nearby .mall .round-check').toggleClass('active');
                })
                $('.menu-btm-nearby .train .round-check').click(function() {
                    $('.menu-btm-nearby .train .round-check').toggleClass('active');
                })
                $('.menu-btm-nearby .traditional .round-check').click(function() {
                    $('.menu-btm-nearby .traditional .round-check').toggleClass('active');
                })
                $('.menu-btm-nearby .highway .round-check').click(function() {
                    $('.menu-btm-nearby .highway .round-check').toggleClass('active');
                })
                $('.menu-btm-nearby .univ .round-check').click(function() {
                    $('.menu-btm-nearby .univ .round-check').toggleClass('active');
                })
                $('.menu-btm-nearby .hospital .round-check').click(function() {
                    $('.menu-btm-nearby .hospital .round-check').toggleClass('active');
                })
            })
            
            //apartment facilities button
            $(document).ready(function() {
                $('.menu-apart-faci .kolam .round-check').click(function() {
                    $('.menu-apart-faci .kolam .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .security .round-check').click(function() {
                    $('.menu-apart-faci .security .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .pet .round-check').click(function() {
                    $('.menu-apart-faci .pet .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .tvcabs .round-check').click(function() {
                    $('.menu-apart-faci .tvcabs .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .inet .round-check').click(function() {
                    $('.menu-apart-faci .inet .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .gym .round-check').click(function() {
                    $('.menu-apart-faci .gym .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .resto .round-check').click(function() {
                    $('.menu-apart-faci .resto .round-check').toggleClass('active');
                })
                 $('.menu-apart-faci .laptenis .round-check').click(function() {
                    $('.menu-apart-faci .laptenis .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .lapbasket .round-check').click(function() {
                    $('.menu-apart-faci .lapbasket .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .atm .round-check').click(function() {
                    $('.menu-apart-faci .atm .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .gstore .round-check').click(function() {
                    $('.menu-apart-faci .gstore .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .jogging .round-check').click(function() {
                    $('.menu-apart-faci .jogging .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .laundry .round-check').click(function() {
                    $('.menu-apart-faci .laundry .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .taman .round-check').click(function() {
                    $('.menu-apart-faci .taman .round-check').toggleClass('active');
                })
                $('.menu-apart-faci .ruangserba .round-check').click(function() {
                    $('.menu-apart-faci .ruangserba .round-check').toggleClass('active');
                })
            })
            
            //advance search button
            $(document).ready(function() {
                $('.wrapper-advsc .btndv').click(function() {
                    $('.adv-search').toggleClass('active');
                })
                $('.adv-search .close-adv i').click(function() {
                    $('.adv-search').removeClass('active');
                })
            })

//////////////LOGIN and REGISTER
            //login
            $(document).ready(function() {
                $('.nav-item1').click(function() {
                    $('.login-form .wrapper-form .lilog-card .btnlogin').toggleClass('active');
                    $('.login-form .wrapper-form .lilog-card .btnlogin .login').toggleClass('active');
                    $('.login-form .wrapper-form .login-card').toggleClass('active');
                    $(".regist-card").removeClass('active')
                    $(".login-card").addClass('active')
                    $(".btnregist").removeClass('active').find('span').removeClass('active')
                    $(".btnlogin").addClass('active').find('span').addClass('active')
                })
            })
            
            //register
            $(document).ready(function() {
                $('.nav-item2').click(function() {
                    $('.login-form .wrapper-form .lilog-card .btnregist').toggleClass('active');
                    $('.login-form .wrapper-form .lilog-card .btnregist .regist').toggleClass('active');
                    $('.login-form .wrapper-form .regist-card').toggleClass('active');
                    $(".regist-card").addClass('active')
                    $(".login-card").removeClass('active')
                    $(".btnregist").addClass('active').find('span').addClass('active')
                    $(".btnlogin").removeClass('active').find('span').removeClass('active')
                })
            })

            //NAVBAR LOG IN
            $(document).on('scroll',function() {
               if($(this).scrollTop() > 1) {
                   $('nav.trsp').addClass('sticky');
               } else {
                   $('nav.trsp').removeClass('sticky');
               }
            });

//////////////ADVANCE SEARCH DETAIL MAP
            //SEARCH ICON
            $('#breadInput').on('keyup', function() {
                var input = $(this);
                if(input.val().length === 0) {
                    input.addClass('myinput');
                } else {
                    input.removeClass('myinput');
                }
            });

            //CBD Advance Search Detail button
            $(document).ready(function() {
                $('.card-adv-detail .cbd .round-check').click(function() {
                    $('.card-adv-detail .cbd-menu .round-check').toggleClass('active');
                })
                $('.card-adv-detail .gatsu .round-check').click(function() {
                    $('.card-adv-detail .gatsu .round-check').toggleClass('active');
                })
                $('.card-adv-detail .megaku .round-check').click(function() {
                    $('.card-adv-detail .megaku .round-check').toggleClass('active');
                })
                $('.card-adv-detail .sudirman .round-check').click(function() {
                    $('.card-adv-detail .sudirman .round-check').toggleClass('active');
                })
                $('.card-adv-detail .thamrin .round-check').click(function() {
                    $('.card-adv-detail .thamrin .round-check').toggleClass('active');
                })
                $('.card-adv-detail .khmas .round-check').click(function() {
                    $('.card-adv-detail .khmas .round-check').toggleClass('active');
                })
                $('.card-adv-detail .kuningan .round-check').click(function() {
                    $('.card-adv-detail .kuningan .round-check').toggleClass('active');
                })
                 $('.card-adv-detail .satrio .round-check').click(function() {
                    $('.card-adv-detail .satrio .round-check').toggleClass('active');
                })
                $('.card-adv-detail .rasunan .round-check').click(function() {
                    $('.card-adv-detail .rasunan .round-check').toggleClass('active');
                })
            })
            
            //CBD Chevron Advance Search Detail button
            $(document).ready(function() {
                $('.card-adv-detail .cbd-menu .bord-btm').click(function() {
                    $('.card-adv-detail .cbd-menu .cvrn-cbd i').toggleClass('active');
                })
            })
            
            //TB Simatupang Advance Search Detail button
            
            //TB Simatupang Chevron Advance Search Detail button
            $(document).ready(function() {
                $('.card-adv-detail .tbsima-menu .bord-btm').click(function() {
                    $('.card-adv-detail .tbsima-menu .cvrn-tbsima i').toggleClass('active');
                })
            })
            
            //Jakarta Selatan Search Detail button
            
            //Jakarta Selatan Chevron Advance Search Detail button
            $(document).ready(function() {
                $('.card-adv-detail .jaksel-menu .bord-btm').click(function() {
                    $('.card-adv-detail .jaksel-menu .cvrn-jaksel i').toggleClass('active');
                })
            })
            
            //Jakarta Pusat Search Detail button
            
            //Jakarta Pusat Chevron Advance Search Detail button
            $(document).ready(function() {
                $('.card-adv-detail .jakpus-menu .bord-btm').click(function() {
                    $('.card-adv-detail .jakpus-menu .cvrn-jakpus i').toggleClass('active');
                })
            })
            
            //Jakarta Barat Search Detail button
            
            //Jakarta Barat Chevron Advance Search Detail button
            $(document).ready(function() {
                $('.card-adv-detail .jakbar-menu .bord-btm').click(function() {
                    $('.card-adv-detail .jakbar-menu .cvrn-jakbar i').toggleClass('active');
                })
            })
            
            //Jakarta Timur Search Detail button
            
            //Jakarta Timur Chevron Advance Search Detail button
            $(document).ready(function() {
                $('.card-adv-detail .jaktim-menu .bord-btm').click(function() {
                    $('.card-adv-detail .jaktim-menu .cvrn-jaktim i').toggleClass('active');
                })
            })
            
            //Jakarta Utara Search Detail button
            
            //Jakarta Utara Chevron Advance Search Detail button
            $(document).ready(function() {
                $('.card-adv-detail .jakut-menu .bord-btm').click(function() {
                    $('.card-adv-detail .jakut-menu .cvrn-jakut i').toggleClass('active');
                })
            })
            
            //Tangerang Search Detail button
            
            //Tangerang Chevron Advance Search Detail button
            $(document).ready(function() {
                $('.card-adv-detail .tangerang-menu .bord-btm').click(function() {
                    $('.card-adv-detail .tangerang-menu .cvrn-tangerang i').toggleClass('active');
                })
            })

            //Advance Search Detail button
            $(document).ready(function() {
                $('#LocationAdv').click(function() {
                    $('.adv-detail').toggleClass('active');
                })
                $('.adv-detail .close-adv i').click(function() {
                    $('.adv-detail').removeClass('active');
                })
            })

//////////////APARTMENT DETAIL 2
            //chevron facilities
            $(document).ready(function() {
                $('.faci-apart .bord-bt').click(function() {
                    $('.cvrn-apart i').toggleClass('active');
                })
            })
            
            //chevron unit type
            $(document).ready(function() {
                $('.unitype .bord-bt').click(function() {
                    $('.cvrn-unitype i').toggleClass('active');
                })
            })
            
            //chevron review
            $(document).ready(function() {
                $('.review-space .bord-bt').click(function() {
                    $('.cvrn-review i').toggleClass('active');
                })
            })
            
            //buy lease button
            $(document).ready(function() {
                $('.avail-unit .slider-2').click(function() {
                    $('.avail-unit .buy-sw-2').toggleClass('active');
                    $('.avail-unit .lease-sw-2').toggleClass('active');
                })
            })
            
            //button like
            $(document).ready(function() {
                $('.avail-unit .btn-like i').click(function() {
                    $('.avail-unit .btn-like i').toggleClass('active');
                })
                $('.avail-unit .btn-like-2 i').click(function() {
                    $('.avail-unit .btn-like-2 i').toggleClass('active');
                })
                $('.avail-unit .btn-like-3 i').click(function() {
                    $('.avail-unit .btn-like-3 i').toggleClass('active');
                })
                $('.avail-unit .btn-like-4 i').click(function() {
                    $('.avail-unit .btn-like-4 i').toggleClass('active');
                })
                $('.avail-unit .btn-like-5 i').click(function() {
                    $('.avail-unit .btn-like-5 i').toggleClass('active');
                })
                $('.avail-unit .btn-like-6 i').click(function() {
                    $('.avail-unit .btn-like-6 i').toggleClass('active');
                })
            })

//////////////APARTMENT DETAIL LEASE
            //DETAILS Chevron button
            $(document).ready(function() {
                $('.apart-details-lease .bord-bt').click(function() {
                    $('.apart-details-lease .cvrn-dtls-lease i').toggleClass('active');
                })
            })

            //FACILITIES AND AMENITIES Chevron button
            $(document).ready(function() {
                $('.apart-facamen .bord-bt').click(function() {
                    $('.apart-facamen .cvrn-facamen i').toggleClass('active');
                })
            })

            //LIKE PAGE button

            //LIKE SIMILAR UNIT button

//////////////APARTMENT DETAIL PAGE LEASE
            $(document).ready(function() {
                $('.wrapper-btns-lease .btn-share').click(function() {
                    $('.wrapper-lease-share').toggleClass('active');
                    $('.close-share').addClass('active');
                     $('.ppl-pop').removeClass('active');
                })
                $('.btn-ls .btn-cancel ').click(function() {
                    $('.wrapper-lease-share').removeClass('active');
                })
                $('.close-share').click(function() {
                    $('.close-share').removeClass('active');
                    $('.wrapper-lease-share').removeClass('active');
                })
            })

//////////////OFFICE DETAIL PAGE
            //DETAILS Chevron button
            $(document).ready(function() {
                $('.office-details').click(function() {
                    $('.office-details .cvrn-dtls i').toggleClass('active');
                })
            })

            //FACILITIES AND AMENITITES Chevron button
            $(document).ready(function() {
                $('.office-faci').click(function() {
                    $('.office-faci .cvrn-faci i').toggleClass('active');
                })
            })

            //REVIEW CUSTOMER Chevron button
            $(document).ready(function() {
                $('.office-review').click(function() {
                    $('.office-review .cvrn-review i').toggleClass('active');
                })
            })

            //PEOPLE Chevron button
            $(document).ready(function() {
                $('.btn-ppl').click(function() {
                    $('.ppl-pop').toggleClass('active');
                    $('.close-ppl').addClass('active');
                    $('.wrapper-lease-share').removeClass('active');
                })
                $('.close-ppl').click(function() {
                    $('.close-ppl').removeClass('active');
                    $('.ppl-pop').removeClass('active');
                })
                $('.option-ppl .open').click(function() {
                    $('.option-ppl .open').addClass('active');
                    $('.option-ppl .open .head').addClass('active');
                    $('.option-ppl .open i').addClass('active');
                    $('.option-ppl .standard').removeClass('active');
                    $('.option-ppl .standard .head').removeClass('active');
                    $('.option-ppl .standard i').removeClass('active');
                })
                $('.option-ppl .standard').click(function() {
                    $('.option-ppl .standard').addClass('active');
                    $('.option-ppl .standard .head').addClass('active');
                    $('.option-ppl .standard i').addClass('active');
                    $('.option-ppl .open').removeClass('active');
                    $('.option-ppl .open .head').removeClass('active');
                    $('.option-ppl .open i').removeClass('active');
                })
            })

            //SIMILAR UNIT OFFICE Chevron button
            $(document).ready(function() {
                $('.unit-card .btn-like i').click(function() {
                    $('.unit-card .btn-like i').toggleClass('active');
                })
                $('.unit-card .btn-like-2 i').click(function() {
                    $('.unit-card .btn-like-2 i').toggleClass('active');
                })
                $('.unit-card .btn-like-3 i').click(function() {
                    $('.unit-card .btn-like-3 i').toggleClass('active');
                })
                $('.unit-card .btn-like-4 i').click(function() {
                    $('.unit-card .btn-like-4 i').toggleClass('active');
                })
                $('.unit-card .btn-like-5 i').click(function() {
                    $('.unit-card .btn-like-5 i').toggleClass('active');
                })
                $('.unit-card .btn-like-6 i').click(function() {
                    $('.unit-card .btn-like-6 i').toggleClass('active');
                })
                $('.unit-card .btn-like-7 i').click(function() {
                    $('.unit-card .btn-like-7 i').toggleClass('active');
                })
                $('.unit-card .btn-like-8 i').click(function() {
                    $('.unit-card .btn-like-8 i').toggleClass('active');
                })
            })


//////////////NAVBAR RESPONSIVE
            //SEARCH button
            $(document).ready(function() {
                $('.toggle-srch .srch i').click(function() {
                    $('.toggle-srch .srch i').addClass('active');
                    $('.toggle-srch .cls i').addClass('active');
                    $('.mynavbar .input-group').addClass('active');
                    $('.mynavbar .input-group').show();
                    $('.mynavbar .logo img').toggleClass('active');
                })
                $('.toggle-srch .cls i').click(function() {
                    $('.toggle-srch .cls i').removeClass('active');
                    $('.mynavbar .input-group').hide();
                    $('.mynavbar .input-group').removeClass('active');
                    $('.toggle-srch .srch i').removeClass('active');
                    $('.mynavbar .logo img').removeClass('active');
                })
            })

            //NAVBAR TOGGLE button
            $(document).ready(function() {
                $('.toggle-nav').click(function() {
                    $('.toggle-nav .span1').toggleClass('active');
                    $('.toggle-nav .span2').toggleClass('active');
                    $('.toggle-nav .span3').toggleClass('active');
                    $('.wrapper-resp-nav').toggleClass('active');
                })
            })

            //NAVBAR MENU CHEVRON button
            $(document).ready(function() {
                $('.mynavbar .dropbtn.office').click(function() {
                    $('.mynavbar .dropbtn.office i').toggleClass('active');
                })
                $('.mynavbar .dropbtn.apartment').click(function() {
                    $('.mynavbar .dropbtn.apartment i').toggleClass('active');
                })
                $('.mynavbar .dropbtn.lang').click(function() {
                    $('.mynavbar .dropbtn.lang i').toggleClass('active');
                })
            })

            //NAVBAR SEARCH BY LOCATION MENU CHEVRON button
            $(document).ready(function() {
                $('.resp-crumb').click(function() {
                    $('.crumb-srch').toggleClass('active');
                    $('.toggle-filter').toggleClass('active');
                    $('.crumb-srch .resp-1170-2 i.cls').removeClass('active');
                })
                $('.crumb-srch .resp-1170-2 i.cls').click(function() {
                    $('.crumb-srch .resp-1170-2 i.cls').toggleClass('active');
                    $('.crumb-srch').removeClass('active');
                    $('.toggle-filter').removeClass('active');
                    $('.nearby-maps .wrapper-nearby .pop-nearby').removeClass('active');
                })
            })

//////////////FAQ Page
            //FAQ Chevron
            $(document).ready(function() {
                $('.faq-one').click(function() {
                    $('.cvrn-faq-one i').toggleClass('active');
                })
                $('.faq-two').click(function() {
                    $('.cvrn-faq-two i').toggleClass('active');
                })
                $('.faq-three').click(function() {
                    $('.cvrn-faq-three i').toggleClass('active');
                })
                $('.faq-four').click(function() {
                    $('.cvrn-faq-four i').toggleClass('active');
                })
                $('.faq-five').click(function() {
                    $('.cvrn-faq-five i').toggleClass('active');
                })
                $('.faq-six').click(function() {
                    $('.cvrn-faq-six i').toggleClass('active');
                })
                $('.faq-seven').click(function() {
                    $('.cvrn-faq-seven i').toggleClass('active');
                })
                $('.faq-eight').click(function() {
                    $('.cvrn-faq-eight i').toggleClass('active');
                })
                $('.faq-nine').click(function() {
                    $('.cvrn-faq-nine i').toggleClass('active');
                })
                $('.faq-ten').click(function() {
                    $('.cvrn-faq-ten i').toggleClass('active');
                })
                $('.faq-eleven').click(function() {
                    $('.cvrn-faq-eleven i').toggleClass('active');
                })
                $('.faq-twelve').click(function() {
                    $('.cvrn-faq-twelve i').toggleClass('active');
                })
            })

//////////////ACCOUNT SETTING
            //Upload Photo
            $(document).ready(function(e) {
                $(".btn-upload .btn-up").click(function(){
                    $("#selectfile").trigger('click');
                });
            });

//////////////BOOK AN APPOINTMENT 1
            //BUTTON RENT AND SELL
            $(document).ready(function(e) {
                $('.option-end .sell .round-check').click(function() {
                    $('.option-end .sell .round-check').toggleClass('active');
                })
                $('.option-end .rent .round-check').click(function() {
                    $('.option-end .rent .round-check').toggleClass('active');
                })
                $('.option-end .sellandrent .round-check').click(function() {
                    $('.option-end .sellandrent .round-check').toggleClass('active');
                })
            });

//////////////GLOBAL
            //NAVBAR LOGGED IN
            $(document).ready(function() {
                $('.mynavbar .wrapper-profile.resp i').click(function() {
                    $('.mynavbar .wrapper-profile.resp i').toggleClass('active');
                })
            })

            //NAVBAR DROPDOWN

            //NAVBAR BUTTONS SEARCH
            $(document).ready(function() {
               $('.mynavbar .search-navbar .btn-buys').click(function() {
                   $('.mynavbar .search-navbar .btn-buys').toggleClass('active');
                   $('.mynavbar .search-navbar .btn-leases').removeClass('active');
               })
               $('.mynavbar .search-navbar .btn-leases').click(function() {
                   $('.mynavbar .search-navbar .btn-leases').toggleClass('active');
                   $('.mynavbar .search-navbar .btn-buys').removeClass('active');
               })
            })

            //SEARCH BAR ON NAVBAR
            $(document).ready(function() {
               $('.example-heroes1').focus(function() {
                   $('.mynavbar .search-navbar .btn-buys').toggleClass('focus');
                   $('.mynavbar .search-navbar .btn-leases').toggleClass('focus');
                   $('.mynavbar .search-navbar form').toggleClass('focus');
               })
               $('.example-heroes1').focusout(function() {
                   setTimeout(function(){
                       $('.mynavbar .search-navbar .btn-buys').toggleClass('focus');
                       $('.mynavbar .search-navbar .btn-leases').toggleClass('focus');
                       $('.mynavbar .search-navbar form').toggleClass('focus');
                   }, 500);
               })
            })

            //popover
            $(function () {
              $('[data-toggle="popover"]').popover()
            })

            //NAVBAR PLACEHOLDER
            $('#myInput').on('keyup', function() {
                var input = $(this);
                if(input.val().length === 0) {
                    input.addClass('empty');
                } else {
                    input.removeClass('empty');
                }
            });