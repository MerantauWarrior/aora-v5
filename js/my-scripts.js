$(document).ready(function () {
  /*sticky header*/
  $(window).scroll(function(){
    var sticky = $('.main-header__controls'),
      elH = sticky.height();
    scroll = $(window).scrollTop();
    if (scroll >= 150) {
      sticky.addClass('posf-main-header');
      $('.main-header__search.main-header__search-landing').show();
      $('body').css('padding-top', elH+'px');
      $('.slide-menu').addClass('fixed-search');
    }else{
      sticky.removeClass('posf-main-header');
      $('.main-header__search.main-header__search-landing').hide();
      $('body').css('padding-top', '0px');
      $('.slide-menu').removeClass('fixed-search');
    }
  });
  /*mobile menu*/
  $('.main-header-mobile__open').on("click", function(){
    $('.main-header-mobile__menu').toggleClass('main-header-mobile__menu_opened');
    $('.main-header-mobile__open').toggleClass('close-cross');
  });
  /*check if inp value is number*/
  $(document).on('keyup','.js-num-check',function(){
    var val = $(this).val();
    if(isNaN(val)){
      $(this).parent().addClass('error');
      $(this).parent().siblings('.error-text').show();
    }else{
      $(this).parent().removeClass('error');
      $(this).parent().siblings('.error-text').hide();
    }
  });
  /* copy link */
  var clicked = 0;
  $('.gr_btn').on('mouseover', function () {
    if(clicked === 1){
      $('.b-share-product__title').show();
      $('.b-share-product__item').show();
      $('.b-share-product__item.js-share-product .b-share-product__item-text').text('Copy Link');
      $('.b-share-product__item-img-copied').hide();
      $('.b-share-product__item.js-share-product').show();
      clicked = 0;
    }
  });
  $('.js-share-product').on('click', function (e) {
    e.preventDefault();
    clicked = 1;
    var linkVal = $(this).attr('href');
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(linkVal).select();
    document.execCommand("copy");
    $temp.remove();
    $('.b-share-product__title').hide();
    $('.b-share-product__item').hide();
    $('.b-share-product__item.js-share-product .b-share-product__item-text').text('Link Copied!');
    $('.b-share-product__item-img-copied').show();
    $('.b-share-product__item.js-share-product').show();
  });
  /*product*/
  $('.sub-btn a').click(function (e) {
    e.preventDefault();
    var checked = $(this).parent().parent().find('input:checked').length;
    if(checked > 0){
      $(this).text('Submitted');
      $(this).append('<i class="fa fa-check"></i>');
    }
  });
  $('.post_share').on('click hover', function (e) {
    e.preventDefault();
    $(this).children('.b-share-product').show();
    if($(this).children.is(':visible')){
      $(this).children('.b-share-product').hide();
    }
  });
  /*my earnings*/
  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    if (scroll >= 700 && scroll <= 750) {
      $('.pop-info').trigger('click');
    }
  });
  $(document).on('keyup blur','.js-earnings',function(){
    var val = $(this).val();
    if(isNaN(val) || val === ''){
      $(this).parent().removeClass('success');
    }else{
      $(this).parent().addClass('success');
    }
  });
  $(document).on('keyup blur','.js-empty',function(){
    var val = $(this).val();
    if(val !== ''){
      $(this).removeClass('error');
    }else{
      $(this).addClass('error');
    }
  });

});
