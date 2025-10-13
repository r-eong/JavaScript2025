// 령경 js 코드 

// 헤더 나비 - 메뉴 마우스 오버 모달

// // 버튼과 이미지, 모달 요소를 가져오기
// let sitemapBtn = document.querySelector('.sitemapBtn');
// let changeImg = sitemapBtn.querySelector('img');
// let modal = document.querySelector('.modal');

// // 현재 모달이 열려 있는지 닫혀 있는지 저장할 변수
// let mdOpen = false;

// // 버튼 클릭 시 실행
// sitemapBtn.addEventListener('click', function() {
//     if (mdOpen === false) {
//       // 모달 열기
//       modal.style.display = 'flex';
  
//       // 버튼 이미지를 닫기(X) 버튼 이미지로 변경
//       changeImg.src = 'img/btn-header-layer-close.png';
  
//       mdOpen = true;
//     } else {
//       // 모달 닫기
//       modal.style.display = 'none';
  
//       // 버튼 이미지를 다시 사이트맵 아이콘으로 변경
//       changeImg.src = 'img/ico-sitemap.png';
  
//       mdOpen = false;
//     }
//   });
    
// // 모달 배경 클릭 시 닫기
// modal.addEventListener('click', function(e) {
//     // 클릭한 곳이 modal(배경)일 때만 닫기
//     if (e.target === modal) {
//       modal.style.display = 'none';
//       changeImg.src = 'img/ico-sitemap.png';
//       mdOpen = false;
//     }
//   });
  
// // 검색 버튼 - 예메율 순, 메가박스 관객순 <class="searchBtn">
// let searchBtn = document.querySelector('.sitemapModal');
// let searchModal = document.querySelector('.searchModal');



// 요소 선택
let sitemapBtn = document.querySelector('.sitemapBtn');
let sitemapModal = document.querySelector('.modal');         // SITEMAP 모달
let searchBtn = document.querySelector('.searchBtn');
let searchModal = document.querySelector('.search_modal');   // 검색 모달

// SITEMAP 버튼 클릭
sitemapBtn.addEventListener('click', () => {
    let btnActive = sitemapBtn.classList.toggle('active');
    sitemapModal.classList.toggle('active', btnActive);

    // SITEMAP 열릴 때 검색 모달 닫기
    if (btnActive) {
        searchBtn.classList.remove('active');
        searchModal.classList.remove('active');
    }
});

// 검색 버튼 클릭
searchBtn.addEventListener('click', () => {
    let btnActive = searchBtn.classList.toggle('active');
    searchModal.classList.toggle('active', btnActive);

    // 검색 열릴 때 SITEMAP 모달 닫기
    if (btnActive) {
        sitemapBtn.classList.remove('active');
        sitemapModal.classList.remove('active');
    }
})
// 검색모달 안 - 예매율순, 메가박스 관객순
let rankTabs = document.querySelectorAll('.rank_tab');
let rankPanels = document.querySelectorAll('.rank_panel');

rankTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 모든 탭/패널 초기화
    rankTabs.forEach(t => t.classList.remove('active'));
    rankPanels.forEach(p => p.classList.remove('active'));

    // 현재 탭 활성화
    tab.classList.add('active');
    let targetId = tab.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  })
})

// 포스터 이미지 마우스오버
document.querySelectorAll('.rank_item').forEach(item => {
    // 현재 패널의 포스터 이미지
    let poster = item.querySelector('img');
    // 영화 제목 리스트
    let titles = item.querySelectorAll('li a');
    // 마지막 본 포스터 기억
    // let lastPoster = poster.src;

  // 영화 제목과 포스터 경로
  let posterImg = {
    '극장판 체인소 맨:레제편': 'img/rBGmxIIt5wLgjk1nEQr84Crh2Fvxhn4o_316.jpg',
    '보스': 'img/pA2JOhoGAwagQk8O7qmng8TfLEJqGH6k_316.jpg',
    '어쩔수가없다': 'img/FRNqKt4pbztmQXaLMu2ZIGP43ebJ9F8i_316.jpg',
    '투모로우바이투게더 브이알 콘서트:하트 어택': 'img/bmxMM15FzEffCjy5MJqNMGv1IjNKMIiT_316.jpg',
    '원 배틀 애프터 어나더': 'img/R33T0Ge5B0mf7snaCOz2JIfBpmPGke2c_316.jpg',
    'F1 더 무비': 'img/hWiZN7PP9G18jB18bS2BfyOTRDPpJH0m_316.jpg',
    '극장판 귀멸의 칼날:무한성편': 'img/GP7LkwFxSvP5uWfeV3MZLcoYGOSnXfbu_316.jpg',
    '좀비딸': 'img/GCFwvyXNbZTEogfoCW4TQNLiBNc5l6Hy_316.jpg',
    '진격의 거인 완결편 더 라스트 어택': 'img/t1aws8JYeDCKaCbRntA8oalmQ2UW33ua_316.jpg',
    '하얼빈': 'img/voFgSlrB9J2LLJqj7p6L6Zx03X3qFf6O_316.jpg'
  };

  // 영화 제목에  연결
  titles.forEach(title => {
    title.addEventListener('mouseover', () => {
        // 영화 제목 읽기
        let name = title.textContent.trim();
        for(let key in posterImg){
            if (name.includes(key)){
                // 이미지 변경
                poster.src = posterImg[key];
                // 마지막 본 포스터 저장
                // lastPoster = posterImg[key];
                break;
            }
        }
    });

    // 마우스를 떼도 마지막으로 이미지 그대로
    // title.addEventListener('mouseleave', () => {
    //   poster.src = lastPoster;
    // });
  });
});



// ---------------------------------------------------------------



// 섹션
let remain_person = 0;
// 인원수 선택 버튼
// 결과값 담을 변수
// let peopleCount = 0;
// 결과 출력할 위치
let people = document.querySelectorAll('.people');
// 버튼
// let minus = document.querySelectorAll('.minus');
// let plus = document.querySelectorAll('.plus');

// 오버레이
let overlay = document.querySelector('.overlay');
// 모달창
let p_modal = document.querySelector('.p_modal');

// -
let people_count= [0,0,0,0];
let md_p = document.querySelector('.p_modal .md_main .md_p');
let result = 0;



// 초기화 버튼
function resetBtn(resteIndex){
    remain_person = 0;
    select_count = 0;
    
    // 숫자 리셋 - span
    for(let i=0; i<people_count.length; i++){
        people[i].innerHTML = resteIndex;
        console.log('숫자배열', people[i])
    }

    // 좌석
    let seatArr =  document.querySelectorAll('.seat_class');
    // 좌석 리셋
    for(let j=0; j<seatArr.length; j++){
        seatArr[j].classList.remove('clicked');
    }
    
    let select_seat = document.querySelectorAll('.select_seat');

    for(let i = 0; i < select_seat.length; i++){
        //테이블 초기화
        select_seat[i].classList.remove('selected');
        select_seat[i].textContent = '-';
    }
}


function minusBtn(minusIndex){
    // 전체 취소
    if(people_count[minusIndex] > 0){
            md_p.innerHTML = `선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?`;
            p_modal.classList.add('active');
            overlay.classList.add('active');
            
            remain_person--;
            console.log('remainperson 감소: '+  remain_person);
            people_count[minusIndex]--;
            seatSet() 
            seatAddEvent()
    }
    people[minusIndex].innerHTML = people_count[minusIndex];

    }
function plusBtn(plusIndex){
    // 8명 선택
    if(people_count[plusIndex] <=7){
        people_count[plusIndex]++;
        remain_person++;
        seatSet()
        seatAddEvent()
    }else{
        console.log(`인원선택은 총 8명까지 가능합니다.`);
        md_p.innerHTML = `인원선택은 총 8명까지 가능합니다.`;
        p_modal.classList.add('active');
        overlay.classList.add('active');
    }
    people[plusIndex].innerHTML = people_count[plusIndex];

    // 경로 1이상 선택 안내창
    if(plusIndex === 2){
        console.log('플러스: '+plusIndex);
        console.log('플러스2: '+people[plusIndex].textContent);
        if(people_count[plusIndex] === 1){
            
            md_p.innerHTML = `◆ 경로 : 만 65세 이상(신분증) <br/><br/>
            경로요금은 만65세 이상 고객에게만 적용되며, 상영관 입장시 
            본인신분증을 제시해 주시기 바랍니다(*미지참시 입장 제한)
            <br/><br/>
            *경로선택 시 추가 할인이 제한될 수 있습니다`;
            
            console.log(md_p);
            p_modal.classList.add('active');
            overlay.classList.add('active');
        }
    }
    // 우대 1이상 선택 안내창
    if(plusIndex === 3){
        console.log('플러스: '+plusIndex);
        console.log('플러스2: '+people[plusIndex].textContent);
        if(people_count[plusIndex] === 1){
            
            md_p.innerHTML = `※만 65세이상 고객님께서는 [경로]발권 부탁드립니다
            (*지점별 상이)<br/><br/>
            ◆ 우대요금은 장애인 고객에게 적용되며, 상영관 입장 시 본인확인 
            증빙서류를 제시해 주시기 바랍니다.<br/>
            (미지참 시 입장 제한)<br/>
            <br/><br/>
            - 장애인: 복지카드<br/>
            - 국가유공자: 국가유공자증<br/>
            <br/><br/>
            위 항목 외 지점별 우대요금 추가적용 대상은 직원확인 후 발권이 가능합니다.<br/>
            *우대선택 시 추가 할인이 제한될 수 있습니다.<br/>
            *국가유공자증에 한하며, 국가유공자 유족증 등은 할인이 불가합니다.`;
            
            console.log(md_p);
            p_modal.classList.add('active');
            overlay.classList.add('active');
        }
    }
    
}
// 닫기 버튼
let offBtn = document.querySelector('.offBtn');
// 닫기
    offBtn.addEventListener('click',() =>{
        p_modal.classList.remove('active');
        overlay.classList.remove('active');
    })


// function plusBtn(){
//     if(people[2].textContent >= 1){
//         md_p.innerHTML = `◆ 경로 : 만 65세 이상(신분증) <br/><br/>
//         경로요금은 만65세 이상 고객에게만 적용되며, 상영관 입장시 
//         본인신분증을 제시해 주시기 바랍니다(*미지참시 입장 제한)
//         <br/><br/>
//         *경로선택 시 추가 할인이 제한될 수 있습니다`;
//         console.log(md_p);
//     }

// }

// 섹션 우측 시간 토글
// 기존 시간
let timeBtn01 = document.querySelector('#timeBtn01');
// on/off 할 선택 가능 시간
let timeBtn02 = document.querySelector('#timeBtn02');

// 토글
timeBtn01.addEventListener('click',() =>{
    timeBtn02.classList.toggle('active');
})







// ---------------------------------------------------------------





//상훈 js 코드

let seat = Array.from(Array(), ()=> new Array());
let maxseat_x = 10; let maxseat_y = 10;
let seat_selected = [];
let select_count = 0;



let adult_number = document.querySelector('.adult_number');
         
 
function even(remain_person){
          
           if(remain_person == 1){
               return true;
           }else if(remain_person > 1) return false;
                 
       
}
function seatDelete(){
        
}

        (function(){

            
        let number = Number(document.querySelector('.adult_number').value)

        let main_seat = document.querySelector('.seat_table');

        let seat_html = '';
        let res_count = 3;
        for(let i = 0; i < maxseat_x; i++){
            seat_html += '<tr>'
            let line_text = String.fromCharCode('A'.charCodeAt() + i)
            seat_html += `<td class="seat_alpha"> ${line_text} </td>`
            for(let j = 0; j< maxseat_y; j++){
                seat_html += `<td class='seat_class'>`;
                seat_html += `</td>`;
            }
            seat_html += '</tr>';
           
        }
         main_seat.innerHTML = seat_html;
        seatSet();
        seatAddEvent()
    })();

     function seatSet(){
        
        let seat_array =  document.querySelectorAll('.seat_class');
        let seat_html = '';
        let total=0;
        console.log('남은사람:  ' +remain_person);
        for(let i = 0; i < maxseat_x; i++){
            let line_text = String.fromCharCode('A'.charCodeAt() + i)
            for(let j = 0; j< maxseat_y; j++){
                if((even(remain_person) && total%2==1) && !(seat_array[total].classList.contains('clicked'))){
                 
                     seat_array[total].textContent = 'x';
                     seat_array[total].onclick = function(){};
                
                }else{
                seat_array[total].textContent = line_text+Number(j+1);

                }
                total++;
            }

           
        }
    }
    
    function seatAddEvent(){
        console.log('남은인원'+remain_person)
        console.log('예매인원' + select_count)
        let adult_number = document.querySelector('.adult_number').value;
        
        let seat_array =  document.querySelectorAll('.seat_class');
        let selected_table = document.querySelector('.selected_table');
        
        for(let i = 0; i<seat_array.length; i++){
                let next_array = i%2 == 0 ? seat_array[i+1] : seat_array[i-1]

        
            
            seat_array[i].addEventListener('mouseover', function mouserOver(){
                this.classList.add('selected');
                if(even(remain_person) == false) next_array.classList.add('selected'); 
                //코드 결함 : 실행은 잘되나 계속해서 이벤트가 더해짐 이벤트 리스너를 한번만 실행하게 수정해야 함.
            })
            
            seat_array[i].addEventListener('mouseout', function mouserOut(){
                this.classList.remove('selected');
                if(even(remain_person) == false)  next_array.classList.remove('selected');
               
            })
            seat_array[i].onclick = function(){
               
                if(this.classList.contains('clicked')){
                        this.classList.remove('clicked')
                  

                        seat_selected.splice(seat_selected.indexOf(this.textContent),1);
                    
                
                if(next_array.classList.contains('clicked')){
                        next_array.classList.remove('clicked');
                        seat_selected.splice(seat_selected.indexOf(next_array.textContent),1);
                        remain_person++;
                        select_count--;
                      }
                        remain_person++;
                        select_count--;
                        clickF();
                    
                    }
                      
                    
                 
                    
                    
                    
        
                else if(remain_person != 0){
            
                    this.classList.add('clicked')
                   
                    
                    seat_selected.push(this.textContent) 
                    
                    if(even(remain_person) == false){
                    next_array.classList.add('clicked')
                    seat_selected.push(next_array.textContent)  
                    select_count++;
                    remain_person--;
                    }
                    
                    select_count++;
                    remain_person--;
                    
                    clickF();
                   
                }
                // else alert('좌석 선택이 완료되었습니다')

              

                 
                
            }

        }
    }


    


        

//}


 let clickF = () => {
         
        let select_seat = document.querySelectorAll('.select_seat')

        for(let i = 0; i < select_seat.length; i++){
            //테이블 초기화
            if(select_seat[i].classList.contains(`selected`)){
            select_seat[i].classList.remove('selected');
            select_seat[i].textContent = '-';

            }else break;
       
        }

        for(let i = 0; i < select_count; i++){
            select_seat[i].classList.add('selected');
            select_seat[i].textContent = seat_selected[i];
           
    
            
        }
           console.log('시트' + seat_selected)
seatAddEvent()

}

function reset(){
    // let seat_array =  document.querySelectorAll('.seat_class');
    // let select_seat = document.querySelectorAll('.select_seat')

    //    console.log('선택좌석:' +  seat_selected)
    //    console.log('!!!!'+remain_person)
    //     seat_selected.pop();
    //     select_count--;
    //     console.log('선택좌석:' +  seat_selected)
    //    console.log('!!!!'+remain_person)
    
    // for(let i = 0; i < select_seat.length; i++){
    //         //테이블 초기화
    //         if(select_seat[i].classList.contains(`selected`)){
    //         select_seat[i].classList.remove('selected');
    //         select_seat[i].textContent = '-';

    //         }else break;
       
    //     }

}


  
    

//기본실행 

     // 함수 호출
    // adult_number.addEventListener('input',  reset) //매개변수