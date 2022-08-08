$(function () {
  $('#hb_show_nav').click(function (e) {
    $('.hb>span').toggleClass('hb_open');
    $('.nav_menu').toggleClass('right_hide');
    e.preventDefault();
  });
});
