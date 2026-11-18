/* Family trip, December 11–19 2026. Edit itinerary and TODO items here. */
window.TRIP_DATA = {
  title: '가족 여행 · Atlanta / Chattanooga / Miami',
  dates: '2026.12.11 — 12.19',
  subtitle: '경관과 함께하는 9일 · 부모님 동반 · 성인 3인',
  baseHotel: 'Courtyard by Marriott Atlanta Executive Park/Emory',
  baseAddress: '1236 Executive Park Drive, Atlanta, GA 30329',
  note: '지도 연결선은 개략적인 이동 순서이며 실제 도로·항로를 표시하지 않습니다. 실시간 경로는 각 구간의 길찾기 버튼에서 확인하세요.',
  todos: [
    {label:'Chattanooga 숙소 결정 · 12/13 1박', group:'숙소', done:false},
    {label:'Miami 숙소 결정 · 12/15~17 2박', group:'숙소', done:false},
    {label:'Atlanta 호텔 실제 예약 여부 및 분할 숙박 확인', group:'숙소', done:false},
    {label:'ATL ↔ MIA 왕복 항공편 예약 및 도착/출발 시간 확정', group:'교통', done:false},
    {label:'Atlanta 호텔 ↔ ATL 공항 Uber 이동 계획', group:'교통', done:false},
    {label:'Miami 공항 ↔ 호텔 Uber 동선 (숙소 확정 후)', group:'교통', done:false},
    {label:'Montaluce Winery & Restaurant 식사 예약', group:'예약', done:false},
    {label:'Ruby Falls · Rock City 입장권 및 시간 확인', group:'예약', done:false},
    {label:'Biscayne Bay 크루즈 운항시간 및 예약 확인', group:'예약', done:false},
    {label:'Yebar = Y BAR e Ristorante 맞는지 확인', group:'확인', done:false},
    {label:'12/19 출국편·공항 도착 목표시간 확인', group:'확인', done:false}
  ],
  days: [
    {
      date:'12.11', weekday:'금요일', area:'ATLANTA', headline:'환영하는 첫날', caption:'공항 픽업부터 Buckhead의 저녁까지', accent:'#e4bd84',
      hero:'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&w=1800&q=85',
      highlight:'첫날은 컨디션에 맞게 · 지정 식당 Yebar 유지', overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory',
      stops:[
        {name:'Hartsfield–Jackson Atlanta International Airport', short:'ATL 공항',lat:33.6407,lng:-84.4277,type:'공항',desc:'부모님 도착 · 내 차로 픽업',image:'',url:'https://www.atl.com/'},
        {name:'Cortland Oleander',short:'집 방문',lat:33.8340,lng:-84.3260,type:'방문',desc:'집에 잠시 들러 짐과 동선을 정리',image:'',url:'https://cortland.com/apartments/cortland-oleander/'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'선택한 Atlanta 숙소 · 예약 여부는 TODO',image:'',url:'https://www.marriott.com/en-us/hotels/atlep-courtyard-atlanta-executive-park-emory/overview/'},
        {name:'Buckhead Village',short:'Buckhead',lat:33.8396,lng:-84.3791,type:'관광',desc:'거리·상점·카페 가볍게 둘러보기',image:'',url:'https://www.buckheadvillagedistrict.com/'},
        {name:'Yebar (Y BAR e Ristorante 확인 필요)',short:'Yebar',lat:33.8397,lng:-84.3786,type:'식사',desc:'지정 식당 · 정확한 지점명 최종 확인',image:'',url:'https://www.yhospitality.com/our-restaurants'},
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
      date:'12.13',weekday:'일요일',area:'CHATTANOOGA',headline:'폭포와 산의 도시',caption:'Ruby Falls · Lookout Mountain · 겨울 야경',accent:'#93cdd3',
      hero:'https://www.rubyfalls.com/wp-content/uploads/2024/02/Waterfall_AGP_Teal-Pink_1080x1080.jpg',
      highlight:'동굴 계단·보행로 주의 · Rock City 야경은 선택',overnight:'Chattanooga · 호텔 미정 (TODO)',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 출발',lat:33.8356,lng:-84.3251,type:'호텔',desc:'내 차로 Chattanooga 이동'},
        {name:'Ruby Falls',short:'Ruby Falls',lat:35.0198,lng:-85.3408,type:'액티비티',desc:'Lookout Mountain 지하 폭포 관람 · 시간지정 예약',image:'https://www.rubyfalls.com/wp-content/uploads/2024/02/Waterfall_AGP_Teal-Pink_1080x1080.jpg',url:'https://www.rubyfalls.com/'},
        {name:'Lookout Mountain',short:'Lookout Mountain',lat:34.9866,lng:-85.3492,type:'전망',desc:'산 전망과 짧은 주변 관광'},
        {name:'Rock City Gardens',short:'Rock City',lat:34.9757,lng:-85.3496,type:'액티비티',desc:'Enchanted Garden of Lights · 저녁 조명 행사(선택)',image:'https://i0.wp.com/blueridgemountainstravelguide.com/wp-content/uploads/2022/12/Rock-City-Christmas-Lights-enchanted-Garden-of-Lights.jpg?resize=1024%2C683&ssl=1',url:'https://www.seerockcity.com/enchanted-garden-of-lights/'},
        {name:'Chattanooga hotel (TBD)',short:'호텔 TBD',lat:35.0457,lng:-85.3095,type:'할 일',desc:'Chattanooga 호텔 예약 전 · 지도 핀은 Downtown 임시 기준'}
      ],modes:['car','car','car','car']
    },
    {
      date:'12.14',weekday:'월요일',area:'CHATTANOOGA → ATLANTA',headline:'강변에서 다시 Atlanta',caption:'Rock City 낮 풍경 또는 Tennessee Riverfront',accent:'#aac0e5',
      hero:'https://koa.com/blog/images/GettyImages-1032356740.jpg?preset=blogPhoto',
      highlight:'전날 충분히 구경했다면 관광 하나만 선택',overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory',
      stops:[
        {name:'Chattanooga hotel (TBD)',short:'호텔 출발',lat:35.0457,lng:-85.3095,type:'할 일',desc:'Chattanooga 호텔에서 출발 · 위치는 미정'},
        {name:'Rock City Gardens (optional)',short:'Rock City 선택',lat:34.9757,lng:-85.3496,type:'전망',desc:'전날 야경으로 충분했다면 생략 가능'},
        {name:'Walnut Street Bridge',short:'Riverfront',lat:35.0582,lng:-85.3073,type:'관광',desc:'Tennessee River 경관과 다리 주변 산책',image:'https://koa.com/blog/images/GettyImages-1032356740.jpg?preset=blogPhoto'},
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'귀가 후 휴식, 다음 날 항공편 준비'}
      ],modes:['car','car','car']
    },
    {
      date:'12.15',weekday:'화요일',area:'ATLANTA → MIAMI',headline:'비행기로 남쪽 바다로',caption:'Uber → ATL → 비행기 → MIA → Uber',accent:'#77d7cf',
      hero:'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt89aa53706d11e51d/6724b026d2da22b6a6bc2a99/Miami_South_Beach_Art_Deco_Welcome_Center_by_D_Ramey_Logan-LOWRES.jpg?auto=webp&crop=smart&disable=upscale&fit=crop&quality=60',
      highlight:'Miami 호텔 미정 · 항공권 미정 · 전 일정 Uber',overnight:'Miami · 호텔 미정 (TODO)',
      stops:[
        {name:'Courtyard by Marriott Atlanta Executive Park/Emory',short:'Atlanta 호텔',lat:33.8356,lng:-84.3251,type:'호텔',desc:'호텔에서 Uber 호출'},
        {name:'Hartsfield–Jackson Atlanta International Airport',short:'ATL 공항',lat:33.6407,lng:-84.4277,type:'공항',desc:'국내선 체크인 · 항공편 시간 TODO'},
        {name:'Miami International Airport',short:'MIA 공항',lat:25.7954,lng:-80.2900,type:'공항',desc:'도착 후 Uber 이용'},
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
      highlight:'비행기 출발 시간이 우선 · 모든 Miami 육상 이동 Uber',overnight:'Atlanta · Courtyard by Marriott Atlanta Executive Park/Emory',
      stops:[
        {name:'Miami hotel (TBD)',short:'Miami 호텔',lat:25.7850,lng:-80.1340,type:'할 일',desc:'체크아웃 · 숙소 위치 확정 후 업데이트'},
        {name:'South Pointe Park (optional)',short:'South Pointe 선택',lat:25.7662,lng:-80.1345,type:'전망',desc:'바다·대형 크루즈선 감상 · 항공편 시간상 생략 가능'},
        {name:'Miami International Airport',short:'MIA 공항',lat:25.7954,lng:-80.2900,type:'공항',desc:'Uber로 이동 · 국내선 탑승'},
        {name:'Hartsfield–Jackson Atlanta International Airport',short:'ATL 공항',lat:33.6407,lng:-84.4277,type:'공항',desc:'Atlanta 도착'},
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
