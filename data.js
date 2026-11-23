/* Family trip, December 11–19 2026. Edit itinerary and TODO items here. */
window.TRIP_DATA = {
  title: '가족 여행 · Atlanta / Chattanooga / Miami',
  dates: '2026.12.11 — 12.19',
  subtitle: '경관과 함께하는 9일 · 부모님 동반 · 성인 3인',
  baseHotel: 'Courtyard by Marriott Atlanta Executive Park/Emory',
  baseAddress: '1236 Executive Park Drive, Atlanta, GA 30329',
  note: '지도 연결선은 개략적인 이동 순서이며 실제 도로·항로를 표시하지 않습니다. 실시간 경로는 각 구간의 길찾기 버튼에서 확인하세요.',
  // Overview 날짜별 체류 도시 — 내용을 바꾸면 상단 진행 바에도 반영됩니다.
  overviewTimeline: [
    {date:'12.11', place:'Atlanta', detail:'공항 픽업 · Buckhead · Yeppa & Co.', color:'#71ddd1'},
    {date:'12.12', place:'Atlanta', detail:'North Georgia day trip', color:'#71ddd1'},
    {date:'12.13', place:'Chattanooga', detail:'Ruby Falls · Sunset Rock 일몰', color:'#8dbdf7'},
    {date:'12.14', place:'Chattanooga → Atlanta', detail:'Walnut Street Bridge · Riverfront', color:'#71ddd1'},
    {date:'12.15', place:'Miami Beach', detail:'F9 3442 · Airport Express 150 · Ocean Drive', color:'#f0b56e'},
    {date:'12.16', place:'Miami', detail:'07:00 일출 · Vizcaya · 17:00 Bayride 크루즈', color:'#f0b56e'},
    {date:'12.17', place:'Atlanta', detail:'Beachwalk · Airport Express 150 · F9 3059', color:'#71ddd1'},
    {date:'12.18', place:'Atlanta', detail:'Atlanta sightseeing', color:'#71ddd1'},
    {date:'12.19', place:'Atlanta', detail:'ATL 공항 출국', color:'#71ddd1'}
  ],
  todos: [
    {label:'Chattanooga DoubleTree 예약 확정 · 12/13 16:00 체크인 / 12/14 11:00 체크아웃', group:'숙소', done:true},
    {label:'Miami Beach Airbnb 12/15~17 (2박) 예약 완료 · 23번가 Pine Tree Drive 인근', group:'숙소', done:true},
    {label:'Atlanta Courtyard 3건 예약 확정 · 12/11–13, 12/14–15, 12/17–19 (총 5박)', group:'숙소', done:true},
    {label:'Atlanta Courtyard 분할 숙박 전후 체크아웃·재체크인 및 짐 보관 확인', group:'숙소', done:false},
    {label:'Frontier 왕복 항공편 예약 확정 · 12/15 F9 3442 / 12/17 F9 3059', group:'교통', done:true},
    {label:'Frontier 개인 소지품 외 기내수하물·위탁수하물 허용량 및 추가 구매 확인', group:'교통', done:false},
    {label:'Atlanta 호텔 ↔ ATL 공항 Uber 이동 계획', group:'교통', done:false},
    {label:'MIA 공항 ↔ Miami Beach 150번 Airport Express 버스 시간표·정류장 최종 확인', group:'교통', done:false},
    {label:'Montaluce Winery & Restaurant 식사 예약', group:'예약', done:false},
    {label:'Ruby Falls 12/13 오후 14:15 전후 Cave Walk 예약 (Sunset Rock 일몰 역산)', group:'예약', done:false},
    {label:'Sunset Rock 주차 및 일몰(17:30 전후) 확인', group:'확인', done:false},
    {label:'12/16 17:00 Bayride Tours 크루즈 3인 예약 확정 · 16:30 선착장 체크인 · 12/13 결제 처리 및 모바일 티켓 확인', group:'예약', done:true},
    {label:'Bayride 크루즈 $60 자동 결제(12/13 예정) 후 모바일 티켓 발급 확인', group:'확인', done:false},
    {label:'Miami Beach Airbnb 조기 체크인·짐 보관 및 12/17 체크아웃 시간 확인', group:'확인', done:false},
    {label:'12/19 출국편·공항 도착 목표시간 확인', group:'확인', done:false}
  ],
  days: [
    {
      date:'12.11', weekday:'금요일', area:'ATLANTA', headline:'환영하는 첫날', caption:'공항 픽업부터 Buckhead의 저녁까지', accent:'#e4bd84',
      hero:'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&w=1800&q=85',
      highlight:'첫날은 컨디션에 맞게 · 지정 식당 Yeppa & Co. 방문', overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory (예약 확정)',
      stops:[
        {name:'Hartsfield–Jackson Atlanta International Airport', short:'ATL 공항',lat:33.6407,lng:-84.4277,type:'공항',desc:'부모님 도착 · 내 차로 픽업',image:'',url:'https://www.atl.com/'},
        {name:'Cortland Oleander',short:'집 방문',lat:33.8340,lng:-84.3260,type:'방문',desc:'집에 잠시 들러 짐과 동선을 정리',image:'',url:'https://cortland.com/apartments/cortland-oleander/'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'Atlanta Courtyard · 12/11~13 (2박) 예약 확정 · 1236 Executive Park Drive',image:'',url:'https://www.marriott.com/en-us/hotels/atlep-courtyard-atlanta-executive-park-emory/overview/'},
        {name:'Buckhead Village',short:'Buckhead',lat:33.8396,lng:-84.3791,type:'관광',desc:'거리·상점·카페 가볍게 둘러보기',image:'',url:'https://www.buckheadvillagedistrict.com/'},
        {name:'Yeppa & Co. (Buckhead)',short:'Yeppa & Co.',lat:33.8397,lng:-84.3786,type:'식사',desc:'이탈리안 레스토랑 · 306 Buckhead Ave NE, Atlanta, GA 30305 · 식사 예약 권장',image:'',url:'https://www.yhospitality.com/yeppa-buckhead'},
        {name:'Costco Wholesale (Atlanta area)',short:'Costco',lat:33.8730,lng:-84.3775,type:'쇼핑',desc:'장보기 · 도착시간에 따라 순서 조정',image:'',url:'https://www.costco.com/warehouse-locations'}
      ],modes:['car','car','car','walk','car']
    },
    {
      date:'12.12',weekday:'토요일',area:'NORTH GEORGIA',headline:'포도밭과 산자락',caption:'Montaluce · Dahlonega · Shopping',accent:'#bad7bc',
      hero:'https://www.exploregeorgia.org/sites/default/files/styles/listing_slideshow/public/listing_images/profile/2528/levignefromthevine.jpg?itok=YIOoYNdR',
      highlight:'경관·식사·쇼핑 · 세 곳 모두 직관적으로 즐기기',overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory (예약 확정)',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'호텔 출발',lat:33.8356,lng:-84.3251,type:'호텔',desc:'12/11~13 예약 확정 · 12/13 체크아웃 예정, Chattanooga로 이동 전 준비'},
        {name:'Montaluce Winery & Restaurant',short:'Montaluce',lat:34.5855,lng:-83.9556,type:'식사',desc:'포도밭 전망과 점심식사 · 예약 권장',image:'https://www.exploregeorgia.org/sites/default/files/styles/listing_slideshow/public/listing_images/profile/2528/levignefromthevine.jpg?itok=YIOoYNdR',url:'https://www.montaluce.com/'},
        {name:'Dahlonega Downtown',short:'Dahlonega',lat:34.5329,lng:-83.9849,type:'관광',desc:'작은 마을 광장과 카페 둘러보기'},
        {name:'North Georgia Premium Outlets',short:'Outlets',lat:34.3548,lng:-84.0444,type:'쇼핑',desc:'Georgia Shopping mall로 임시 반영 · 쇼핑'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'호텔 귀가',lat:33.8356,lng:-84.3251,type:'호텔',desc:'12/11~13 (2박) 예약 확정 · 휴식 후 다음 날 Chattanooga로 이동'}
      ],modes:['car','car','car','car']
    },
    {
      date:'12.13',weekday:'일요일',area:'CHATTANOOGA',headline:'동굴 폭포와 산 위의 일몰',caption:'Downtown 점심 · Ruby Falls · Sunset Rock 일몰',accent:'#93cdd3',
      hero:'https://www.rubyfalls.com/wp-content/uploads/2024/02/Waterfall_AGP_Teal-Pink_1080x1080.jpg',
      highlight:'Ruby Falls 14:15 전후 예약 목표(미예약) · Sunset Rock 16:45 전망대 도착, 17:30 전후 일몰',
      overnight:'Chattanooga · DoubleTree by Hilton Chattanooga Downtown (예약 확정)',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'09:00 · Atlanta 출발',lat:33.8356,lng:-84.3251,type:'출발',desc:'12/11~13 호텔 체크아웃 후 자가용 출발 · 교통체증 고려'},
        {name:'Chattanooga Downtown',short:'11:30~12:45 · 점심',lat:35.0540,lng:-85.3097,type:'식사',desc:'Chattanooga Downtown 점심 식사 및 휴식 · 식당 미정'},
        {name:'DoubleTree by Hilton Chattanooga Downtown',short:'13:00 · 호텔 짐 보관',mapQuery:'407 Chestnut Street, Chattanooga, TN 37402',type:'호텔',desc:'사전 짐 보관 요청(호텔 확인 필요) · 공식 체크인 16:00 · 1박 예약 확정',url:'https://www.hilton.com/en/hotels/chachdt-doubletree-chattanooga-downtown/'},
        {name:'Ruby Falls',short:'14:15 · Ruby Falls',lat:35.0198,lng:-85.3408,type:'액티비티',desc:'14:15 전후 Cave Walk 예약 목표(아직 미예약) · 약 80분 투어 · Sunset Rock 일몰 일정 역산',image:'https://www.rubyfalls.com/wp-content/uploads/2024/02/Waterfall_AGP_Teal-Pink_1080x1080.jpg',url:'https://www.rubyfalls.com/ruby-falls-tickets/'},
        {name:'Sunset Rock',short:'16:45 · Sunset Rock',mapQuery:'Sunset Rock, 405 W Brow Rd, Lookout Mountain, TN',type:'전망',desc:'16:20 전후 주차·도보 시작 · 16:45 전망대 도착 목표 · 17:30 전후 일몰 · 주차 제한, 계단·절벽 주의'},
        {name:'DoubleTree by Hilton Chattanooga Downtown',short:'18:00 이후 · 호텔',mapQuery:'407 Chestnut Street, Chattanooga, TN 37402',type:'호텔',desc:'일몰 후 호텔 체크인과 저녁 · 다음 날 11:00 체크아웃',url:'https://www.hilton.com/en/hotels/chachdt-doubletree-chattanooga-downtown/'}
      ],modes:['car','car','car','car','car']
    },
    {
      date:'12.14',weekday:'월요일',area:'CHATTANOOGA → ATLANTA',headline:'강변에서 여유롭게',caption:'Walnut Street Bridge · Tennessee Riverfront · Atlanta 귀환',accent:'#aac0e5',
      hero:'https://koa.com/blog/images/GettyImages-1032356740.jpg?preset=blogPhoto',
      highlight:'Chattanooga에서 여유로운 오전 · Courtyard 12/14 1박 예약 확정',
      overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory (예약 확정)',
      stops:[
        {name:'DoubleTree by Hilton Chattanooga Downtown',short:'11:00 이전 · 호텔 체크아웃',mapQuery:'407 Chestnut Street, Chattanooga, TN 37402',type:'호텔',desc:'11:00까지 체크아웃 · 12/13~14 1박 예약 확정',url:'https://www.hilton.com/en/hotels/chachdt-doubletree-chattanooga-downtown/'},
        {name:'Walnut Street Bridge',short:'11:00~12:00 · 강변 산책',lat:35.0582,lng:-85.3073,type:'관광',desc:'Walnut Street Bridge 및 Tennessee River 주변 산책',image:'https://koa.com/blog/images/GettyImages-1032356740.jpg?preset=blogPhoto'},
        {name:'Chattanooga Riverfront',short:'12:00~13:30 · 점심',mapQuery:'Chattanooga Riverfront, Chattanooga, TN',type:'식사',desc:'강변 근처 점심식사와 휴식 · 식당 미정'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'오후 · Atlanta 복귀',lat:33.8356,lng:-84.3251,type:'호텔',desc:'점심 후 Chattanooga에서 출발 · Courtyard 12/14~15 (1박) 예약 확정 · 다음 날 Miami 항공편 준비'}
      ],modes:['car','walk','car']
    },
    {
      date:'12.15',weekday:'화요일',area:'ATLANTA → MIAMI BEACH',headline:'바다와 Art Deco의 첫날',caption:'Airport Express 150 · Beachwalk · Lincoln Road · Ocean Drive',accent:'#77d7cf',
      hero:'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt89aa53706d11e51d/6724b026d2da22b6a6bc2a99/Miami_South_Beach_Art_Deco_Welcome_Center_by_D_Ramey_Logan-LOWRES.jpg?auto=webp&crop=smart&disable=upscale&fit=crop&quality=60',
      highlight:'F9 3442 · MIA 12:42 도착 · 무료 MIA Mover → 150번 Airport Express ($2.25/인) · Airbnb 2박 예약',
      overnight:'Miami Beach · Pine Tree Drive 23번가 부근 Airbnb (12/15–17 2박 예약)',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔 체크아웃',lat:33.8356,lng:-84.3251,type:'호텔',desc:'12/14~15 (1박) 예약 확정 · Uber로 ATL 공항 이동'},
        {name:'Hartsfield–Jackson Atlanta International Airport',short:'10:35 · ATL 출발',lat:33.6407,lng:-84.4277,type:'공항',desc:'Frontier F9 3442 · 오전 10:35 출발'},
        {name:'Miami International Airport',short:'12:42 · MIA 도착',lat:25.7954,lng:-80.2900,type:'공항',desc:'Frontier F9 3442 · 오후 12:42 도착 · 수하물 수령 후 무료 MIA Mover'},
        {name:'Miami Airport Station',short:'13:30 전후 · 150번 탑승',mapQuery:'Miami International Airport Station, Miami, FL',type:'교통',desc:'무료 MIA Mover로 이동 → Route 150 Miami Beach Airport Express 버스 탑승 · 1인 편도 $2.25 · 실제 출발 시각 확인',url:'https://www.miamidade.gov/global/transportation/metrobus-routes-serving-mia.page'},
        {name:'Collins Avenue & 22nd Street',short:'14:30 전후 · 하차',mapQuery:'Collins Avenue and 22nd Street, Miami Beach, FL',type:'교통',desc:'150번 버스 하차 후 숙소 부근까지 도보 약 10~15분(짐·교통에 따라 변동)'},
        {name:'Miami Beach Airbnb · Pine Tree Drive area',short:'Airbnb · 짐 맡기기',mapQuery:'Pine Tree Drive and 23rd Street, Miami Beach, FL',type:'숙소',desc:'12/15~17 2박 Airbnb 예약 · 조기 체크인 및 짐 보관은 호스트에게 확인 · 공개 지도에는 인근 교차로만 표시'},
        {name:'Miami Beach Beachwalk',short:'15:30 · 해변 산책',mapQuery:'23rd Street Beachwalk, Miami Beach, FL',type:'해변',desc:'숙소 근처 Beachwalk 산책 · 해변과 야자수 경관'},
        {name:'Lincoln Road',short:'16:30 · Lincoln Road',mapQuery:'Lincoln Road Mall, Miami Beach, FL',type:'관광',desc:'보행자 쇼핑 거리 · 카페와 상점'},
        {name:'Ocean Drive & Lummus Park',short:'17:30 · Ocean Drive',lat:25.7823,lng:-80.1300,type:'관광',desc:'Art Deco 거리 야경 · Ocean Drive와 Lummus Park 산책 및 저녁',image:'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt89aa53706d11e51d/6724b026d2da22b6a6bc2a99/Miami_South_Beach_Art_Deco_Welcome_Center_by_D_Ramey_Logan-LOWRES.jpg?auto=webp&crop=smart&disable=upscale&fit=crop&quality=60'},
        {name:'Miami Beach Airbnb · Pine Tree Drive area',short:'저녁 · 숙소 귀환',mapQuery:'Pine Tree Drive and 23rd Street, Miami Beach, FL',type:'숙소',desc:'도보 또는 짧은 차량 이동으로 귀환 · 2박 예약'}
      ],modes:['uber','flight','train','bus','walk','walk','walk','walk','walk']
    },
    {
      date:'12.16',weekday:'수요일',area:'MIAMI BEACH → MIAMI',headline:'일출과 Biscayne Bay',caption:'해변 일출 · Vizcaya · Bayside · Millionaire’s Row 크루즈',accent:'#7cddde',
      hero:'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D400%2Cheight%3D265%2Cdpr%3D2/tour_img/70c1dd2a481926607008ae24d87f72d3d0e64dec8c1ea885321ef108504bb969.png',
      highlight:'06:40 해변 도착 → 07:00 전후 일출 · Bayride Tours 크루즈 17:00 예약 확정(3인) · 16:30 선착장 체크인',
      overnight:'Miami Beach · Pine Tree Drive 23번가 부근 Airbnb (12/15–17 2박 예약)',
      stops:[
        {name:'Miami Beach Airbnb · Pine Tree Drive area',short:'06:25 · 숙소 출발',mapQuery:'Pine Tree Drive and 23rd Street, Miami Beach, FL',type:'숙소',desc:'아침 일출을 위해 도보 출발 · 날씨 확인'},
        {name:'Miami Beach Beachwalk / sunrise',short:'06:40~07:15 · 일출',mapQuery:'23rd Street Beachwalk, Miami Beach, FL',type:'일출',desc:'12/16 일출 약 07:00 EST · 수평선과 해변 감상 · 날씨에 따라 변동'},
        {name:'Miami Beach Airbnb · Pine Tree Drive area',short:'07:30~09:00 · 아침',mapQuery:'Pine Tree Drive and 23rd Street, Miami Beach, FL',type:'숙소',desc:'아침 식사 및 휴식 후 본토 관광으로 이동'},
        {name:'Vizcaya Museum & Gardens',short:'09:45~12:00 · Vizcaya',lat:25.7445,lng:-80.2105,type:'정원',desc:'수요일 09:30~16:30 운영 · 정원과 해안 저택 산책 · 입장권 확인',image:'https://assets.simpleviewinc.com/sv-alhi/image/upload/c_fill%2Ch_640%2Cq_75%2Cw_1200/v1/cms_resources/clients/alhitx/vizcaya_video_home_1_copy_1400x747_9920e885-fd9a-4e8d-b0ab-383e1f209bd0.jpg',url:'https://vizcaya.org/visit/'},
        {name:'Downtown Miami',short:'12:00~13:30 · 점심',mapQuery:'Downtown Miami, FL',type:'식사',desc:'Vizcaya에서 Downtown으로 이동 후 점심 · 식당 미정'},
        {name:'Bayfront Park',short:'14:00~15:00 · 산책',mapQuery:'Bayfront Park, Miami, FL',type:'산책',desc:'점심 후 공원과 Biscayne Bay 경관 감상 · 선택 일정'},
        {name:'Bayside Marketplace',short:'15:00~16:15 · Bayside',lat:25.7785,lng:-80.1869,type:'관광',desc:'Bayside Marketplace 산책 및 휴식 · 16:30까지 Bayride Tours 체크인 매표소 도착'},
        {name:'Bayride Tours · Pier 5 ticket kiosk',short:'16:30 · 선착장 체크인',mapQuery:'Bayride Tours Pier 5 behind Victorias Secret, Bayside Marketplace, 401 Biscayne Boulevard, Miami, FL 33132',type:'체크인',desc:'예약 확정 · 401 Biscayne Blvd, Bayside Marketplace 북쪽 마리나 · Mojito Bar에서 바다 방향 왼쪽 → 두 번째 계단에서 오른쪽 → Victoria’s Secret 뒤편, Pier 5 주차장 인근 매표소에서 체크인'},
        {name:'Bayride Tours · Biscayne Bay Cruise',short:'17:00~18:30 · 일몰 크루즈',mapQuery:'Bayride Tours Pier 5 Bayside Marketplace, 401 Biscayne Boulevard, Miami, FL 33132',type:'보트',desc:'GetYourGuide 예약 확정 · 12/16 17:00 출항 · 90분 · 성인 3명 · 총 $60(12/13 자동 결제 예정) · 16:30까지 매표소 체크인 · 동일 장소로 복귀',url:'https://www.getyourguide.com/miami-l176/biscayne-bay-millionaires-homes-sightseeing-cruise/'},
        {name:'Miami Beach Airbnb · Pine Tree Drive area',short:'저녁 · 숙소 귀환',mapQuery:'Pine Tree Drive and 23rd Street, Miami Beach, FL',type:'숙소',desc:'Uber로 Miami Beach 귀환'}
      ],modes:['walk','walk','uber','uber','walk','walk','walk','boat','uber']
    },
    {
      date:'12.17',weekday:'목요일',area:'MIAMI BEACH → ATLANTA',headline:'해변과 작별하고 귀환',caption:'아침 Beachwalk · Airport Express 150 · Frontier 항공편',accent:'#99d3f1',
      hero:'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt89aa53706d11e51d/6724b026d2da22b6a6bc2a99/Miami_South_Beach_Art_Deco_Welcome_Center_by_D_Ramey_Logan-LOWRES.jpg?auto=webp&crop=smart&disable=upscale&fit=crop&quality=60',
      highlight:'F9 3059 · MIA 14:31 출발 → ATL 16:48 · 10:30~11:00 숙소 출발 목표 · 버스 지연 시 Uber 대안',
      overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory (예약 확정)',
      stops:[
        {name:'Miami Beach Airbnb · Pine Tree Drive area',short:'08:00 · 아침',mapQuery:'Pine Tree Drive and 23rd Street, Miami Beach, FL',type:'숙소',desc:'아침 식사 후 09:00~10:00 Beachwalk 산책 · Airbnb 체크아웃 시각 확인'},
        {name:'Miami Beach Beachwalk',short:'09:00~10:00 · 산책',mapQuery:'23rd Street Beachwalk, Miami Beach, FL',type:'해변',desc:'해변 산책 후 숙소로 돌아가 짐 정리'},
        {name:'Miami Beach Airbnb · Pine Tree Drive area',short:'10:30~11:00 · 체크아웃',mapQuery:'Pine Tree Drive and 23rd Street, Miami Beach, FL',type:'숙소',desc:'Airbnb 체크아웃 및 공항행 150번 버스 이용 · 실제 체크아웃 시간 호스트 확인'},
        {name:'Collins Avenue & 22nd Street',short:'150번 Airport Express',mapQuery:'Collins Avenue and 22nd Street, Miami Beach, FL',type:'교통',desc:'공항 방면 정류장과 출발 시각 사전 확인 · 여유 있게 이동 · 늦어지면 Uber',url:'https://www.miamidade.gov/global/transportation/metrobus-routes-serving-mia.page'},
        {name:'Miami Airport Station',short:'MIA Mover 환승',mapQuery:'Miami International Airport Station, Miami, FL',type:'교통',desc:'공항행 150번 버스 하차 → 무료 MIA Mover 탑승'},
        {name:'Miami International Airport',short:'12:00 목표 · MIA 공항',lat:25.7954,lng:-80.2900,type:'공항',desc:'12:00 전후 도착 목표 · Frontier F9 3059 오후 14:31 출발'},
        {name:'Hartsfield–Jackson Atlanta International Airport',short:'16:48 · ATL 도착',lat:33.6407,lng:-84.4277,type:'공항',desc:'Frontier F9 3059 · 오후 16:48 도착'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'저녁 · Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'Courtyard 12/17~19 (2박) 예약 확정 · ATL에서 Uber로 이동 예정'}
      ],modes:['walk','walk','walk','bus','train','flight','uber']
    },
    {
      date:'12.18',weekday:'금요일',area:'ATLANTA',headline:'마지막 하루, 여유롭게',caption:'Atlanta sightseeing · 저녁 식사 · 출국 준비',accent:'#dfbea3',
      hero:'https://res.cloudinary.com/atlanta/images/v1699906061/newAtlanta.com/122117-ABG-GardenLights-24-resized/122117-ABG-GardenLights-24-resized.jpg?_i=AA',
      highlight:'토요일 오전 국제선 출국 · 늦은 야간 일정 피하기',overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory (예약 확정)',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'호텔 출발',lat:33.8356,lng:-84.3251,type:'호텔',desc:'Courtyard 12/17~19 (2박) 예약 확정 · 자가용으로 여유롭게 출발'},
        {name:'Piedmont Park',short:'Piedmont Park',lat:33.7868,lng:-84.3735,type:'관광',desc:'Midtown 도시 전망과 공원 산책'},
        {name:'Atlanta Botanical Garden',short:'Botanical Garden',lat:33.7909,lng:-84.3727,type:'정원',desc:'식물원 구경 · 밤 조명 행사는 선택',image:'https://res.cloudinary.com/atlanta/images/v1699906061/newAtlanta.com/122117-ABG-GardenLights-24-resized/122117-ABG-GardenLights-24-resized.jpg?_i=AA',url:'https://atlantabg.org/'},
        {name:'Georgia Aquarium (optional)',short:'Aquarium 선택',lat:33.7634,lng:-84.3951,type:'액티비티',desc:'실내에서 즐기는 수족관 · 체력 따라 선택',url:'https://www.georgiaaquarium.org/'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'호텔 귀환',lat:33.8356,lng:-84.3251,type:'호텔',desc:'Courtyard 12/17~19 (2박) 예약 확정 · 짐 정리·휴식'}
      ],modes:['car','walk','car','car']
    },
    {
      date:'12.19',weekday:'토요일',area:'DEPARTURE',headline:'한국으로 돌아가는 날',caption:'오전 Atlanta 공항 · 가족과의 여행 마무리',accent:'#c7c0e3',
      hero:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85',
      highlight:'국제선 체크인 시간 확보 · 공항 드롭오프는 내 차(예정)',overnight:'귀국 · 항공편 시간 확인 필요',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'Courtyard 12/17~19 (2박) 예약 확정 · 12/19 체크아웃 후 공항으로 이동'},
        {name:'Hartsfield–Jackson Atlanta International Airport',short:'ATL 공항',lat:33.6407,lng:-84.4277,type:'공항',desc:'한국행 국제선 탑승 · 실제 터미널·체크인 시간 확인'}
      ],modes:['car']
    }
  ]
};
