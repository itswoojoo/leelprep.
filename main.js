
$(document).ready(function() {
  // 페이지 새로 고침 시 자동으로 page1으로 스크롤 이동
  $('html, body').animate({ scrollTop: $('#page1').offset().top }, 0);// 0은 즉시 이동을 의미
});

//------------------------


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

//-------------------------------



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

//---------------------------------------------


var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow', // Coverflow 효과 적용
  loop: true,  // 슬라이드가 끝나면 처음으로 돌아옴
  autoplay: {
    delay: 3000, // 3초마다 자동으로 넘어감
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 페이지네이션 클릭 가능
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  coverflowEffect: {
    rotate: 50, // 슬라이드의 회전 각도
    stretch: 0, // 슬라이드 간의 간격
    depth: 100, // 3D 효과의 깊이
    modifier: 1, // 효과의 강도
    slideShadows: true, // 그림자 효과 추가
  },
});

//----------------------------------

$(document).ready(function () {
  $(".close-btn").click(function (event) {
    event.preventDefault(); // a 태그 클릭 방지
    $(".mark").fadeOut(); // 부드럽게 사라지도록 설정
  });
});

// $(document).ready(function () {
//   $(".close-btn").click(function (event) {
//     event.preventDefault(); // a 태그 클릭 방지
//     $(".mark").toggleClass("small"); // 'small' 클래스를 추가/제거하여 크기 변경
//   });
// });

//------------------------------------------

$(document).ready(function(){
  $(".map").click(function(){
    $(this).toggleClass("zoomed");
  });
});


//----------------------------------------------
// $(document).ready(function() {
//   $('.down-icon').on('click', function() {
//     var target = '#page4'; // 이동할 페이지의 ID 또는 URL
    
//     var $buttonImg = $(this).find('img');

//     // 슬라이드 애니메이션
//     $buttonImg.animate({
//       translateY: '10px' // 화살표를 아래로 내려줌
//     }, 300, function() {
//       // 애니메이션 끝난 후 페이지 이동
//       $('html, body').animate({
//         scrollTop: $(target).offset().top // 페이지로 스크롤 이동
//       }, 500); // 0.5초 동안 부드럽게 이동
//     });
//   });
// });

$(document).ready(function() {
  // 'next-page' 클래스를 가진 모든 버튼에 대해 클릭 이벤트 처리
  $('.next-page').on('click', function() {
    var currentPage = $(this).closest('.page'); // 현재 페이지
    var nextPage = currentPage.next('.page');  // 다음 페이지

    if (nextPage.length === 0) {  // 마지막 페이지인 경우
      nextPage = $('.page').first(); // 처음 페이지로 돌아감
    }

    var $buttonImg = $(this).find('img');

    // 슬라이드 애니메이션
    $buttonImg.animate({
      translateY: '10px' // 화살표를 아래로 내려줌
    }, 300, function() {
      // 애니메이션 끝난 후 페이지로 스크롤 이동
      $('html, body').animate({
        scrollTop: nextPage.offset().top // 다음 페이지로 스크롤 이동
      }, 500); // 0.5초 동안 부드럽게 이동
    });
  });
});

