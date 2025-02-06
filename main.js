

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

