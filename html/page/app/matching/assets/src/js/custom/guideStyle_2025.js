


document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        el.parentNode.classList.add('hljs');

        // 복사 버튼 생성
        let button = document.createElement("a");
        button.innerHTML = "📄";
        button.className = "copy-button";
        el.parentNode.appendChild(button);

        // 복사 기능 추가
        button.addEventListener("click", function () {
            let text = el.innerText;
            navigator.clipboard.writeText(text).then(function () {
                button.innerHTML = "Copied!";
                setTimeout(function () {
                    button.innerHTML = "📄";
                }, 2000);
            }, function (err) {
                console.error('복사 실패: ', err);
            });
        });
    });
});



$(function(){
    //사이드바 햄버거 버튼
    $('header .gs_header .m_menu').click(function(){
        $('.sidebar').addClass('active');
    });

    //닫기 버튼
    $('.sidebar .sidebar_header .close_x').click(function(){
       $('.sidebar').removeClass('active');
    });
});


$(function(){

    //모바일화면 사이드바 탭 dept1
    $('.tabs_dept_sidebar li a').each(function(){

        //초기화
        var thisTitle = $(this).attr('title');

        if($(this).hasClass('active')){

            $(this).closest('.sidebar_list').find('.tab_list.' + thisTitle + '').addClass('active');

        }

        //
        $(this).on('click', function(){

            $(this).closest('.tabs_dept_sidebar').find('a').removeClass('active');
            $(this).addClass('active');

            $(this).closest('.sidebar_list').find('.tab_list').removeClass('active');
            $(this).closest('.sidebar_list').find('.tab_list.' + thisTitle + '').addClass('active');

        });

    });

});





$(function () {

    //사이드바 메뉴
    $('.sidebar_list .tab_list[title="siteMap_app"] ul li a, .sidebar_list .tab_list[title="siteMap_app_iframe"] ul li a').each(function () {

        if ($(this).hasClass('active')) {

            $(this).parents('ul').prev('a').addClass('active');

        }



        $(this).on('click', function () {

            var $siblings = $(this).closest('ul').find('li a.active').not($(this));

            var $thisTitle = $(this).text();


            // 현재 활성화된 메뉴 닫기
            $siblings.removeClass('active').next('ul').not(':animated').hide();

            if ($(this).hasClass('active') == true) {

                //arrow클래스
                if($(this).hasClass('arrow')==true){

                    $(this).removeClass('active');

                }
                
                $(this).next('ul').not(':animated').hide();

            }

            else {
                $(this).addClass('active');
                $(this).next('ul').not(':animated').show();

                //arrow클래스아닌것
                if(!$(this).hasClass('arrow')==true){

                    //section 타이틀 변경
                    $('.section_title .titleNav_evt').text($thisTitle);

                }

                
            }


            //.arrow.active 버튼 이벤트
            if($(this).hasClass('arrow') && $(this).hasClass('active')){

                $thisTitle_li = $(this).next('ul').find('> li:first-child > a').text();

                //자식 첫번째 active
                //$(this).next('ul').find('> li:first-child a').addClass('active');
                $(this).next('ul').find('> li:first-child > a:not(.arrow)').addClass('active');
                $(this).next('ul').find('> li:first-child > a + ul > li:first-child > a').addClass('active');

                //section 타이틀 변경 
                $('.section_title .titleNav_evt').text($thisTitle_li);
                
            }

            //모바일화면에서 arrow클래스 제외 메뉴 클릭시 sidebar닫힘
            if(!$(this).hasClass('arrow')==true){

                $('.sidebar').removeClass('active');

            }



        });



    });



    //사이드바 메뉴 - 단순수동
    $('.tab_list[title="siteMap_guide"] ul li a').each(function () {

        $(this).on('click', function () {


            //var $siblings = $(this).closest('ul').find('li a.active').not($(this));

            var $thisTitle = $(this).text();


            // 현재 활성화된 메뉴 닫기
            //$siblings.removeClass('active').next('ul').not(':animated').hide();

            if ($(this).hasClass('active') == true) {

                //arrow클래스
                if($(this).hasClass('arrow')==true){

                    $(this).removeClass('active');

                }
                
                $(this).next('ul').not(':animated').hide();

            }

            else {
                $(this).addClass('active');
                $(this).next('ul').not(':animated').show();

                //arrow클래스아닌것
                if(!$(this).hasClass('arrow')==true){

                    //section 타이틀 변경
                    $('.section_title .titleNav_evt').text($thisTitle);

                }

                
            }


        });

    });


});






//사용안함
//테스트 dept표시
// $(document).ready(function() {
//     $('.sidebar_list .tab_list ul li a').click(function() {

//         let dept1 = "", dept2 = "", dept3 = "";
//         let $current = $(this); // 클릭한 요소
//         let text = $current.text().trim();

//         // 상위 li 탐색
//         let $parentLi = $current.closest("li");
//         if (!$parentLi.length) return;

//         // dept3 찾기
//         if ($parentLi.closest(".dept3").length) {
//             dept3 = text;
//             $parentLi = $parentLi.closest(".dept2 > li");
//         }

//         // dept2 찾기
//         if ($parentLi.length && $parentLi.closest(".dept2").length) {
//             dept2 = $parentLi.children("a").text().trim();
//             $parentLi = $parentLi.closest(".dept1 > li");
//         }

//         // dept1 찾기
//         if ($parentLi.length) {
//             dept1 = $parentLi.children("a").text().trim();
            
//         }

//         // arrow 버튼 클릭 시, 해당 .dept3의 첫 번째 항목 가져오기
//         if ($current.hasClass("arrow")) {
//             let $firstDept2 = $current.siblings(".dept2").find("> li:first-child a.arrow");
//             if ($firstDept2.length) {
//                 dept2 = $firstDept2.text().trim();
//             }

//             let $firstDept3 = $current.siblings(".dept3").find("> li:first-child a.arrow");
//             if ($firstDept3.length) {
//                 dept3 = $firstDept3.text().trim();
//             }
//             //dept3 = $('.titleNav_evt').text();
//         }

//         // 결과 출력
//         $(".breadcrumb_dept .dept1").text(dept1 ? `${dept1}` : "");
//         $(".breadcrumb_dept .dept2").text(dept2 ? `${dept2}` : "");
//         $(".breadcrumb_dept .dept3").text(dept3 ? `${dept3}` : "");
//     });
// });

// $(function(){


//     // var $thisTitle_dept1 = $('nav.sidebar .sidebar_list ul.dept1 > li > a.active').text();
//     // var $thisTitle_dept2 = $('nav.sidebar .sidebar_list ul.dept2 > li > a.active').text();
//     // var $thisTitle_dept3 = $('nav.sidebar .sidebar_list ul.dept3 > li > a.active').text();

//     // $('.breadcrumb_dept .dept1').text($thisTitle_dept1);
//     // $('.breadcrumb_dept .dept2').text($thisTitle_dept2);
//     // $('.breadcrumb_dept .dept3').text($thisTitle_dept3);
    

// });







$(function(){

    ////링크 주소와 함께 페이지 내 iframe주소도 변경////
    //arrow 클라스 href 속성 삭제
    $('.sidebar_list .tab_list[title="siteMap_app_iframe"] ul li a.arrow').each(function () {

        $(this).removeAttr('href');

    });

    //1. 주소링크 생성_sitemap_iframe 같이 - GUIDE_001_03_AppScreen.html
    $('.sidebar_list .tab_list[title="siteMap_app_iframe"] ul li a:not(.arrow)').each(function () {

        var thisHref = $(this).attr('href');

        $(this).attr('href', 'GUIDE_003_AppScreen.html');
        $(this).attr('onclick', 'sessionStorage.setItem("iframeTarget", "' + thisHref + '")');
    });

    //2. 주소링크 생성_sitemap_iframe 같이 - GUIDE_001_04_WebScreen.html
    $('.sidebar_list .tab_list[title="siteMap_web_iframe"] ul li a:not(.arrow)').each(function () {

        var thisHref = $(this).attr('href');

        $(this).attr('href', 'GUIDE_004_WebScreen.html');
        $(this).attr('onclick', 'sessionStorage.setItem("iframeTarget", "' + thisHref + '")');
    });




    ////돌봄앱페이지 - 페이지 내 iframe주소 변경 ////
    //주소링크 생성_sitemap
    $('.sidebar_list .tab_list[title="siteMap_app"] ul li a').each(function () {

        $(this).attr('href', '/html/page/app/matching/assets/src/pages/' + $(this).attr('href'));
        $(this).attr('target', 'if');

    });

    ////가이드페이지 - 페이지 내 iframe주소 변경 ////
    //주소링크 생성_sitemap
    // $('.sidebar_list .tab_list[title="siteMap_guide"] ul li a').each(function () {

    //     $(this).attr('href', '/html/page/app/matching/assets/src/pages/guide/' + $(this).attr('href'));
    //     $(this).attr('target', 'if');

    // });

});


$(function(){
    //사이트맵 버튼
    $('.evt_btn_sitemap').click(function(){
        $('.wrap').addClass('fullpage');
        $('nav.sidebar, section.gs_section').remove();
        $('.excel_sheet_area').show();
        
        //주소링크
        $('.excel_sheet_area iframe').attr('src', 'https://docs.google.com/spreadsheets/d/1b1pAw8G-L-S6eTbLzLhh4N_CpH-DDbNHQORZET-Gew0/edit?gid=107441872#gid=107441872');
    });


    //iframe 전체화면 토글
    $('.btn_pageFull').on('click', function() {
        
        if($(this).hasClass('active')==false){
            $(this).addClass('active');
            $('body').addClass('iframeFullpage');
        }
        else{
            $(this).removeClass('active');
            $('body').removeClass('iframeFullpage');
        }

    });
});


//테이블 표 컬러 추출
$(function(){

    //테이블 백그라운드컬러
    $('.guide_table .setBackgroundTD').each(function(){

        var $thisColor = $(this).text();

        $(this).next('td').find('.setColorBox').css({ 'background-color': $thisColor });

    });

    //테이블 선컬러
    $('.guide_table .setBorderTD').each(function(){

        var $thisColor = $(this).text();

        $(this).next('td').find('.setColorBox').css({ 'border': '0.5px solid' + $thisColor });

    });

});






//tabs
$(document).ready(function () {
    $('.header_menu').tabs();
});
$(document).ready(function () {
    $('.tabs_htmlcss').tabs();
});



//nav.sidebar 스크롤 밑에 있는 메뉴 사이드바 버튼 클릭하면 스크롤 올리기
$(function(){

    $(window).on('load', function () {
        $('nav.sidebar .sidebar_list ul.dept1 > li > a.active:not(.arrow)').each(function () {
            var winHeight = $(window).height();
            var offsetTop = $(this).offset().top;
            
            if(winHeight < offsetTop + 100){

                // 현재 스크롤 위치에서 해당 요소의 위치로 스크롤
                $('nav.sidebar').animate({
                    scrollTop: offsetTop - 100
                }, 300); // 300ms 동안 부드럽게 스크롤

            }

        });
    });

});
