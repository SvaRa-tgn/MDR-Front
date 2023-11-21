var appMaster = {

  CSRF: function(){
      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });
  },

  scrollMenu: function(){
    var num = 1;
    $(document).on('scroll', function() {
      var lengthLi = $('.class-for-anime').length;

      if ( $(document).scrollTop() > num ){
        $('.nav-index').addClass('nav-scroll');
        $('.navigation-list-bottom').addClass('navigation-down');
        $('.auth-search').addClass('auth-item-visible');
        $('.index-search').removeClass('start-search');

        var n = 0;
        function remove (){
        if(lengthLi >= n && $(document).scrollTop() > 1 ){
          $('.class-for-anime').eq(n).removeClass('nav-positon');
          n = n + 1;
        }
        };
        setInterval(remove, 50)

      } else {
        $('.nav-index').removeClass('nav-scroll');
        $('.navigation-list-bottom').removeClass('navigation-down');
        $('.auth-search').removeClass('auth-item-visible');
        $('.search').removeClass('main-search');
        $('.index-search').addClass('start-search');

        var m = 6;
        function add (){
        if(m >= 0 && $(document).scrollTop() < 1 ){
          $('.class-for-anime').eq(m).addClass('nav-positon');
          m = m - 1;
        }
        return m;
        };
        setInterval(add, 50);
      }
    });
  },

  linkMenu: function(){
    var home = $('#home').outerHeight() - 100,
        catalog = $('#catalog').outerHeight(),
        news = $('#new').outerHeight(),
        recomendation = $('#recomendation').outerHeight(),
        idea = $('#idea').outerHeight(),
        pop = $('#pop').outerHeight(),
        info = $('.block-info').outerHeight(),
        footer = $('#footer').outerHeight();

    $(document).on("scroll", function(){
      if ($(document).scrollTop() <= home) {
        $('.class-for-anime').removeClass('active-link');
        $('.class-for-anime').eq(0).addClass('active-link');
      } else if ($(document).scrollTop() <= catalog + info + home) {
        $('.class-for-anime').removeClass('active-link');
        $('.class-for-anime').eq(1).addClass('active-link');
      } else if ($(document).scrollTop() <=  news + info + catalog + info + home) {
        $('.class-for-anime').removeClass('active-link');
        $('.class-for-anime').eq(2).addClass('active-link');
      } else if ($(document).scrollTop() <=  recomendation + info + news + info + catalog + info + home) {
        $('.class-for-anime').removeClass('active-link');
        $('.class-for-anime').eq(3).addClass('active-link');
      } else if ($(document).scrollTop() <= idea + info + recomendation + info + news + info + catalog + info + home) {
        $('.class-for-anime').removeClass('active-link');
        $('.class-for-anime').eq(4).addClass('active-link');
      } else if ($(document).scrollTop() <= pop + info + idea + info + recomendation + info + news + info + catalog + info + home) {
        $('.class-for-anime').removeClass('active-link');
        $('.class-for-anime').eq(5).addClass('active-link');
      } else if ($(document).scrollTop() <= footer + info + pop + info + idea + info + recomendation + info + news + info + catalog + info + home - 50) {
        $('.class-for-anime').removeClass('active-link');
        $('.class-for-anime').eq(6).addClass('active-link');
      }
    });
  },

  searchCall: function(){
    $('.auth-item').eq(0).click(function(){
      $('.search').toggleClass('main-search');
    });
  },

  slider: function(){
    var n = 1;
        slide = $('.slider-item');
        img = $('.slider-list .wrap-block-item');
        length = slide.length;

    function slider () {
      if (n < length){
        slide.eq(n-1).removeClass('slider-position-2');
        slide.eq(n-1).addClass('slider-position-1');

        slide.eq(n).removeClass('slider-position-3');
        img.eq(n).removeClass('slider-opacity');
        slide.eq(n).addClass('slider-position-2');

        slide.eq(n+1).removeClass('slider-position-1');
        img.eq(n+1).addClass('slider-opacity');
        slide.eq(n+1).addClass('slider-position-3');
        if (n == length - 1){
          slide.eq(0).removeClass('slider-position-1');
          img.eq(0).addClass('slider-opacity');
          slide.eq(0).addClass('slider-position-3');
        }
        n = n + 1;
      } else {
        n = 1
        slide.eq(n-1).removeClass('slider-position-3');
        img.eq(n-1).removeClass('slider-opacity');
        slide.eq(n-1).addClass('slider-position-2');

        slide.eq(n).removeClass('slider-position-1');
        img.eq(n).addClass('slider-opacity');
        slide.eq(n).addClass('slider-position-3');

        slide.eq(n+1).removeClass('slider-position-2');
        slide.eq(n+1).addClass('slider-position-1');
      }

    };
    setInterval(slider, 12000);
  },

  sliderTwo: function(){
    var n = 1;
        slide = $('.slider-item');
        length = slide.length;

    function slider () {
      if (n < length){
        slide.eq(n-1).removeClass('slider-opacity');
        slide.eq(n).addClass('slider-opacity');
        n = n + 1;
      } else {
        n = 0
        slide.eq(-1).removeClass('slider-opacity');
        slide.eq(n).addClass('slider-opacity');
        n = n + 1;
      }
      return n
    };
    setInterval(slider, 6000);
  },

  callback: function(){
    $('.callback-item').hover(function(){
      $('.callback-item').removeClass('animation-callback');
    }, function(){
      $('.callback-item').addClass('animation-callback');
    });
  },

  callbackBox: function(){
    $('.callback-item').eq(0).click(function(){
      $('.callback-block').addClass('callback-visible');
      $('.visible').addClass('noscroll');

      $('.img-cross').click(function(){
        $('.callback-block').removeClass('callback-visible');
        $('.visible').removeClass('noscroll');
      });
    });
  },

  closeModal: function(){
    $('.js-close').click(function (){
        $('.modal-block').removeClass('modal-block-open');
        $('.js-link-2').removeClass('open-box');
    });
  },


  authBox: function(){
    $('.js-call').click(function(){
      $('.auth-block').addClass('callback-visible');
      $('.visible').addClass('noscroll');

      $('.img-cross').click(function(){
        $('.auth-block').removeClass('callback-visible');
        $('.visible').removeClass('noscroll');
      });
    });
  },

  authBoxSlide: function(){
    $('.registration-slide').click(function(){
      $('.block-auth').removeClass('visible-block-auth');
      $('.block-reg').addClass('visible-block-auth');
    });

    $('.auth-slide').click(function(){
      $('.block-reg').removeClass('visible-block-auth');
      $('.block-auth').addClass('visible-block-auth')
    });
  },

  authBoxForm: function(){
    $('.form-auth').submit(function (e) {
      e.preventDefault();
        console.log(1);
        let input = $('.form-auth').find('.input-auth'),
          error = false;
        $.each(input, function (index, element) {
          if ($(this).val() === '') {
            error = true;
            $(this).addClass('input-error');
            $(this).parent().addClass('wrap-input-padding');
            $(this).parent().attr('data-answer', 'Заполните поле');
          } else {
            $(this).removeClass('input-error');
            $(this).parent().removeClass('wrap-input-padding');
            $(this).parent().removeAttr('data-answer');
          }
        });

        if (error === false) {
          let formData = $(this).serializeArray();
          $.ajax({
            method: "POST",
            headers: {
              Accept: "application/json"
            },
            url: '/login',
            data: formData,
              success: () => {
                  $('.auth-block').removeClass('callback-visible');
                  $('.visible').removeClass('noscroll');
                  $('.link-auth-item').removeClass('auth-item-slid');
                  $('.enter-profile').attr('data-tooltipe', 'Личный кабинет');
                  $('.modal-block').addClass('modal-block-open');
                  $('.js-link-2').addClass('open-box');
                  $('.modal-content').text('Вы успешно авторизировались на нашем сайте.');
              },
              error: (response) => {
                if(response.status === 422) {
                  let errors = response.responseJSON.errors;
                  Object.keys(errors).forEach(function (key) {
                    $("." + key + "Error").addClass('wrap-input-padding');
                    $("." + key + "Error").attr('data-answer', errors[key][0]);
                  });
                  } else {
                    window.location.reload();
                  }
                }
            })
        }
    });
  },

  regBoxForm: function(){
     $('.form-auth-reg').submit(function (e) {
        e.preventDefault();

        let input = $('.form-auth-reg').find('.input-auth');
        var error = false;

        $.each(input, function (index, element) {
          if ($(this).val() === '') {
            error = true;
            $(this).addClass('input-error');
            $(this).parent().addClass('wrap-input-padding');
            $(this).parent().attr('data-answer', 'Заполните поле');
          } else {
            $(this).removeClass('input-error');
            $(this).parent().removeClass('wrap-input-padding');
            $(this).parent().removeAttr('data-answer');
          }
        });

        if (error === false) {
          let formData = $(this).serializeArray();
          $.ajax({
             method: "POST",
             headers: {
                 Accept: "application/json"
             },
             url: '/register',
             data: formData,
             success: () => {
                 $('.auth-block').removeClass('callback-visible');
                 $('.visible').removeClass('noscroll');
                 $('.link-auth-item').removeClass('auth-item-slid');
                 $('.enter-profile').attr('data-tooltipe', 'Личный кабинет');
                 $('.modal-block').addClass('modal-block-open');
                 $('.js-link-2').addClass('open-box');
                 $('.modal-content').text('Вы успешно зарегестрировались на нашем сайте.');
             },
             error: (response) => {
                if(response.status === 422) {
                   let errors = response.responseJSON.errors;
                   Object.keys(errors).forEach(function (key) {
                       $("." + key + "ErrorReg").addClass('wrap-input-padding');
                       $("." + key + "ErrorReg").attr('data-answer', errors[key][0]);
                   });
                } else {
                   window.location.reload();
                }
             }
          })
        }
     });
  },

  menu: function(){
    $('.aside-nav-item').hover( function(){
      var li = $(this).children('ul'),
          ul = li.children('li').length,
          width = 2.8 * ul + 1 + 'vh';
      $(li).css('height', width);
      $(this).children('.menu-link').addClass('open-menu');
    }, function(){
      var li = $(this).children('ul');
      $(li).css('height', '0');
      $(this).children('.menu-link').removeClass('open-menu');
    });
  },

  productSlider: function(){
    $('.product-block-foto-mini-item').click(function(){
      $('.product-block-foto-mini-item').removeClass('active');
      $(this).addClass('active');
      var eq = $(this).index();
      $('.product-block-foto-item').removeClass('img-item-opacity');
      $('.product-block-foto-item').eq(eq).addClass('img-item-opacity');
    });
  },

  productSliderOpacity: function(){
    $('.filter-box').click(function(){
      $('.product-slider-foto').addClass('product-slider-visible');
      var active = $('.active');
      var num = active.index();
      $('.product-slider-foto-item').eq(num).addClass('img-item-opacity');
      $('.visible').addClass('noscroll');
    });

    $('.fa-arrow-circle-left').click(function() {
      var point = $('.product-slider-foto-list').find('.img-item-opacity');
      var num = point.index();
      if( num === 0){
        $('.product-slider-foto-item').eq(4).addClass('img-item-opacity');
        point.removeClass('img-item-opacity');
      } else {
        point.prev().addClass('img-item-opacity');
        point.removeClass('img-item-opacity');
      }
    });

    $('.fa-arrow-circle-right').click(function() {
      var point = $('.product-slider-foto-list').find('.img-item-opacity');
      var num = point.index();
      if( num === 4){
        $('.product-slider-foto-item').eq(0).addClass('img-item-opacity');
        point.removeClass('img-item-opacity');
      } else {
        point.next().addClass('img-item-opacity');
        point.removeClass('img-item-opacity');
      }
    });

    $('.img-cross').click(function(){
      $('.product-slider-foto').removeClass('product-slider-visible');
      $('.product-slider-foto-item').removeClass('img-item-opacity');
      $('.visible').removeClass('noscroll');
    });
  },

  autoHeight: function(){
    var img = $('.main-block-item-img');

        for (var i = 0; i < img.length; i++){

          var width  = img.eq(i).width();
          var height = img.eq(i).height();

          if( width > height ){
            img.eq(i).removeClass('j-height-mini');
            img.eq(i).addClass('j-width-mini');
          } else {
            img.eq(i).removeClass('j-width-mini');
            img.eq(i).addClass('j-height-mini');
          }
        }
  },

  privateItem: function(){
    $('.redaction').click(function(){
      $('.main-private-data-item').eq(0).addClass('visibale-private');
      $('.main-private-data-item').eq(1).addClass('visibale-private-last');
    });

    $('.cancel').click(function(){
      $('.main-private-data-item').eq(1).removeClass('visibale-private-last');
      $('.main-private-data-item').eq(0).removeClass('visibale-private');
    });
  },

  createProduct: function(){
    $('#type').change( function() {
      $(this).find(":selected").each(function () {
        if($(this).val() === 'Готовый'){
          $('.type-modul').eq(0).removeClass('visible-type-modul');
          $('.type-modul').eq(1).addClass('visible-type-modul');
          $('.type-collection').eq(0).removeClass('visible-type-modul');
          $('.type-collection').eq(1).addClass('visible-type-modul');
          $('.type-ready').eq(0).removeClass('visible-type-modul');
          $('.type-ready').eq(1).addClass('visible-type-modul');
        } else {
          $('.type-modul').eq(0).addClass('visible-type-modul');
          $('.type-modul').eq(1).removeClass('visible-type-modul');
          $('.type-collection').eq(0).addClass('visible-type-modul');
          $('.type-collection').eq(1).removeClass('visible-type-modul');
          $('.type-ready').eq(0).addClass('visible-type-modul');
          $('.type-ready').eq(1).removeClass('visible-type-modul');
        }
       });
    });
  },

  editFoto: function(){
    var li = $('.main-block-item-img'),
    length = li.length;

    li.each(function(index, element){
      if ($(this).attr('src') === "") {
        $('.edit-foto-save-item').eq(index).addClass('edit-visible');
      } else {
        $('.edit-foto-save-item').eq(index).removeClass('edit-visible');
      }
    });
  },

  checkboxCheckout: function(){
    $('.checkbox-delivery').click(function(){
      if ($(this).is(':checked')) {
         $('.checkbox-delivery').not(this).prop('checked', false);
      }
      if($('.checkbox-delivery').eq(2).is(':checked')){
        $('.delivery-li').removeClass('delivery-li-visible');
       } else {
        $('.delivery-li').addClass('delivery-li-visible');
       }
    });

    $('.checkbox-pay:checkbox').click(function(){
      if ($(this).is(':checked')) {
         $('.checkbox-pay:checkbox').not(this).prop('checked', false);
      }

      if($('.checkbox-pay').is(':checked'))  {
        $('.wrap-pay-attention').css({'height' : '100%', 'opacity' : '1'})
       } else {
        $('.wrap-pay-attention').css({'height' : '0', 'opacity' : '0'})
       }

      if($('.checkbox-pay').eq(0).is(':checked')){
        $('.accept-pay').removeClass('accept-pay-visible');
        $('.accept-pay').eq(0).addClass('accept-pay-visible');
      } else if ($('.checkbox-pay').eq(1).is(':checked')){
        $('.accept-pay').removeClass('accept-pay-visible');
        $('.accept-pay').eq(1).addClass('accept-pay-visible');
      } else if ($('.checkbox-pay').eq(2).is(':checked')){
        $('.accept-pay').removeClass('accept-pay-visible');
        $('.accept-pay').eq(2).addClass('accept-pay-visible');
      }
    });
  },

  sumPriceCheck: function(){
    var arr = $('.span-price').text(),
    length = $('.span-price').length,
    sum = 0,
    total = 0;

    $('.lenght').text(length);


    $('.span-price').each(function(index, element){
      sum += parseInt($(element).text());
    });
    $('.sum').text(sum);
    $('.total-sum').text(sum);

    $('.checkbox-delivery:checkbox').click(function(){
      if($('.checkbox-delivery').eq(2).is(':checked')){
        var del = $('.delivery-price').text();
        total = parseInt(sum) + parseInt(del);

        $(function() {
          $({numberValue: sum}).animate({numberValue: total}, {
            duration: 500,
            easing: "linear",
            step: function(val) {
              $(".total-sum").html(Math.ceil(val));
            }
          });
        });

      } else {
        $('.total-sum').text(sum);

        $(function() {
          $({numberValue: total}).animate({numberValue: sum}, {
            duration: 500,
            easing: "linear",
            step: function(val) {
              $(".total-sum").html(Math.ceil(val));
            }
          });
        });
      }
    });
  },

  checkboxCart: function(){
    var lenght = $('.cart-checkbox').length,
    sum = 0;

    $('.cart-price-box').each(function(index, element){
      sum += parseInt($(element).text());
    });
    $('.total-cart').text(sum);

    if($('.head-cart-checkbox').is(':checked')){
        $('.lenght-cart').text(lenght);
    }

    $('.head-cart-checkbox').click(function(){
      var num = 0;
      $('.cart-price-box').each(function(index, element){
        num += parseInt($(element).text());
        sum = num;
      });

      if($('.head-cart-checkbox').is(':checked')){
        $('.cart-checkbox').prop('checked', true);
        $('.lenght-cart').text(lenght);
        $('.total-cart').text(num);

      } else {
        $('.cart-checkbox').prop('checked', false);
        $('.lenght-cart').text(0);
        $('.total-cart').text(0);
        sum = 0;
      }
    });

    var a = $('.cart-checkbox');
    $(a).click(function(){
      var m = $('.cart-checkbox:checked').length;
      console.log(sum);
      $('.lenght-cart').text(m);

      if($(this).is(':checked')){

        var index = $(this).parents('.cart-block-item').index();
        var elem = $('.cart-price-box');

        sum = sum + parseInt($('.cart-price-box').eq(index).text());
        $('.total-cart').text(sum);

        if(m === $(a).parents('.cart-block-item').length){
          $('.head-cart-checkbox').prop('checked', true);
        }

      } else {
        $('.head-cart-checkbox').prop('checked', false);
        var index = $(this).parents('.cart-block-item').index();
        var elem = $('.cart-price-box');
        sum = sum - parseInt($('.cart-price-box').eq(index).text());
        $('.total-cart').text(sum);
      }
    });
  },
};

$(document).ready(function(){appMaster.scrollMenu();
  appMaster.CSRF();
  appMaster.linkMenu();
  appMaster.searchCall();

  appMaster.sliderTwo();
  appMaster.callback();
  appMaster.callbackBox();
  appMaster.closeModal();
  appMaster.authBox();
  appMaster.authBoxSlide();
  appMaster.authBoxForm();
  appMaster.regBoxForm();
  appMaster.menu();
  appMaster.productSlider();
  appMaster.productSliderOpacity();
  appMaster.autoHeight();
  appMaster.privateItem();
  appMaster.createProduct();
  appMaster.editFoto();
  appMaster.checkboxCheckout();
  appMaster.sumPriceCheck();
  appMaster.checkboxCart();
});
