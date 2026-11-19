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
    {date:'12.14', place:'Nashville → Atlanta', detail:'Nashville Broadway · Atlanta 귀환', color:'#71ddd1'},
    {date:'12.15', place:'Miami', detail:'F9 3442 · MIA 12:42 도착', color:'#f0b56e'},
    {date:'12.16', place:'Miami', detail:'Vizcaya · Bay Cruise', color:'#f0b56e'},
    {date:'12.17', place:'Atlanta', detail:'F9 3059 · ATL 16:48 도착', color:'#71ddd1'},
    {date:'12.18', place:'Atlanta', detail:'Atlanta sightseeing', color:'#71ddd1'},
    {date:'12.19', place:'Atlanta', detail:'ATL 공항 출국', color:'#71ddd1'}
  ],
  todos: [
    {label:'Chattanooga DoubleTree 예약 확정 · 12/13 16:00 체크인 / 12/14 11:00 체크아웃', group:'숙소', done:true},
    {label:'Miami 숙소 결정 · 12/15~17 2박', group:'숙소', done:false},
    {label:'Atlanta 호텔 실제 예약 여부 및 분할 숙박 확인', group:'숙소', done:false},
    {label:'Frontier 왕복 항공편 예약 확정 · 12/15 F9 3442 / 12/17 F9 3059', group:'교통', done:true},
    {label:'Frontier 개인 소지품 외 기내수하물·위탁수하물 허용량 및 추가 구매 확인', group:'교통', done:false},
    {label:'Atlanta 호텔 ↔ ATL 공항 Uber 이동 계획', group:'교통', done:false},
    {label:'Miami 공항 ↔ 호텔 Uber 동선 (숙소 확정 후)', group:'교통', done:false},
    {label:'Montaluce Winery & Restaurant 식사 예약', group:'예약', done:false},
    {label:'Ruby Falls 12/13 오후 14:15 전후 Cave Walk 예약 (Sunset Rock 일몰 역산)', group:'예약', done:false},
    {label:'Sunset Rock 주차 및 일몰(17:30 전후) 확인', group:'확인', done:false},
    {label:'12/14 Nashville Lower Broadway 주차 위치 확인', group:'교통', done:false},
    {label:'Biscayne Bay 크루즈 운항시간 및 예약 확인', group:'예약', done:false},
    {label:'12/19 출국편·공항 도착 목표시간 확인', group:'확인', done:false}
  ],
  days: [
    {
      date:'12.11', weekday:'금요일', area:'ATLANTA', headline:'환영하는 첫날', caption:'공항 픽업부터 Buckhead의 저녁까지', accent:'#e4bd84',
      hero:'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&w=1800&q=85',
      highlight:'첫날은 컨디션에 맞게 · 지정 식당 Yeppa & Co. 방문', overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory',
      stops:[
        {name:'Hartsfield–Jackson Atlanta International Airport', short:'ATL 공항',lat:33.6407,lng:-84.4277,type:'공항',desc:'부모님 도착 · 내 차로 픽업',image:'',url:'https://www.atl.com/'},
        {name:'Cortland Oleander',short:'집 방문',lat:33.8340,lng:-84.3260,type:'방문',desc:'집에 잠시 들러 짐과 동선을 정리',image:'',url:'https://cortland.com/apartments/cortland-oleander/'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'선택한 Atlanta 숙소 · 예약 여부는 TODO',image:'',url:'https://www.marriott.com/en-us/hotels/atlep-courtyard-atlanta-executive-park-emory/overview/'},
        {name:'Buckhead Village',short:'Buckhead',lat:33.8396,lng:-84.3791,type:'관광',desc:'거리·상점·카페 가볍게 둘러보기',image:'',url:'https://www.buckheadvillagedistrict.com/'},
        {name:'Yeppa & Co. (Buckhead)',short:'Yeppa & Co.',lat:33.8397,lng:-84.3786,type:'식사',desc:'이탈리안 레스토랑 · 306 Buckhead Ave NE, Atlanta, GA 30305 · 식사 예약 권장',image:'',url:'https://www.yhospitality.com/yeppa-buckhead'},
        {name:'Costco Wholesale (Atlanta area)',short:'Costco',lat:33.8730,lng:-84.3775,type:'쇼핑',desc:'장보기 · 도착시간에 따라 순서 조정',image:'',url:'https://www.costco.com/warehouse-locations'}
      ],modes:['car','car','car','walk','car']
    },
    {
      date:'12.12',weekday:'토요일',area:'NORTH GEORGIA',headline:'포도밭과 산자락',caption:'Montaluce · Dahlonega · Shopping',accent:'#bad7bc',
      hero:'https://www.exploregeorgia.org/sites/default/files/styles/listing_slideshow/public/listing_images/profile/2528/levignefromthevine.jpg?itok=YIOoYNdR',
      highlight:'경관·식사·쇼핑 · 세 곳 모두 직관적으로 즐기기',overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'호텔 출발',lat:33.8356,lng:-84.3251,type:'호텔',desc:'Atlanta 호텔에서 출발'},
        {name:'Montaluce Winery & Restaurant',short:'Montaluce',lat:34.5855,lng:-83.9556,type:'식사',desc:'포도밭 전망과 점심식사 · 예약 권장',image:'https://www.exploregeorgia.org/sites/default/files/styles/listing_slideshow/public/listing_images/profile/2528/levignefromthevine.jpg?itok=YIOoYNdR',url:'https://www.montaluce.com/'},
        {name:'Dahlonega Downtown',short:'Dahlonega',lat:34.5329,lng:-83.9849,type:'관광',desc:'작은 마을 광장과 카페 둘러보기'},
        {name:'North Georgia Premium Outlets',short:'Outlets',lat:34.3548,lng:-84.0444,type:'쇼핑',desc:'Georgia Shopping mall로 임시 반영 · 쇼핑'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'호텔 귀가',lat:33.8356,lng:-84.3251,type:'호텔',desc:'Atlanta 귀가 및 휴식'}
      ],modes:['car','car','car','car']
    },
    {
      date:'12.13',weekday:'일요일',area:'CHATTANOOGA',headline:'강변 산책과 일몰',caption:'Downtown 점심 · Walnut Street Bridge · Ruby Falls · Sunset Rock',accent:'#93cdd3',
      hero:'https://www.rubyfalls.com/wp-content/uploads/2024/02/Waterfall_AGP_Teal-Pink_1080x1080.jpg',
      highlight:'Ruby Falls 14:15 전후 예약 목표(미예약) · Sunset Rock 16:45 전망대 도착, 17:30 전후 일몰',overnight:'Chattanooga · DoubleTree by Hilton Chattanooga Downtown (예약 확정)',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'09:00 · Atlanta 출발',lat:33.8356,lng:-84.3251,type:'출발',desc:'자가용 출발 · 교통체증 고려'},
        {name:'Chattanooga Downtown',short:'11:30 · 점심',lat:35.0540,lng:-85.3097,type:'식사',desc:'11:30~12:30 · Downtown 점심식사 · 식당 미정'},
        {name:'Walnut Street Bridge',short:'12:30 · 강변 산책',lat:35.0582,lng:-85.3073,type:'관광',desc:'12:30~13:30 · 점심 후 강변 산책 · Tennessee River',image:'https://koa.com/blog/images/GettyImages-1032356740.jpg?preset=blogPhoto'},
        {name:'DoubleTree by Hilton Chattanooga Downtown',short:'13:30 · 호텔 짐 보관',mapQuery:'407 Chestnut Street, Chattanooga, TN 37402',type:'호텔',desc:'13:30~14:00 · 호텔에 짐 맡기기 요청(사전 보관 가능 여부 확인) · 체크인 16:00 · 숙박 예약 확정',url:'https://www.hilton.com/en/hotels/chachdt-doubletree-chattanooga-downtown/'},
        {name:'Ruby Falls',short:'14:15 · Ruby Falls',lat:35.0198,lng:-85.3408,type:'액티비티',desc:'14:15 전후 Cave Walk 예약 목표(아직 미예약) · 약 80분 투어 · 온라인 시간지정 입장',image:'https://www.rubyfalls.com/wp-content/uploads/2024/02/Waterfall_AGP_Teal-Pink_1080x1080.jpg',url:'https://www.rubyfalls.com/ruby-falls-tickets/'},
        {name:'Sunset Rock',short:'16:45 · Sunset Rock',mapQuery:'Sunset Rock, 405 W Brow Rd, Lookout Mountain, TN',type:'전망',desc:'16:20 전후 주차·도보 시작, 16:45 전망대 도착 목표 · 17:30 전후 일몰 감상 · 주차 매우 제한적, 절벽·계단 주의'},
        {name:'DoubleTree by Hilton Chattanooga Downtown',short:'18:00 · 호텔 귀환',mapQuery:'407 Chestnut Street, Chattanooga, TN 37402',type:'호텔',desc:'저녁 및 호텔 체크인 · 예약 확정 · 체크아웃 다음 날 11:00',url:'https://www.hilton.com/en/hotels/chachdt-doubletree-chattanooga-downtown/'}
      ],modes:['car','walk','car','car','car','car']
    },
    {
      date:'12.14',weekday:'월요일',area:'CHATTANOOGA → NASHVILLE → ATLANTA',headline:'Music City, Nashville',caption:'DoubleTree 체크아웃 · Lower Broadway 기념품·라이브 음악 · Atlanta 귀환',accent:'#aac0e5',
      hero:'https://koa.com/blog/images/GettyImages-1032356740.jpg?preset=blogPhoto',
      highlight:'09:00 EST 출발 → 10:00 전후 CST Nashville 도착 · Nashville은 Chattanooga보다 1시간 느림',overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory',
      stops:[
        {name:'DoubleTree by Hilton Chattanooga Downtown',short:'09:00 EST · 체크아웃',mapQuery:'407 Chestnut Street, Chattanooga, TN 37402',type:'호텔',desc:'체크아웃 후 Nashville로 출발 · 실제 체크아웃 제한 11:00 · 예약 확정',url:'https://www.hilton.com/en/hotels/chachdt-doubletree-chattanooga-downtown/'},
        {name:'Lower Broadway, Nashville',short:'10:00 CST · Music City',mapQuery:'Broadway and 4th Avenue North, Nashville, TN 37203',type:'관광',desc:'10:00~12:30 CST · Broadway 거리, 컨트리 음악 라이브 바와 기념품 가게 · 주차 후 도보'},
        {name:'Downtown Nashville',short:'12:30 CST · 점심',mapQuery:'Lower Broadway, Nashville, TN 37203',type:'식사',desc:'12:30~13:30 CST · Nashville 점심식사 후 Atlanta 방향 출발'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'18:30~19:30 EST · Atlanta 귀환',lat:33.8356,lng:-84.3251,type:'호텔',desc:'Nashville 13:30 CST 출발 기준 · 교통에 따라 도착시간 변동 · 다음 날 Miami 항공편 준비'}
      ],modes:['car','walk','car']
    },
    {
      date:'12.15',weekday:'화요일',area:'ATLANTA → MIAMI',headline:'비행기로 남쪽 바다로',caption:'Uber → ATL → 비행기 → MIA → Uber',accent:'#77d7cf',
      hero:'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt89aa53706d11e51d/6724b026d2da22b6a6bc2a99/Miami_South_Beach_Art_Deco_Welcome_Center_by_D_Ramey_Logan-LOWRES.jpg?auto=webp&crop=smart&disable=upscale&fit=crop&quality=60',
      highlight:'Frontier F9 3442 · ATL 10:35 → MIA 12:42 · Miami 호텔 미정 · 현지 Uber',overnight:'Miami · 호텔 미정 (TODO)',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'호텔에서 Uber 호출'},
        {name:'Hartsfield–Jackson Atlanta International Airport',short:'ATL 공항',lat:33.6407,lng:-84.4277,type:'공항',desc:'12/15 Frontier F9 3442 · 오전 10:35 출발 · 공항 Uber 이동'},
        {name:'Miami International Airport',short:'MIA 공항',lat:25.7954,lng:-80.2900,type:'공항',desc:'12/15 오후 12:42 도착 · 이후 Uber로 숙소 이동'},
        {name:'Miami hotel (TBD)',short:'Miami 호텔 TBD',lat:25.7850,lng:-80.1340,type:'할 일',desc:'숙소 미정 · 지도상 South Beach 근처 임시 표시'},
        {name:'Ocean Drive & Lummus Park',short:'Ocean Drive',lat:25.7823,lng:-80.1300,type:'CSI 테마',desc:'CSI: Miami 느낌의 Art Deco 건물·야자수·해변',image:'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt89aa53706d11e51d/6724b026d2da22b6a6bc2a99/Miami_South_Beach_Art_Deco_Welcome_Center_by_D_Ramey_Logan-LOWRES.jpg?auto=webp&crop=smart&disable=upscale&fit=crop&quality=60'}
      ],modes:['uber','flight','uber','walk']
    },
    {
      date:'12.16',weekday:'수요일',area:'MIAMI',headline:'정원, 바다, 스카이라인',caption:'Vizcaya (선택) · Biscayne Bay Cruise',accent:'#7cddde',
      hero:'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D400%2Cheight%3D265%2Cdpr%3D2/tour_img/70c1dd2a481926607008ae24d87f72d3d0e64dec8c1ea885321ef108504bb969.png',
      highlight:'Uber와 보트 · 일정은 여유롭게 · 일몰 크루즈 예약 확인',overnight:'Miami · 호텔 미정 (TODO)',
      stops:[
        {name:'Miami hotel (TBD)',short:'Miami 호텔 TBD',lat:25.7850,lng:-80.1340,type:'할 일',desc:'호텔 위치 임시'},
        {name:'Vizcaya Museum & Gardens',short:'Vizcaya 선택',lat:25.7445,lng:-80.2105,type:'정원',desc:'대저택과 정원 · 영어 해설 없이도 풍경 감상',image:'https://assets.simpleviewinc.com/sv-alhi/image/upload/c_fill%2Ch_640%2Cq_75%2Cw_1200/v1/cms_resources/clients/alhitx/vizcaya_video_home_1_copy_1400x747_9920e885-fd9a-4e8d-b0ab-383e1f209bd0.jpg',url:'https://vizcaya.org/'},
        {name:'Bayside Marketplace',short:'Bayside',lat:25.7785,lng:-80.1869,type:'관광',desc:'크루즈 승선장 · 바다 산책과 선착장 구경'},
        {name:'Biscayne Bay Cruise',short:'Bay Cruise',lat:25.7686,lng:-80.1760,type:'보트',desc:'바다 위에서 마이애미 스카이라인과 섬 감상 · 경로 핀은 개략',image:'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D400%2Cheight%3D265%2Cdpr%3D2/tour_img/70c1dd2a481926607008ae24d87f72d3d0e64dec8c1ea885321ef108504bb969.png',url:'https://www.islandqueencruises.com/'},
        {name:'Miami hotel (TBD)',short:'호텔 귀환',lat:25.7850,lng:-80.1340,type:'할 일',desc:'Uber로 돌아와 휴식'}
      ],modes:['uber','uber','boat','uber']
    },
    {
      date:'12.17',weekday:'목요일',area:'MIAMI → ATLANTA',headline:'바다와 작별하고 귀환',caption:'시간이 맞으면 South Pointe Park · 비행기로 Atlanta',accent:'#99d3f1',
      hero:'https://assets.simpleviewinc.com/sv-alhi/image/upload/c_fill%2Ch_640%2Cq_75%2Cw_1200/v1/cms_resources/clients/alhitx/vizcaya_video_home_1_copy_1400x747_9920e885-fd9a-4e8d-b0ab-383e1f209bd0.jpg',
      highlight:'Frontier F9 3059 · MIA 14:31 → ATL 16:48 · Miami 이동 Uber',overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory',
      stops:[
        {name:'Miami hotel (TBD)',short:'Miami 호텔',lat:25.7850,lng:-80.1340,type:'할 일',desc:'체크아웃 · 숙소 위치 확정 후 업데이트'},
        {name:'South Pointe Park (optional)',short:'South Pointe 선택',lat:25.7662,lng:-80.1345,type:'전망',desc:'바다·대형 크루즈선 감상 · 항공편 시간상 생략 가능'},
        {name:'Miami International Airport',short:'MIA 공항',lat:25.7954,lng:-80.2900,type:'공항',desc:'12/17 Frontier F9 3059 · 오후 2:31 출발 · 공항 Uber 이동'},
        {name:'Hartsfield–Jackson Atlanta International Airport',short:'ATL 공항',lat:33.6407,lng:-84.4277,type:'공항',desc:'12/17 오후 4:48 도착 · Uber로 호텔 이동'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'Uber 귀환으로 임시 계획 · 사용자 확인 가능'}
      ],modes:['uber','uber','flight','uber']
    },
    {
      date:'12.18',weekday:'금요일',area:'ATLANTA',headline:'마지막 하루, 여유롭게',caption:'Atlanta sightseeing · 저녁 식사 · 출국 준비',accent:'#dfbea3',
      hero:'https://res.cloudinary.com/atlanta/images/v1699906061/newAtlanta.com/122117-ABG-GardenLights-24-resized/122117-ABG-GardenLights-24-resized.jpg?_i=AA',
      highlight:'토요일 오전 국제선 출국 · 늦은 야간 일정 피하기',overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'호텔 출발',lat:33.8356,lng:-84.3251,type:'호텔',desc:'자가용으로 여유롭게 출발'},
        {name:'Piedmont Park',short:'Piedmont Park',lat:33.7868,lng:-84.3735,type:'관광',desc:'Midtown 도시 전망과 공원 산책'},
        {name:'Atlanta Botanical Garden',short:'Botanical Garden',lat:33.7909,lng:-84.3727,type:'정원',desc:'식물원 구경 · 밤 조명 행사는 선택',image:'https://res.cloudinary.com/atlanta/images/v1699906061/newAtlanta.com/122117-ABG-GardenLights-24-resized/122117-ABG-GardenLights-24-resized.jpg?_i=AA',url:'https://atlantabg.org/'},
        {name:'Georgia Aquarium (optional)',short:'Aquarium 선택',lat:33.7634,lng:-84.3951,type:'액티비티',desc:'실내에서 즐기는 수족관 · 체력 따라 선택',url:'https://www.georgiaaquarium.org/'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'호텔 귀환',lat:33.8356,lng:-84.3251,type:'호텔',desc:'짐 정리·휴식 · 저녁은 여유롭게'}
      ],modes:['car','walk','car','car']
    },
    {
      date:'12.19',weekday:'토요일',area:'DEPARTURE',headline:'한국으로 돌아가는 날',caption:'오전 Atlanta 공항 · 가족과의 여행 마무리',accent:'#c7c0e3',
      hero:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85',
      highlight:'국제선 체크인 시간 확보 · 공항 드롭오프는 내 차(예정)',overnight:'귀국 · 항공편 시간 확인 필요',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'일찍 체크아웃 및 공항으로 이동'},
        {name:'Hartsfield–Jackson Atlanta International Airport',short:'ATL 공항',lat:33.6407,lng:-84.4277,type:'공항',desc:'한국행 국제선 탑승 · 실제 터미널·체크인 시간 확인'}
      ],modes:['car']
    }
  ]
};
