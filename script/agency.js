(($, window, document, undefined)=>{


class Agency {
    init(){
        this.parallax(); //패럴럭스
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.section4();
        this.section5();
        this.section6();
        this.section7();
        this.section8();
        this.section9();
        this.section10();
        this.footer();
    }
    parallax(){  //패럴럭스
        let Obj = {
            init(){
                this.section2();
                this.section3();
                this.section4();
                this.section6();
                this.section7();
                this.section8();
                this.section9();
                this.section10();

            },
            section2(){
                const sec2Title = $('#section2 .title');
                const sec2Col = $('#section2 .col');
                let sec2TitleTop = $('#section2 .title').offset().top-$(window).height()-200;
                let sec2ColTop = $('#section2 .col').offset().top-$(window).height()-900; //css에서 내려간거 빼주기 
                
                // console.log(sec2TitleTop); 얼마나 내려갔는지 확인
        
                $(window).scroll(()=>{
                    //초기화 설정
                    if($(window).scrollTop() == 0 ){
                        sec2Title.removeClass('addParallax');
                        sec2Col.removeClass('addParallax');
        
                    }
                    //sec2타이틀
                    if($(window).scrollTop() > sec2TitleTop){
                        sec2Title.addClass('addParallax');
                    }
                    if($(window).scrollTop() > sec2ColTop){
                        sec2Col.addClass('addParallax');
                    }
                });
        
        // 전부 제이 쿼리로 효과준것 , css 애니메이션으로 구현함
                // const sec2Title = $('#section2 .title');
                // const sec2Content = $('#section2 .content');
                // const sec2ContentCol0 = $('#section2 .content .col1').eq(0).children('.gap');
                // const sec2ContentCol1 = $('#section2 .content .col2').eq(1).children('.gap');
                // const sec2ContentCol2 = $('#section2 .content .col3').eq(2).children('.gap');
                // const sec2TitleTop = $('#section2 .title').offset().top-$(window).height();
                // const sec2ContentTop = $('#section2 .content').offset().top-$(window).height();
                
                // let  t=0;
                // sec2ContentCol0.stop().animate({top:250},0);
                // sec2ContentCol1.stop().animate({top:250},0);
                // sec2ContentCol2.stop().animate({top:250},0);
          
                
                // $(window).scroll(function(){
                //     // 각 요소의 패럴럭스는 창이 노출이 될 때 구현
                //      if( $(window).scrollTop() == 0 ){
                //            sec2Title.removeClass('addParallax');
                //         //    t=false; 불린변수
                //            t=0; //스크롤 탑값일때 0으로 변하게
                //            sec2ContentCol0.stop().animate({top:650},0);
                //            sec2ContentCol1.stop().animate({top:650},0);
                //            sec2ContentCol2.stop().animate({top:650},0);
                //      }
         
                //      if( $(window).scrollTop() > sec2TitleTop ){
                //          sec2Title.addClass('addParallax');
                //      }
         
                //      if( $(window).scrollTop() > sec2ContentTop ){
                //     //    if(t==false){ 0 이 맞으면 1로 바껴라 
                //         //    t=true;                  
                //        if(t==0){ //초기값 0일때만 구현 1에서 딱 한번만 실행됨
                //            t=1;                  
                //            sec2ContentCol0.stop().animate({top:0}, 800);
                //            sec2ContentCol1.stop().delay(300).animate({top:0}, 1000);
                //            sec2ContentCol2.stop().delay(600).animate({top:0}, 1200);
                //        }
                //      }
                // });//를 css로 구현
            },
            section3(){
                const sec3Title = $('#section3 .title');
                const sec3Col = $('#section3 .col');
                let sec3TitleTop = $('#section3 .title').offset().top-$(window).height()-200;
                let sec3ColTop = $('#section3 .col').offset().top-$(window).height()-900; //css에서 내려간거 빼주기 
                
                // console.log(sec3TitleTop); 얼마나 내려갔는지 확인
        
                $(window).scroll(()=>{
                    //초기화
                    if($(window).scrollTop() == 0 ){
                        sec3Title.removeClass('addParallax');
                        sec3Col.removeClass('addParallax');
                    }
                    //섹션2 타이틀
                    if($(window).scrollTop() > sec3TitleTop ){
                        sec3Title.addClass('addParallax');
                    }
                    if($(window).scrollTop() > sec3ColTop ){
                        sec3Col.addClass('addParallax');
                    }
                });
            },
            section4(){
                const sec4Title    = $('#section4 .title');
                const sec4Row1Col  = $('#section4 .row1-col');
                const sec4Row2Col  = $('#section4 .row2-col');
                let sec4TitleTop   = $('#section4 .title').offset().top-$(window).height()-300;
                let sec4Row1ColTop = $('#section4 .row1-col').offset().top-$(window).height()-1000; //css에서 내려간거 빼주기 
                let sec4Row2ColTop = $('#section4 .row2-col').offset().top-$(window).height()-1000; //css에서 내려간거 빼주기 
                let t1=false;
                let t2=false;
                // console.log(sec4TitleTop); 얼마나 내려갔는지 확인
        
                $(window).scroll(()=>{
                    //초기화 설정
                    if($(window).scrollTop() == 0 ){
                        t1=false;
                        t2=false;
                        sec4Title.removeClass('addParallax');
                        
                        sec4Row1Col.removeClass('addParallax');
                        sec4Row1Col.removeClass('addGallery');
                        
                        sec4Row2Col.removeClass('addParallax');
                        sec4Row2Col.removeClass('addGallery');
                        //버틈 클릭한 상태에서 존재해야되서sec4Row2Col.removeClass('addGallery');
                        
                    }
                    //sec4타이틀
                    if($(window).scrollTop() > sec4TitleTop){
                        sec4Title.addClass('addParallax');
                    }
                    //갤러리 이미지 1행 4개 
                    if($(window).scrollTop() > sec4Row1ColTop){
                        if(t1==false){
                            t1=true;
                            sec4Row1Col.addClass('addParallax');

                        }
                    }
                    //갤러리 이미지 2행 4개 
                    if($(window).scrollTop() > sec4Row2ColTop){
                        if(t2==false){
                            t2=true;
                            sec4Row2Col.addClass('addParallax');
                        }
                    }
                   
                });
            },
            section6(){
               // 1. 변수설정
                // 변수.offset().top 맨 위에서 변수 위치의 탑값까지 간격(거리)
                const sec6 = $('#section6');
                let sec6Top = $('#section6').offset().top-$(window).height();
                // 2. 윈도우 스크롤 이벤트
                // 3. 패럴럭스 구현
                    $(window).scroll(()=>{
                        if($(window).scrollTop() == 0){
                            sec6.removeClass('addParallax');
                        }
                        if($(window).scrollTop() > sec6Top){
                            sec6.addClass('addParallax');
                        }
                    });
                },
            section7(){
               // 1. 변수설정 및 offset().top-$(window).height()설정
                const sec7 = $('#section7');
                let sec7Top = $('#section7').offset().top-$(window).height()+300;// 미리 되서 +300
                // 2. 윈도우 스크롤 이벤트 $(window).scroll()
                // 3. 패럴럭스 구현
                    $(window).scroll(()=>{
                        if($(window).scrollTop() == 0){
                            sec7.removeClass('addParallax');
                        }
                        if($(window).scrollTop() > sec7Top){
                            sec7.addClass('addParallax');
                        }
                    });
                },
                section8(){
                    const sec8 = $("#section8");
                    let sec8Top = $("#section8").offset().top-$(window).height();

                    $(window).scroll(()=>{
                        if($(window).scrollTop() == 0){
                            sec8.removeClass('addParallax');
                        }
                        if($(window).scrollTop() > sec8Top ){
                            sec8.addClass('addParallax');
                        }
                    });
                },
                section9(){
                    const sec9 = $("#section9");
                    let sec9Top = $("#section9").offset().top-$(window).height()+300;

                    $(window).scroll(()=>{
                        if($(window).scrollTop() == 0){
                            sec9.removeClass('addParallax');
                        }
                        if($(window).scrollTop() > sec9Top ){
                            sec9.addClass('addParallax');
                        }
                    });
                },
                section10(){
                    const sec10 = $("#section10");
                    let sec10Top = $("#section10").offset().top-$(window).height()+200;

                    $(window).scroll(()=>{
                        if($(window).scrollTop() == 0){
                            sec10.removeClass('addParallax');
                        }
                        if($(window).scrollTop() > sec10Top ){
                            sec10.addClass('addParallax');
                        }
                    });
                }
        }
        Obj.init();

    }
    header(){
        // 윈도우 스크롤 탑값이 0이면 72 기본 
        // - 추가된 클래스 모두 삭제
        // 헤더.removeClass('addH60');

        // 윈도우 스크롤 탑값이 0이 아니면 높이 60
        // - 추가 클래스 addH60
        // 헤더.addClass('addH60');

        // 스크롤 이벤트가 발생하면

        let newTop = $(window).scrollTop();
        let oldTop = newTop;
        let x = '';


        $(window).scroll(function(){
            if($(window).scrollTop()==0){
                $('#header').removeClass('addH60');
                $('#header').removeClass('addShow');
                $('#header').removeClass('addHide');
            }
            else{
                $('#header').addClass('addH60');

                // 위 아래 방향 알아내야 함
                // 변수는 3항 연산자 사용하는 방법

                newTop = $(window).scrollTop();

                x = oldTop - newTop > 0 ? 'UP' : 'DOWN';
                
                if(x=='UP'){
                    $('#header').addClass('addShow');
                    $('#header').removeClass('addHide');
                    
                }
                if(x=='DOWN'){
                    $('#header').addClass('addHide');
                    $('#header').removeClass('addShow');

                }

                oldTop = newTop;
            }
        });



        // console.log('header');
        //메인버튼 이벤트
        const mainBtn = $('.main-btn');
        const sub = $('.sub');
        const nav = $('#nav'); 
        const subBtn = $('.sub-btn'); 
        const subSub = $('.sub-sub'); 
        let t = 0;
        // ----버튼클릭이벤트 리사이즈 하기 처음----
        $('.sub').stop().slideUp(0);///로딩시 초기화 반응형 밖에 있어야 한번만 적용됨 

        //평상시에 클릭시 되게, 사이즈변경될때 적용되라
        resizefn(); //로딩시 한번 실행하게 해줘라

        function resizefn(){
            //로딩시 슬라이드 업 기본으로 
            //반응형 991이하일때는 
            if($(window).innerWidth()<=991){
                if(t==0){ //토글이 문제되서 창너비 991이하이면 1번만 진행해라
                    t=1;
                    // 모바일 메뉴 데스크탑 메인버튼 끄기(OFF)
                    mainBtn.off('mouseenter');
                                        
                    mainBtn.bind('click',function(){
                        $(this).next().stop().slideToggle(300);

                    });

                    }
                }
    
            // 나머지 일때는 이렇게
            else{
                t=0;
                //초기값 페이드 아웃
                $('.sub').stop().fadeOut(300);
                mainBtn.off('click');
                mainBtn.on({
                    mouseenter(e){ //es6
                        // console.log(e);
                        const $this = $(this);

                        sub.stop().fadeOut(0);//사라지는건 항상 위에
                        $this.next().stop().fadeIn(300);
                    },
                    focusin(e){ //es6
                        // console.log(e);
                        const $this = $(this);

                        sub.stop().fadeOut(0);//사라지는건 항상 위에
                        $this.next().stop().fadeIn(300);
                    }
                });

                nav.on({
                    mouseleave(){
                        sub.stop().fadeOut(300);
                        subSub.stop().fadeOut(300);
                        
                    }
                });

                //서브메뉴-서브 2->3
                subBtn.on({
                    mouseenter(){
                        const $this = $(this);

                        subSub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                    },
                    focusin(){
                        const $this = $(this);

                        subSub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                    }
                });

            }
        }

            $(window).resize(function(){
                resizefn(); //화면크기 바뀌면 적용되라
            });
        
            $('.mobile-btn').on({
                click: function(){
                    nav.slideToggle(300);// 모바일 버튼의 자식
                    $(this).children().toggleClass('addMobile');
                }
            });




    }
    section1(){
        // 슬라이드 관련된 모든 변수 등록
        const slideWrap = $('.slide-wrap');
        const slideView = $('.slide-view');
        const pageBtn = $('.page-btn');
        let winW = $(window).innerWidth();
        let cnt = 0;

        resizefn();
        function resizefn(){
            return  winW = $(window).innerWidth();
        }

        $(window).resize(function(){
            resizefn();
        });

        function mainSlide(){ //left: -100*cnt + '%' -100% 주고 싶을때
            slideWrap.stop().animate({left:-winW*cnt},600,'easeInOutExpo', function(){
                if(cnt>2){cnt=0}
                if(cnt<0){cnt=2}
                slideWrap.stop().animate({left:-winW*cnt},0);

            });
            pageEvent();
        }
        
            // 페이지 이벤트 함수
            function pageEvent(){
                // console.log(cnt);
                pageBtn.removeClass('currentPage');
                pageBtn.eq(cnt>2?0:cnt).addClass('currentPage'); //몊번째가 불들어 오냐
            }

            // 페이지 버튼 클릭 이벤트
            // pageBtn.eq(0).on({
            //     click:function(e){
            //         // alert();
            //         e.preventDefault();
            //         cnt = 0;
            //         mainSlide();
            //     }
            // });
            // pageBtn.eq(1).on({
            //     click:function(e){
            //         // alert();
            //         e.preventDefault();
            //         cnt = 1;
            //         mainSlide();
            //     }
            // });
            // pageBtn.eq(2).on({
            //     click:function(e){
            //         // alert();
            //         e.preventDefault();
            //         cnt = 2;
            //         mainSlide();
            //     }
            // });

            // pageBtn.each(function(idx){ //한번에 할수 있게 index 콘솔로 012 나오는지 확인 후 반복처리
            //     pageBtn.eq(idx).on({ 
            //         click:function(){
            //             cnt = idx;
            //             mainSlide();
            //         }
            //     });
            // });
            pageBtn.each(function(idx){ //한번에 할수 있게 index 콘솔로 012 나오는지 확인 후 반복처리
                const $this = $(this);
                
                $this.on({ // this로 안바꾸면 버튼 세개 전부 눌림 this => 버튼 세개 중에 어느것인지 선택 되게 해주는것 this 써주거나 pageBtn.eq(idx).on({~}) 이렇게 해주면 같은것 
                    click:function(){
                        cnt = idx;
                        mainSlide();
                    }
                });
            });

            
        function nextCount(){
            cnt++;
            mainSlide();
        }
        function prevCount(){
            cnt--;
            mainSlide();
        }
            setInterval(prevCount, 3000);

            //스와이프(좌우터치이벤트)
            //오른쪽에서 왼쪽으로 터치: 다음슬라이드 0 >
            //왼쪽에서 오른쪽으로 터치 : 이전 슬라이드 < 0

            let s = null; //터치시작
            let e = null; //터치 종료 좌표값
            let dS = null; //드래그 시작
            let dE = null; //드래그 끝
            let mD = null; //마우스 다운

            slideView.on({
                mousedown(event){
                    // console.log('터치시작: ',event.clientX);
                    s = event.clientX;
                    dS = event.clientX - slideWrap.offset().left-winW; // 이동 시작점 
                    mD = true;

                },
                mouseup(event){
                    // console.log('터치종료: ',event.clientY);
                    e = event.clientX;
                    mD = false;
                    if((s-e) > 0){ //시작좌표 - 종료좌표 > 0 보다 크면 다음 슬라이드
                        nextCount();
                    }
                    if((s-e) < 0){//시작좌표 - 종료좌표 < 0 보다 작으면 다음 슬라이드
                        prevCount();
                    }


                },
                mouseleave(event){ //여기 보안 꼭 마우스 떠났을때 마우스 위에 있을때랑 같게인식되어야 함 
                    if(mD!==true){return} //드래그 할때만 되게 
                    e = event.clientX;
                        mD = false;
                        if((s-e) > 0){ 
                            nextCount();
                        }
                        if((s-e) < 0){
                            prevCount();
                        }
                },
                mousemove(event){//드래그 앤 드롭(물체를 잡아 끌어 놓기를 구현)
                    // slideWrap.css({left:좌표값 드래그 시작지점과(down) 끝나는 지점(up)});//슬라이드에서 레프트 값만큼 이동해ㅝ라 
                    // slideWrap.css({left:드래그 끝값 - 드래그 시작값});
                   // 마우스 다운값 반드시 있어야 함 없으면 실행 불가 마우스가 클릭되어야 실행 가능함 

                    if(mD!==true){return} //마우스 다운이 아니면 (!mD랑 mD!==랑 같음)
                    dE = event.clientX; // 이동 끝점 dS
                    slideWrap.css({left:dE - dS});
                }

            });

            // 반응형 모바일 터치 이벤트 추가 02_25
 /*            slideView.on({
                touchstart(event){ //터치시작mousedown
                    // s = event.clientX; 이래처럼 됨 바닐라 자바스크립트
                    s = event.originalEvent.touches[0].clientX; //스타트랑 무브는 같음
                    dS = event.clientX - slideWrap.offset().left-winW;
                    mD = true;
                },
                touchend(event){ //터치종료mouseup
                    e = event.originalEvent.changedTouches[0].clientX; //끝날때는 체인지 써줘야함
                    mD = false;
                    if((s-e) > 0){ 
                        nextCount();
                    }
                    if((s-e) < 0){
                        prevCount();
                    }
                },
                touchmove(event){ //터치이동mousemove
                    if(mD!==true){return} 
                    dE = event.originalEvent.touches[0].clientX; 
                    slideWrap.css({left:dE - dS});
                }
            });
 */
        


    }
    section2(){


    }
    section3(){

    }
    section4(){
        // 갤러리 이미지 배치 부드럽게 하는 애니메이션
        // position : top left
        const galleryBtn = $('.gallery-btn');
        const galleryItem = $('.gallery-item');
        const gallery = $('.gallery');
        let galW = $(window).innerWidth()/4;
        let galH = galW*0.8125;   //높이/너비 
        let idx = 0; //첫번째 버튼은0번이다 8개 이미지 기본선택
        let col = 4; /* 기본은 4로 나눔 */
        let winW = $(window).innerWidth(); //창의 내부 넓이

        //버튼 클릭시 리사이즈(반응형)

        function resizefn(){
             winW = $(window).innerWidth();

            // 창 너비에 따라 4개 3개 2개 1개 이미지 배치
            if(winW >= 1200){ //1200이상~ col 칸수
                col=4;
            }
            else if(winW >= 992){ //992 1200미만 ~ 992 면 3개이미지 배치
                col=3;
            }
            else if(winW >= 761){ //992 1200미만 ~ 992 면 3개이미지 배치
                col=2;
            }
            else { //그 외에는 (761미만 ~0) 1개로 배치해라
                col=1;
            }
            



            galW = $(window).innerWidth()/col;//창 넓이 나누기 4 인데 반응형 처리 하면 n으로
            galH = galW*0.8125;
            galleryItem.animate({width:galW, height:galH},0);

            galleryItem.removeClass('addParallax');//패럴럭스 기능 살아있는거 삭제 css
            galleryItem.removeClass('addGallery'); //줌효과

            if(idx==0){ //8개 보이기 ALL
                gallery.css({height:galH*Math.ceil(8/col)});

                
                // 4칸인 경우
                if(col==4){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*3, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                    galleryItem.eq(6).show().animate({left:galW*2, top:galH*1},0);
                    galleryItem.eq(7).show().animate({left:galW*3, top:galH*1},0);
                    
                   
                }
                else if(col==3){// 3칸인 경우
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);

                    galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(4).show().animate({left:galW*1, top:galH*1},0);
                    galleryItem.eq(5).show().animate({left:galW*2, top:galH*1},0);
                    
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(7).show().animate({left:galW*1, top:galH*2},0);
                  

                }
                
                else if(col==2){// 2칸인 경우)
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(3).show().animate({left:galW*1, top:galH*1},0);
                    
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(5).show().animate({left:galW*1, top:galH*2},0);
                    
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                    galleryItem.eq(7).show().animate({left:galW*1, top:galH*3},0);
                    
                    
                }
               
                else{ // 1칸인 경우
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(3).show().animate({left:galW*0, top:galH*3},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*4},0);
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*5},0);
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*6},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*7},0);
                    
                  
                }
                
                    galleryItem.eq(4).removeClass('row1-col');
                    galleryItem.eq(5).removeClass('row1-col');
                    galleryItem.eq(6).removeClass('row1-col');
                    galleryItem.eq(7).removeClass('row1-col');
                    
                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(6).removeClass('row2-col');
                    galleryItem.eq(7).removeClass('row2-col');
                
            } //0번 버튼
            else if(idx==1){
                gallery.css({height:galH*Math.ceil(5/col)});//줄 수를 계산해줌 한번에 계산되어서 각각 줄 높이 잡아줄 필요없음
                //hide
                galleryItem.eq(0).hide().animate({left:galW*0, top:galH*0});
                galleryItem.eq(3).hide().animate({left:galW*3, top:galH*0});
                galleryItem.eq(5).hide().animate({left:galW*1, top:galH*1});
                
                
                
                if(col==4){
                    //show
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(6).show().animate({left:galW*3, top:galH*0},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                }

                else if(col==3){
                    //show
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(7).show().animate({left:galW*1, top:galH*1},0);
                }

                else if(col==2){
                    //show
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                }

                else{
                    //show
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*4},0);
                }

                galleryItem.eq(4).removeClass('row2-col');
                galleryItem.eq(6).removeClass('row2-col');
                galleryItem.eq(4).addClass('row1-col');
                galleryItem.eq(6).addClass('row1-col');
                
                galleryItem.eq(7).removeClass('row1-col');
                galleryItem.eq(7).addClass('row2-col');



            }
            else if(idx==2){
                gallery.css({height:galH*Math.ceil(6/col)});

                //hide
                galleryItem.eq(3).hide();
                galleryItem.eq(7).hide();
                
                
                if(col==4){
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*3, top:galH*0},0);
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);
                }
                else if(col==3){
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                    galleryItem.eq(6).show().animate({left:galW*2, top:galH*1},0);
                }
                else if(col==2){
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(4).show().animate({left:galW*1, top:galH*1},0);
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(6).show().animate({left:galW*1, top:galH*2},0);
                }
                else{
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*3},0);
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*4},0);
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*5},0);
                }

                galleryItem.eq(4).removeClass('row2-col');
                galleryItem.eq(4).addClass('row1-col');
                
                galleryItem.eq(5).removeClass('row1-col');
                galleryItem.eq(6).removeClass('row1-col');
                
                galleryItem.eq(5).removeClass('row2-col');
                galleryItem.eq(6).removeClass('row2-col');
            }
            else if(idx==3){
                gallery.css({height:galH*Math.ceil(4/col)});//한줄

                //hide
                galleryItem.eq(1).hide()
                galleryItem.eq(6).hide()
                galleryItem.eq(3).hide()
                galleryItem.eq(7).hide()
                
                
                if(col==4){
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(5).show().animate({left:galW*3, top:galH*0},0);
                }
                
                else if(col==3){
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                }
                
               else if(col==2){
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                }
                
                else{
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*3},0);
                }

                galleryItem.eq(4).removeClass('row2-col');
                galleryItem.eq(5).removeClass('row2-col');
                galleryItem.eq(4).addClass('row1-col');
                galleryItem.eq(5).addClass('row1-col');
            }
            else if(idx==4){
                gallery.css({height:galH*Math.ceil(5/col)});

                //hide
                galleryItem.eq(0).hide();
                galleryItem.eq(1).hide();
                galleryItem.eq(4).hide();
               
                if(col==4){
                     //show
                    galleryItem.eq(2).show().animate({width:galW, height:galH, left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({width:galW, height:galH, left:galW*1, top:galH*0},0);
                    galleryItem.eq(5).show().animate({width:galW, height:galH, left:galW*2, top:galH*0},0);
                    galleryItem.eq(6).show().animate({width:galW, height:galH, left:galW*3, top:galH*0},0);
                    galleryItem.eq(7).show().animate({width:galW, height:galH, left:galW*0, top:galH*1},0);
                
                }
                else if(col==3){
                     //show
                    galleryItem.eq(2).show().animate({width:galW, height:galH, left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({width:galW, height:galH, left:galW*1, top:galH*0},0);
                    galleryItem.eq(5).show().animate({width:galW, height:galH, left:galW*2, top:galH*0},0);
                    galleryItem.eq(6).show().animate({width:galW, height:galH, left:galW*0, top:galH*1},0);
                    galleryItem.eq(7).show().animate({width:galW, height:galH, left:galW*1, top:galH*1},0);
                
                }
                else if(col==2){
                     //show
                    galleryItem.eq(2).show().animate({width:galW, height:galH, left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({width:galW, height:galH, left:galW*1, top:galH*0},0);
                    galleryItem.eq(5).show().animate({width:galW, height:galH, left:galW*0, top:galH*1},0);
                    galleryItem.eq(6).show().animate({width:galW, height:galH, left:galW*1, top:galH*1},0);
                    galleryItem.eq(7).show().animate({width:galW, height:galH, left:galW*0, top:galH*2},0);
                
                }
               else{
                     //show
                    galleryItem.eq(2).show().animate({width:galW, height:galH, left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({width:galW, height:galH, left:galW*0, top:galH*1},0);
                    galleryItem.eq(5).show().animate({width:galW, height:galH, left:galW*0, top:galH*2},0);
                    galleryItem.eq(6).show().animate({width:galW, height:galH, left:galW*0, top:galH*3},0);
                    galleryItem.eq(7).show().animate({width:galW, height:galH, left:galW*0, top:galH*4},0);
                
                }

                galleryItem.eq(5).removeClass('row2-col');
                galleryItem.eq(6).removeClass('row2-col');
                galleryItem.eq(5).addClass('row1-col');
                galleryItem.eq(6).addClass('row1-col');
                
                galleryItem.eq(7).removeClass('row1-col');
                galleryItem.eq(7).addClass('row2-col');
            }
            else if(idx==5){
                galleryBtn.css({height:galH*Math.ceil(3/col)});

                //hide
                galleryItem.eq(1).hide();
                galleryItem.eq(2).hide();
                galleryItem.eq(3).hide();
                galleryItem.eq(5).hide();
                galleryItem.eq(6).hide();
                
                if(col==4){
                    //show row2 col삭제 row1-col
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(7).show().animate({left:galW*2, top:galH*0},0);
                
                }
                
                else if(col==3){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(7).show().animate({left:galW*2, top:galH*0},0);

                }
                
                else if(col==2){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                }
                
                else{
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                }
                
                
                
                //  원래꺼 지우고 새롭게 들어가게 
                galleryItem.eq(7).removeClass('row2-col');
                  galleryItem.eq(4).addClass('row1-col');
                  galleryItem.eq(7).addClass('row1-col');

            }/* end if */
            galleryItem.addClass('addGallery');

        } //리사이즈 끝
        
        $(window).resize(function(){
            resizefn();
        });
        resizefn();

        // 갤러리 버튼 클릭 시 해당 이미지 배치 
        // hide(), show() 메서드를 이용 배치한다
        // 버튼 6개 반복처리
        galleryBtn.each(function(index){
            $(this).on({
                click:function(e){
                    e.preventDefault();
                  idx = index;
                    resizefn(); //반응형 호출 반응형은 위에 

               
                }
            });
        });
                
    }
    section5(){
        // svg 객체 내부로 인식 
        const circle = $('.circle circle'); // .circle 로 하면 원 네개 전부 다 적용
        const number = $('.number');
        const per = [.90, .90, .70, .60]; //90%
        let perSize = []; 
        const second = 3;
        let size = [];
        let piece = [];
        let counter = [0,0,0,0]; //누적되는 변수 초기값 없으면 초기화 설정
        let setId = [];
        let sec5Top = $('#section5').offset().top-$(window).height()+300;
        let t = false;

        $(window).scroll(function(){
            if($(window).scrollTop() == 0){
                t = false;
            }
            if($(window).scrollTop() > sec5Top ){
               
                if(t == false){
                    t = true;
                    svgAni();
                }
            }
        });

        function svgAni(){
            counter = [0,0,0,0];
                
            //제이쿼리 반복사용 어떤 요소를 반복사용 하겠다 => each매서드
            $.each(circle, function(idx, obj){
            // console.log(idx, obj);
            // [idx] :4개의 배열이니까

            // 1. 전체 길이를 구한다
            size[idx] = obj.getTotalLength();
            // console.log(idx, '총길이는 : ', size[idx]);
            // size[0] 전체길이 : 461.0681457519531
            // size[1] 전체길이 : 461.0681457519531
            // size[2] 전체길이 : 461.0681457519531
            // size[3] 전체길이 : 461.0681457519531
            
            // 2. 각 요소의 전체 길이를 대입한다
            obj.style.strokeDasharray = size[idx];
            obj.style.strokeDashoffset = size[idx];
            
            // [0] obj.style.strokeDasharray = 461.0681457519531;
            // [0] obj.style.strokeDashoffset = 461.0681457519531;
           
            // [1] obj.style.strokeDasharray = 461.0681457519531;
            // [1] obj.style.strokeDashoffset = 461.0681457519531;
           
            // [2] obj.style.strokeDasharray = 461.0681457519531;
            // [2] obj.style.strokeDasharray = 461.0681457519531;
            
            // [3] obj.style.strokeDashoffset = 461.0681457519531;
            // [3] obj.style.strokeDashoffset = 461.0681457519531;



            // 3. 각 요소의 퍼센트 길이를 구한다
            // 퍼센트 길이 = 전체길이 + 퍼센트
            perSize[idx] = size[idx] * per[idx];

            // 1 perSize[0] 90%의 길이 : 461.0681457519531*0.9 = 424.11501
            // 2 perSize[1] 75%의 길이 : 461.0681457519531*0.75 = 353.429175
            // 3 perSize[2] 90%의 길이 : 461.0681457519531*0.9 = 424.11501
            // 4 perSize[3] 62%의 길이 : 461.0681457519531*0.62 = 292.168118
            
            // console.log(perSize[idx]);


            // 4. 토막 예를 들면 1초에 1마디(piece)의 길이를 구한다
            piece[idx] = (perSize[idx]/second)/100;
            // piece[0] =piece[0]/3; 141.37167
            // piece[1] =piece[1]/3; 117.809725
            // piece[2] =piece[2]/3; 141.37167
            // piece[3] =piece[3]/3; 97.38937267

            // 5. 카운트 타이머 구현 함수 1초 간격으로 누적진행 종료
            
            // 5-1. 메인 SVG 함수 :원그래프가 진행

            function mainSvg(){
                $(obj).css({strokeDashoffset: size[idx]-counter[idx]});
                number.eq(idx).text(Math.ceil(counter[idx]/size[idx]*100) + '%');
                
            }
            // Math.round(); 반올림 엑셀round();
            // Math.floor(); 자리내림수 엑셀 roundDown();
            // Math.cell(); 자리 올림수 엑셀 roundUp();

            // 5-2. 카운트 타이머 함수

            function countTimer(){
                counter[idx] += piece[idx];
                if(counter[idx] >= perSize[idx]){
                    //종료
                    clearInterval(setId[idx]);
            }
            else{
                mainSvg();
                }
            }


            setId[idx] = setInterval(countTimer, 10);

            // function countTimer(){
            //     counter[idx] += piece[idx];
            //     if(counter[idx] > perSize[idx]){
            //         //종료
            //         clearInterval(setId[idx]);
            //     }
            //     else{ //10%는 남아있는것
            //             // 애니메이션 구현
            //             $(obj).css({strokeDashoffset : size[idx]-counter[idx]});
            //         }
            //     }


        });
    }
}
    section6(){

    }
    section7(){

    }
    section8(){

    }
    section9(){

    }
    section10(){
        // 웹 서버에 정보 전송하기
        // AJAX
        const submitBtn = $('.submit-btn');
        const name = $('#name');
        const mail = $('#mail');


        // 버튼을 클릭하면 전송
        submitBtn.on({
            click:function(e){
               e.preventDefault(); // 누르면 이동하는 기능 중지php
                if(name.val() == ''){
                    alert('이름을 입력하세요!');
                    name.focus();
                    return false;
                }
                if(mail.val() == ''){
                    alert('메일을 입력하세요!');
                    mail.focus();
                    return false;
                }
                // ajax전송
                // $.ajax({});
                $.ajax({
                    url:'./response.php',
                    method:'POST',
                    data: {
                        name: name.val(),
                        mail: mail.val()
                    },
                    success: function(result){  //php에서 echo 를 이용 리턴값
  
                        $('#name').val('');
                        $('#mail').val('');
                        $('#name').focus();
                    },
                    error: function(err){
                        console.log(err);
                        alert('AJAX 전송 오류!');
                    }
                });

            }
        }); 

        // 목록 보기 버튼
        $('.list-btn').on({
            click:function(){
                // alert();
                $.ajax({
                    url:'./data/member_mail.json',
                    method:'GET', //가져올때 get 방식 보낼때 post 방식
                    success: function(result){

                        // 테이블에 목록 반복 출력
                            // console.log(idx, item.이름, item.이메일);
                            // 출력할 요소
                            let txt = '';
                            $.each(result, function(idx, item){
                                txt += "<tr>";
                                txt += "<td>" + (idx+1) + "</td>";
                                txt += "<td>" + item.이름 + "</td>";
                                txt += "<td>" + item.이메일 + "</td>";
                                txt += "</tr>";
                            });

                        $('.list-box  tbody').html( txt ); //목록

                        // result.map(function(){
                        //     console.log(a,b);
                        // 맵은 아이템 인덱스 each는 인덱스 아이템

                        // });
                    },
                    error: function(err){
                        console.log('AJAX오류',err);

                    }
                });
            }
        });
    }
    footer(){
        const goTop = $('.go-top');
            goTop.on({
                click:function(){
                    $('html,body').animate({scrollTop:0},600);
                }
            });
    }
}

const newAgency = new Agency();
newAgency.init();

})(jQuery, window, document);