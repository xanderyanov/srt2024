function siteResizeFunction() {
  prevWindowWidth = windowWidth;
  initVars();
  chapterOffset();
  closeMenu();

  if (prevWindowWidth <= 1280 && windowWidth > 1280) {
    $('.fmenuBox__toggler').removeClass('open');
    $('.fmenuBox__content').slideDown();
  }
  if (prevWindowWidth > 1280 && windowWidth <= 1280) {
    $('.fmenuBox__content').hide();
    console.log('надо скрыть');
  }
}

$(function () {
  $window.on('resize', siteResizeFunction);
});
