$(document).ready(function () {
    // $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    // });
    // $('.menu-close').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    // });

    $(window).on('load', function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            if ($('.earnings-table').hasClass('earnings-table')) {
                $('table tr td:nth-child(2)').addClass('two-lines').ellipsis({ lines: 2 });
            }
        }
        ;
    });
    $('.js-btn-follow').on('click', function () {
        $(this).addClass('d-none');
        $('.js-btn-following').removeClass('d-none');
    });
    $('.js-save-post').on('click', function () {
        $('.follow_button').removeClass('follow_button_hover');
        $('.save-drop').removeClass('d-none');
    });
    $(function () {
        $('[data-toggle="popover"]').popover()
    });

    $('.dropdown p').on('click', function () {
        $('.sgd-drop, .usd-drop').toggleClass('d-block');
        if($(this).hasClass('usd-drop')){
          $('.usd-drop').addClass('d-block');
          $('.sgd-drop').addClass('d-none');
        }
        if($(this).hasClass('sgd-drop')){
          $('.sgd-drop').addClass('d-block');
          $('.usd-drop').addClass('d-none');
        }
        $('.dropdown i').toggleClass('fa-caret-up');
        $('.aora-point').toggleClass('d-none');
    });


    $('.js-proceed-anyway').on('click', function () {
        $('.content-desc-1').addClass('d-none');
        $('.content-desc-2').removeClass('d-none');
    })
    $(window).on('resize', function () {
        if ($(document).hasClass('block__profile')) {
            myAccountModals();
        }
    });

/*
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    }*/

    function toggleEarnings() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            $('.earnings__block .dropdown-list').on('click', function () {
                $('.earnings__inner-block').toggleClass('d-block mt-2');
                $('.caret-down').toggleClass('d-none');
                $('.caret-up').toggleClass('d-inline-block');
            });
        }
    }
    toggleEarnings();
    $(window).on('resize', function () {
        toggleEarnings();
    })

    $('.search-results').on('click', function () {
        $('.head-search').addClass('show');
    });
    $(document).on('click', '.pro-img', function () {
        $('.product-menu').remove();
    });
    $(document).on('hover click', '.pro-list a img', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if($('body').hasClass('my-profile')){
          if ($('.product-menu').hasClass('product-menu')) {
            $('.product-menu').remove();
          } else {
            $(this).parent().append(
              '<div class="product-menu">'
              + '<ul>'
              + '<li class="for-close"><a>Edit</a></li>'
              + '<li class="for-close"><a>Delete</a></li>'
              + '<li class="for-close"><a>Cancel</a></li>'
              + '</ul>'
              + '</div>');
          }
        }else{
          if ($('.product-menu').hasClass('product-menu')) {
            $('.product-menu').remove();
          } else {
            $(this).parent().append(
              '<div class="product-menu">'
              + '<ul>'
              + '<li class="for-close"><a>Report&nbsp;Inappropriate</a></li>'
              + '<li class="for-close"><a>Copy Link</a></li>'
              + '<li class="for-close"><a>Save Post</a></li>'
              + '<li class="for-close"><a>Cancel</a></li>'
              + '</ul>'
              + '</div>');
          }
        }
    });
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active show');
        $(this).tab('show');
    });
    if (window.matchMedia("(max-width: 767px)").matches) {
        myAccountModals();
    }
    ;

    function myAccountModals() {

        $('#redeemPointBtn').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $('.redeem-point-modal').removeClass('modal fade');
            $('.content-desc').addClass('d-none');
        });

        $('#goBackBtn').on('click', function (e) {
            e.preventDefault();
            $('.redeem-point-modal').addClass('modal fade');
            $('.content-desc').removeClass('d-none');
        });

        $('#addBankDetailsBtn').on('click', function (e) {
            e.stopPropagation();
            $('.add-bank-details-modal').removeClass('modal fade');
            $('.show-redeem-via, .redemption').addClass('d-none');
        });

        $('#requestSubmittedBtn').on('click', function (e) {
            e.stopPropagation();
            $('.request-submit-modal').removeClass('modal fade');
            $('.add-bank-details-modal').addClass('modal fade');
            $('.content-desc').addClass('d-none');
        });

        $('.js-proceed-anyway').on('click', function (e) {
            e.stopPropagation();
            $('.add-bank-details-modal').removeClass('modal fade');
            $('.show-redeem-via').addClass('d-none');
            $('.redemption').addClass('d-none');
            $('.redeem-point-modal').addClass('d-none');
        })
    }

    /*
     Reference: http://jsfiddle.net/BB3JK/47/
     */

    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select select-init"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $this.parent().removeClass('select-init');
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    'use strict';

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var PhotoSubmission = function () {
        function PhotoSubmission() {
            _classCallCheck(this, PhotoSubmission);

            var inputs = document.querySelectorAll('.js-photo_submit-input');

            for (var i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener('change', this.uploadImage);
            }
        }

        _createClass(PhotoSubmission, [{
            key: 'uploadImage',
            value: function uploadImage(e) {
                var fileInput = e.target;
                var uploadBtn = fileInput.parentNode;
                var deleteBtn = uploadBtn.querySelectorAll('.photo_submit-delete')[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    uploadBtn.setAttribute('style', 'background-image: url(\'' + e.target.result + '\');');
                    uploadBtn.classList.add('photo_submit--image');
                    fileInput.setAttribute('disabled', 'disabled');
                  deleteBtn.classList.remove('d-none');
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        }]);

        return PhotoSubmission;
    }();

    new PhotoSubmission();

    $(document).on( 'click', '#add_more_product', function(){
      new PhotoSubmission();
    } );

    $(document).on('click', '.photo_submit-delete', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().parent().find('.deletePostModal').modal('show');
        console.log($(this).parent().parent());
    });
    $(document).on('click', '.btn--delete-photo', function (e) {
        e.preventDefault();
        $('.deletePostModal').modal('hide');
        var custom_file = $(this).closest('.custom-file');
        var custom_file_label = $(custom_file).find('.custom-file-label');

        $(custom_file_label).removeClass('photo_submit--image');
        $(custom_file_label).removeAttr('style');

        setTimeout(function () {
            $(custom_file_label).find('.custom-file-input').removeAttr('disabled', 'disabled');
            $(custom_file_label).find('.photo_submit-delete').addClass('d-none');
        });
    });

    // store filter for each group
    var buttonFilters = {};
    var buttonFilter;
    // quick search regex
    var qsRegex;

    var columnSize = 4;
    masonaryAccorrdingWindow();


    $(window).on('resize', function () {
        masonaryAccorrdingWindow();
    });
    $(window).on('load', function () {
        masonaryAccorrdingWindow();
    });
    function masonaryAccorrdingWindow() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            columnSize = 1;
        }
        // else if($( ".block__profile" )) {
        //     columnSize = 3;
        // }
        // else if(window.matchMedia("(max-width: 991px) and (min-width: 768px)").matches) {
        //     columnSize = 1;  
        // }

    }


    // init Isotope
    if ($('.list').hasClass('items')) {

        var $grid = $('.list').imagesLoaded(function () {
            $grid.isotope({
                itemSelector: '.list__item',
                masonry: {
                    column: columnSize,
                    columnWidth: ".list__item",
                    horizontalOrder: true,
                },
                filter: function () {
                    var $this = $(this);
                    var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
                    var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
                    return searchResult && buttonResult;
                },
            });
        });

    }

    $('#searchList').on('click', 'li', function () {
        $('.avail-products').removeClass('d-none');
        $('.no-results').addClass('d-none');
        var $this = $(this);
        // get group key
        $('#searchList li').removeClass('active');
        $this.addClass('active');
        var $buttonGroup = $this.parents('#searchList');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        buttonFilters[filterGroup] = $this.attr('data-filter');
        // combine filters
        buttonFilter = concatValues(buttonFilters);
        // Isotope arrange
        $grid.isotope();
    });

    $('.select-options li').on('click', function () {
        var $this = $(this);

        // get group key
        var $buttonGroup = $this.parents('.select-options');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        buttonFilters[filterGroup] = $this.attr('data-filter');
        // combine filters
        buttonFilter = concatValues(buttonFilters);
        // Isotope arrange
        $grid.isotope();
    });


    // flatten object by concatting values
    function concatValues(obj) {
        var value = '';
        for (var prop in obj) {
            value += obj[prop];
        }
        return value;
    }

    $('#loadMore').on('click', function () {
        // create new item elements
        var $items = document.querySelector('.list').innerHTML;

        // append items to grid
        $grid.append($items)
            // add and lay out newly appended items
            .isotope('appended', $items);

        setTimeout(function () {
            $grid.isotope('reloadItems').isotope({ sortBy: 'original-order' });
        }, 200);
    });
    $(window).on('load', function () {
        var selectFilter = $('select').data("filter-group");
        var optionFilter = $("option").map(function () {
            return $(this).data("filter");
        }).get();

        $('.select-options').attr('data-filter-group', selectFilter);
        $('option').each(function (i) {
            $(".select-options li:nth-child(" + (i + 1) + ")").attr('data-filter', optionFilter[i]);
        })
    })

});
