


hljs.initHighlightingOnLoad();

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        el.parentNode.classList.add('hljs');

        // 복사 버튼 생성
        let button = document.createElement("a");
        button.innerHTML = ""; //📄
        button.className = "copy-button";
        el.parentNode.appendChild(button);

        // 복사 기능 추가
        button.addEventListener("click", function () {
            let text = el.innerText;
            navigator.clipboard.writeText(text).then(function () {
                button.innerHTML = "Copied!"; //Copied!
                button.classList.add('copy_active');

                setTimeout(function () {
                    button.innerHTML = "";
                    button.classList.remove('copy_active');
                }, 2000);
                
            }, function (err) {
                console.error('복사 실패: ', err);
            });
        });
    });
});





$(function(){

    $('pre.hljs').each(function(){


        $thisVal = $(this).find('code').prop('className');
        if($thisVal.includes('html')){
            langVal = 'HTML';
        }
        
        else if($thisVal.includes('scss')){
            langVal = 'SCSS';
        }
        
        else if($thisVal.includes('css')){
            langVal = 'CSS';
        }



        $(this).prepend('<div class="titleArea"><span>'+ langVal +'</span></div>');

        $(this).find('.copy-button').appendTo($(this).find('.titleArea'));
    });
   

});