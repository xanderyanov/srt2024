$(function () {
  $('.topMenu li:has(ul) > a').addClass('hasInner');

  //прокрутка вверх
  $('.toTop').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.toTop').fadeIn();
    } else {
      $('.toTop').fadeOut();
    }
  });
  $('.toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 400);
    return false;
  });

  // $(window).load(function () {
  //     $("#loader").delay(500).fadeOut(function () {
  //         //$('html').css({'-webkit-transform': 'translateZ(0)'});
  //     });
  //     $(".mask").delay(1000).fadeOut("slow");
  // });

  $('.phone1').mask('+7 (999) 999-9999');
  $('.phoneZ').mask('+7 (999) 999-9999');
  $('.phoneOrder').mask('+7 (999) 999-9999');

  $('table').wrap('<div class="table_outer"></div>');

  // $('.logo1').hover(
  //     function(){ $(this).addClass('animated swing') },
  //     function(){ $(this).removeClass('animated swing') }
  // );

  //Обрезка длинной строки
  function cutLongString(element, count_lit) {
    var text = element.html();
    var all_len = text.length;
    var new_text;
    if (all_len > count_lit) {
      new_text = text.substr(0, count_lit - 3) + '...';
      element.html(new_text);
    }
  }
  $('.cutLongString80').each(function () {
    if ($(this).length) {
      cutLongString($(this), 85);
    }
  });

  // раскрытие меню по кнопке
  $('.menuButton').click(function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.adaptiveMenu__area').slideUp();
      $('.adaptiveMenu__area').removeClass('adaptiveMenu__area_open');
    } else {
      $(this).addClass('open');
      $('.adaptiveMenu__area').slideDown();
      $('.adaptiveMenu__area').addClass('adaptiveMenu__area_open');
    }
  });
  $('.adaptiveMenu li:has(ul) > a').addClass('hasInner');
  // $('.adaptiveMenu li:has(ul)').addClass('has-sub');
  // $('#cssmenu li:has(ul)').addClass('has-sub');
  $('.adaptiveMenu li>a').on('click', function (e) {
    if ($(this).parent().find('ul').length > 0) {
      e.preventDefault();
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
      } else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
      }
    }
  });
  $('.adaptiveMenu li.has-sub>a').append(
    '<span class="holder"><i class="icon-caret-down"></i></span>'
  );
  // отслеживание поведения адаптивного меню при изменении размера экрана
  // $(window).resize(function(){
  //     if ($('.header__area').width() > 600) {
  //         $('.topMenu__area').show();
  //         $('.topMenu__area').removeClass('topMenu__area_open');
  //     }
  //     else {
  //         $('.menuButton').removeClass('open');
  //         $('.topMenu__area').hide();
  //         $('.topMenu__area').removeClass('topMenu__area_open');
  //     }
  // });

  $('a[data-fancybox]').fancybox({
    closeBtn: false,
    arrows: true,
    keyboard: true,
    nextClick: true,
    infobar: true,
    protect: true,
    nextEffect: 'elastic',
    prevEffect: 'elastic',
    padding: 0,
    loop: true,
    animationEffect: 'zoom-in-out',
    transitionEffect: 'slide',
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true, // Continue movement after releasing mouse/touch when panning
    },
  });

  ///1/////////////С оверлеем//////////////

  $('.form1').on('click', '.submit1', function (e) {
    e.preventDefault();
    var name = $('.name1').val();
    var phone = $('.phone1').val();
    var email = $('.email1').val();
    var workemail = $('.work_email1').val();
    var message = $('.message1').val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if (name == '') {
      swal({
        title: 'Поле Имя пустое',
        text: 'Заполните поле имя',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.name1').addClass('error');
      setTimeout(function () {
        $('.name1').removeClass('error');
      }, 3000);
    } else if (phone == '') {
      swal({
        title: 'Поле Телефон пустое',
        text: 'Заполните поле телефон',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.phone1').addClass('error');
      setTimeout(function () {
        $('.phone1').removeClass('error');
      }, 3000);
    } else if (email == '') {
      swal({
        title: 'Ошибка Email',
        text: 'Заполните поле Email',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.email1').addClass('error');
      setTimeout(function () {
        $('.email1').removeClass('error');
      }, 3000);
    } else if (!r.test(email)) {
      swal({
        title: 'Ошибка',
        text: 'Корректно заполните поле e-mail',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.email1').addClass('error');
      setTimeout(function () {
        $('.email1').removeClass('error');
      }, 3000);
    } else if (message == '') {
      swal({
        title: 'Пустое сообщение',
        text: 'Заполните текст сообщения',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.message1').addClass('error');
      setTimeout(function () {
        $('.message1').removeClass('error');
      }, 3000);
    } else if (workemail != '') {
      swal({
        title: 'Ах ты жулик',
        text: 'Уберите робота от компьютера',
        type: 'error',
        confirmButtonText: 'ок',
      });
    } else {
      $.post(
        'mail.php',
        {
          name: name,
          phone: phone,
          email: email,
          message: message,
        },
        function () {
          swal({
            title: 'Спасибо',
            text: 'Ваше сообщение отправлено',
            type: 'success',
            confirmButtonText: 'ок',
          });
          $('.name1').val('').removeClass('error');
          $('.phone1').val('').removeClass('error');
          $('.email1').val('').removeClass('error');
          $('.message1').val('').removeClass('error');
        }
      );
    }
  });

  ///1/////////////С оверлеем//////////////
  $('.js__btn').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var self = $(this);
    if (self.hasClass('js_active')) {
      self.removeClass('js_active');
      $('.js_containerZ')
        .addClass('bounceOutUp')
        .removeClass('bounceInDown')
        .fadeOut(600);
      $('.overlay').fadeOut(200);
    } else {
      self.addClass('js_active');
      $('.js_containerZ')
        .removeClass('bounceOutUp')
        .addClass('bounceInDown')
        .fadeIn(200);
      $('.overlay').fadeIn(200);
    }
  });
  $('.overlay').click(function (e) {
    e.preventDefault();
    $('.js_containerZ')
      .addClass('bounceOutUp')
      .removeClass('bounceInDown')
      .fadeOut(600);
    $('.js__btn').removeClass('js_active');

    $('.overlay').fadeOut(600);
  });
  $('.formClose').click(function (e) {
    e.preventDefault();
    $('.js_containerZ')
      .addClass('bounceOutUp')
      .removeClass('bounceInDown')
      .fadeOut(600);
    $('.js__btn').removeClass('js_active');
    $('.overlay').fadeOut(600);
  });
  $('.formZ').on('click', '.submitZ', function (e) {
    e.preventDefault();
    var name = $('.nameZ').val();
    var phone = $('.phoneZ').val();
    var email = $('.emailZ').val();
    var workemail = $('.work_emailZ').val();
    var message = $('.messageZ').val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if (name == '') {
      swal({
        title: 'Поле Имя пустое',
        text: 'Заполните поле имя',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.nameZ').addClass('error');
      setTimeout(function () {
        $('.nameZ').removeClass('error');
      }, 3000);
    } else if (phone == '') {
      swal({
        title: 'Поле Телефон пустое',
        text: 'Заполните поле телефон',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.phoneZ').addClass('error');
      setTimeout(function () {
        $('.phoneZ').removeClass('error');
      }, 3000);
    } else if (email == '') {
      swal({
        title: 'Ошибка Email',
        text: 'Заполните поле Email',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.emailZ').addClass('error');
      setTimeout(function () {
        $('.emailZ').removeClass('error');
      }, 3000);
    } else if (!r.test(email)) {
      swal({
        title: 'Ошибка',
        text: 'Корректно заполните поле e-mail',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.emailZ').addClass('error');
      setTimeout(function () {
        $('.emailZ').removeClass('error');
      }, 3000);
    } else if (message == '') {
      swal({
        title: 'Пустое сообщение',
        text: 'Заполните текст сообщения',
        type: 'error',
        confirmButtonText: 'ок',
      });
      $('.messageZ').addClass('error');
      setTimeout(function () {
        $('.messageZ').removeClass('error');
      }, 3000);
    } else if (workemail != '') {
      swal({
        title: 'Ах ты жулик',
        text: 'Уберите робота от компьютера',
        type: 'error',
        confirmButtonText: 'ок',
      });
    } else {
      $.post(
        'mail.php',
        {
          name: name,
          phone: phone,
          email: email,
          message: message,
        },
        function () {
          swal({
            title: 'Спасибо',
            text: 'Ваше сообщение отправлено',
            type: 'success',
            confirmButtonText: 'ок',
          });
          $('.nameZ').val('').removeClass('error');
          $('.phoneZ').val('').removeClass('error');
          $('.emailZ').val('').removeClass('error');
          $('.messageZ').val('').removeClass('error');
          $('.js_containerZ')
            .addClass('bounceOutUp')
            .removeClass('bounceInDown')
            .fadeOut(600);
          $('.js__btn').removeClass('js_active');
          $('.overlay').fadeOut(600);
        }
      );
    }
  });
});

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if ($('.map__area').length) {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map('map', {
      center: [51.53110857238589, 46.04663549999995],
      zoom: 16,
      controls: ['zoomControl'],
    });

    myMap.behaviors.disable('scrollZoom');
    if (isMobile.any()) {
      myMap.behaviors.disable('drag');
    }

    var myGeoObjects = [];

    myGeoObjects[0] = new ymaps.Placemark(
      [51.53110857238589, 46.04663549999995],
      {
        balloonContentHeader:
          '<div class="baloon__top">Юристы</div>' +
          '<div class="baloon__description">По трудовому праву</div>',
        balloonContentBody:
          // '<div class="baloon__content"><img src="/btlassets/img/logo-1-534764.svg">' +
          '<a href="tel:+79053804464">+7 (905) 380 4464</a>',
        balloonContentFooter:
          '<div class="baloon__footer">Саратов, Октябрьская 44 оф. 4</div>',
        clusterCaption: '',
        hintContent: '<div class="baloon__top">Юристы по трудовому праву</div>',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/marker3.png',
        iconImageSize: [30, 48],
        iconImageOffset: [-15, -48],
      }
    );

    // myGeoObjects[1] = new ymaps.Placemark([51.551021850477284,46.01745698280331],{
    //     clusterCaption: 'Саратовремеонт',
    //     hintContent: 'Саратовремонт!',
    //     balloonContentBody: 'Саратовремонт, Саратов, Танкистов ул., 37'
    // },{
    //     iconLayout: 'default#image',
    //     iconImageHref: 'assets/img/marker.png',
    //     iconImageSize: [30, 48],
    //     iconImageOffset: [-15, -48]
    // });

    var clusterIcons = [
      {
        href: '/images/pointer.png',
        size: [31, 40],
        offset: [0, 0],
      },
    ];

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
      // Устанавливаем стандартный макет балуна кластера "Карусель".
      clusterBalloonContentLayout: 'cluster#balloonCarousel',
      // Устанавливаем собственный макет.
      //clusterBalloonItemContentLayout: customItemContentLayout,
      // Устанавливаем режим открытия балуна.
      // В данном примере балун никогда не будет открываться в режиме панели.
      clusterBalloonPanelMaxMapArea: 0,
      // Устанавливаем размеры макета контента балуна (в пикселях).
      clusterBalloonContentLayoutWidth: 300,
      clusterBalloonContentLayoutHeight: 200,
      // Устанавливаем максимальное количество элементов в нижней панели на одной странице
      clusterBalloonPagerSize: 5,
      // Настройка внешего вида нижней панели.
      // Режим marker рекомендуется использовать с небольшим количеством элементов.
      clusterBalloonPagerType: 'marker',
      // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
      // clusterBalloonCycling: false,
      // Можно отключить отображение меню навигации.
      // clusterBalloonPagerVisible: false
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
  }
}

//################ likeBlock

var share_url = 'https://balance64.ru/';
var share_title = 'Баланс64 - бухгалтерия для малого бизнеса!';
var share_desc = 'Бухгалтерское сопровождение малого бизнеса';
var share_image = '';
var share_text = 'Работа по договору';
var share_popup_width = 650;
var share_popup_height = 450;

// var share_links_container = document.getElementById('my_share');

var share_links_container = $('.likeBlock');

if (share_links_container != 'NULL') {
  if (
    typeof share_popup_width != 'number' ||
    typeof share_popup_height != 'number'
  ) {
    share_popup_width = 626;
    share_popup_height = 436;
  }

  share = {
    twitter: function (purl, ptitle) {
      url = 'http://twitter.com/share?';
      url += 'text=' + encodeURIComponent(ptitle);
      url += '&url=' + encodeURIComponent(purl);
      url += '&counturl=' + encodeURIComponent(purl);
      share.popup(url);
      return false;
    },
    gp: function (purl, ptitle, pimg, text) {
      url = 'https://plus.google.com/share?';
      url += 'url=' + encodeURIComponent(purl);
      share.popup(url);
      return false;
    },
    mail: function (purl, ptitle, pimg, text) {
      url = 'http://connect.mail.ru/share?';
      url += 'url=' + encodeURIComponent(purl);
      url += '&title=' + encodeURIComponent(ptitle);
      url += '&description=' + encodeURIComponent(text);
      url += '&imageurl=' + encodeURIComponent(pimg);
      share.popup(url);
      return false;
    },
    vk: function (purl, ptitle, pimg, text) {
      url = 'http://vkontakte.ru/share.php?';
      url += 'url=' + encodeURIComponent(purl);
      url += '&title=' + encodeURIComponent(ptitle);
      url += '&description=' + encodeURIComponent(text);
      url += '&image=' + encodeURIComponent(pimg);
      url += '&noparse=true';
      share.popup(url);
      return false;
    },
    ok: function (purl, text) {
      url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
      url += '&st.comments=' + encodeURIComponent(text);
      url += '&st._surl=' + encodeURIComponent(purl);
      share.popup(url);
      return false;
    },
    fb: function (purl, ptitle, pimg, text) {
      url = 'http://www.facebook.com/sharer.php?s=100';
      url += '&p[title]=' + encodeURIComponent(ptitle);
      url += '&p[summary]=' + encodeURIComponent(text);
      url += '&p[url]=' + encodeURIComponent(purl);
      url += '&p[images][0]=' + encodeURIComponent(pimg);
      share.popup(url);
      return false;
    },

    popup: function (url, width, height) {
      window.open(
        url,
        '',
        'toolbar=0,status=0,width=' +
          share_popup_width +
          ',height=' +
          share_popup_height
      );
      return false;
    },
  };
}
