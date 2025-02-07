

$(document).ready(function() {
  $('#nav-toggle').click(function() {
    $('#nav-menu').toggleClass('active'); // 메뉴 열고 닫기
  });

  // 메뉴가 열려 있을 때, 바깥을 클릭하면 닫히도록 설정
  $(document).click(function(event) {
    if (!$(event.target).closest('#nav-menu, #nav-toggle').length) {
      $('#nav-menu').removeClass('active');
    }
  });
});


//--------------------------------

$(document).ready(function() {
  $(window).scroll(function() {
    // 화면의 절반 높이 계산
    var scrollPos = $(window).scrollTop();
    var page2Offset = $('#page2').offset().top;
    var windowHeight = $(window).height();

    // #page2가 화면 높이의 절반 이상 올라왔을 때
    if (scrollPos + windowHeight / 2 > page2Offset) {
      $('.main-content').addClass('close');
    } else {
      $('.main-content').removeClass('close');
    }
  });
});
