$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
    $('.menu-close').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
    var time = undefined;
    $(function () {

        //init for Profile Page..
        function loadMasonary() {
            
            if (window.matchMedia("(min-width: 768px)").matches) {
                $('.msrItems').msrItems({
                    'colums': 3, //columns number
                    'margin': 25 //right and bottom margin
                });
            } else if (window.matchMedia("(max-width: 767px) and (min-width: 375px)").matches) {
                $('.msrItems').msrItems({
                    'colums': 2, //columns number
                    'margin': 15 //right and bottom margin
                });
            } else {
                $('.msrItems').msrItems({
                    'colums': 1, //columns number
                    'margin': 15 //right and bottom margin
                });
            }
            
            // For Home Product List...
            if (window.matchMedia("(min-width: 768px)").matches) {
                $('.msrItemsHome').msrItemsHome({
                    'colums': 4, //columns number
                    'margin': 25 //right and bottom margin
                });
            } else if (window.matchMedia("(max-width: 767px) and (min-width: 375px)").matches) {
                $('.msrItemsHome').msrItemsHome({
                    'colums': 2, //columns number
                    'margin': 15 //right and bottom margin
                });
            } else {
                $('.msrItemsHome').msrItemsHome({
                    'colums': 1, //columns number
                    'margin': 15 //right and bottom margin
                });
            }
            
            
        }
        
        loadMasonary();

        $(window).on('resize', function () {
            loadMasonary();
        });
        

        //update columns size on window resize
        $('.product-tabs .nav-link').on('click', function (e) {
            clearTimeout(time);
            time = setTimeout(function () {
                $('.msrItems').msrItems('refresh');
            }, 200);
        })

        $(window).on('resize', function (e) {
            clearTimeout(time);
            time = setTimeout(function () {
                $('.msrItems').msrItems('refresh');
            }, 200);
            
            time = setTimeout(function () {
                $('.msrItemsHome').msrItemsHome('refresh');
            }, 200);
        })        

    });
});

window.onscroll = function () {
    scrollFunction()
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function scrollFunction() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

}

$(document).ready(function () {
    $('.earnings__block').on('click', function () {
        $('.earnings__inner-block').toggleClass('d-block mt-2');
        $('.caret-up').toggleClass('d-none');
        $('.caret-down').toggleClass('d-inline-block');
    });

    $('.search-results').on('click', function () {
        $('.head-search').addClass('show');
    });
    $('.pro-list').on('hover click', function () {
        $(this).find('.product-menu').toggleClass('d-block');
    })
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active show');
        $(this).tab('show');
    });

});