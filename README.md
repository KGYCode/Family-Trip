# Family Visit · Map Slideshow (Dec 11–19 2026)

9일 가족여행을 넘겨보는 HTML 슬라이드입니다. 날짜별 방문 순서, Google Maps 장소 선택 지도, 이동수단 카드, 대표 사진, 예약 TODO를 보여줍니다.

## 구성

- `index.html` — HTML 진입점. `styles.css`, `data.js`, `app.js`와 같은 폴더에서 사용
- `data.js` — **일정·방문지·좌표·교통수단·예약 TODO의 원본 데이터**. 다음 수정은 대부분 이 파일만 변경
- `styles.css` — 디자인, 모바일 레이아웃
- `app.js` — 날짜별 슬라이드 전환, Google Maps 삽입 지도, Google Maps 길찾기 연결, 로컬 TODO 체크
- `build_standalone.py` — 의존성이 없는 **하나의 HTML 파일**로 빌드
- `../family_trip_slideshow.html` — 배포/공유용 단일 파일

## 열기

1. 가장 간단하게 `family_trip_slideshow.html`을 브라우저에서 엽니다.
2. 여러 소스 파일 버전은 `index.html`을 엽니다.
3. 날짜를 선택하거나 이전/다음 버튼, 키보드 방향키로 넘깁니다.
4. 오른쪽 상단 TODO를 열어 준비 항목을 확인합니다.

지도(Google Maps 일반 삽입), 폰트 및 사진은 **인터넷 연결 필요**. 브라우저/네트워크 설정 때문에 지도가 보이지 않으면 각 장소의 Google Maps 링크를 사용하세요.

## 일정 수정

`data.js`의 `TRIP_DATA.days` 안에서 날짜별 `stops` 배열을 수정합니다. 각 장소는 `name`, `short`, `lat`, `lng`, `type`, `desc`, `url`(선택), `image`(선택)을 포함합니다.

`modes`의 항목 수는 **`stops.length - 1`**이어야 하며, 각 구간의 수단은 `car`(내 차), `uber`, `flight`, `walk`, `boat`, `bus`(버스), `train`(공항 연결열차)를 사용합니다.

예: 방문지 한 개를 추가했다면 연결되는 `modes`도 한 개를 추가하세요.

TODO는 `TRIP_DATA.todos`에서 수정하세요. 슬라이드 안에서 체크한 상태는 브라우저의 localStorage에만 저장됩니다.

```bash
cd family_trip_slideshow
python build_standalone.py
```

## 현재 확정·미확정

- **Atlanta 호텔 예약 확정:** Courtyard by Marriott Atlanta Executive Park/Emory, 1236 Executive Park Drive, Atlanta, GA 30329. 세 건의 별도 예약: **12/11 체크인–12/13 체크아웃 (2박)**, **12/14–12/15 (1박)**, **12/17–12/19 (2박)**, 합계 **5박**. 예약번호·결제정보는 공개 저장소에 기록하지 않음.
- **Chattanooga 12/13–14:** DoubleTree by Hilton Chattanooga Downtown, 407 Chestnut Street, Chattanooga, TN 37402. 1박, 3인, 퀸베드 2개. 체크인 12/13 16:00 / 체크아웃 12/14 11:00. **예약 확정** (예약번호·결제정보 비공개)
- **Miami 12/15–17:** Miami Beach 23번가 Pine Tree Drive 부근 Airbnb 2박 예약(사용자 확인). 정확한 숙소 호수·출입 정보는 공개 저장소에 기록하지 않음.
- **ATL↔MIA:** Frontier F9 3442 (12/15 10:35 ATL 출발, 12:42 MIA 도착), F9 3059 (12/17 14:31 MIA 출발, 16:48 ATL 도착). **예약 확정** (예약번호·승객명·결제정보 비공개)
- **12/11 공항 픽업:** 사용자 자가용
- **12/15 Atlanta 호텔→공항:** Uber. **Miami MIA→숙소:** 무료 MIA Mover → 150 Miami Beach Airport Express ($2.25/인) → Collins Ave & 22nd St → 숙소 인근 도보(버스 운영 및 정류장 확인).
- **12/17 Miami 숙소→MIA:** 150번 Airport Express 버스 + 무료 MIA Mover (지연 시 Uber). **ATL 공항→호텔:** Uber 임시 계획.
- **12/19 국제선 공항 드롭오프:** 사용자 자가용 예정 (확인 필요)
- **Yeppa & Co. (Buckhead):** 12/11 지정 식당. 306 Buckhead Ave NE, Atlanta, GA 30305. 공식 홈페이지: https://www.yhospitality.com/yeppa-buckhead

## Chattanooga 1박 2일 일정 (12/13–14)

- **12/13 일요일 · EST:** 09:00 Atlanta 출발 → Downtown 점심 → 13:00 전후 DoubleTree 짐 보관 요청 → 14:15 전후 Ruby Falls Cave Walk(미예약) → 16:45 Sunset Rock 전망대 도착 → 17:30 전후 일몰 → DoubleTree 체크인과 저녁.
- **12/14 월요일 · EST:** DoubleTree 11:00 이전 체크아웃 → Walnut Street Bridge 및 Tennessee Riverfront 산책 → 강변 근처 점심 → 오후 Atlanta 귀환.
- Nashville 및 Murfreesboro Buc-ee’s 경유는 취소. Rock City도 기존 결정대로 제외.
- Ruby Falls는 아직 예약 전이며 Sunset Rock 일몰을 고려해 시간 선택. 호텔 예약 3건은 성인 2명으로 정확하며, 나머지 가족여행 참여자 1명은 별도 숙박함.

## Miami Beach 2박 3일 계획 (12/15–17)

- **12/15(화):** Frontier F9 3442 · ATL 10:35 → MIA 12:42. 공항 무료 MIA Mover 및 150번 Airport Express 버스로 Miami Beach 이동, 숙소 짐 보관/체크인 확인 → 23번가 Beachwalk 산책 → Lincoln Road → Ocean Drive/Lummus Park 야경. 숙소는 Pine Tree Drive 23번가 부근 Airbnb, 예약 완료.
- **12/16(수):** 06:40 Beachwalk 도착 → **07:00 전후 일출** → 아침 식사 → 09:45~12:00 Vizcaya Museum & Gardens → Downtown 점심 → 13:30 Bayside Marketplace → **15:00~16:30 Island Queen Millionaire's Row 관광 크루즈 목표(예약 전)** → Bayfront Park 선택 → Uber로 숙소 귀환. 크루즈 탑승권은 14:15까지 Bayside 매표소에서 교환해야 하며, 티켓은 환불 불가. 공식 예약: https://islandqueencruises.com/cruises/millionaires-row-sightseeing-cruise/
- **12/17(목):** 해변 아침 산책 → 10:30~11:00 숙소 출발 목표 → 150번 버스 및 MIA Mover로 공항 이동(지연 시 Uber) → Frontier F9 3059 · MIA 14:31 → ATL 16:48.
- 공항 버스는 1인 편도 $2.25(2026년 기준). 숙소 정확한 호수·예약 코드·결제정보는 공개 사이트에 저장하지 않음. Airbnb 조기 체크인 및 체크아웃 시간은 호스트 확인 필요.

## 지도 정확도

방문지 핀 좌표는 **계획 단계에서 참고용으로 입력한 근사 위치**입니다. 미확정 호텔은 도시의 대표 지역에 임시로 표시했습니다. 지도는 방문지별 단일 위치만 표시하며 자체 경로선·교통수단 오버레이는 없습니다. 방문지 선택 버튼으로 위치를 전환합니다. 실제 운전/우버 동선은 카드의 Google Maps 길찾기 버튼으로 확인하세요.

## 사진

외부 운영사·관광사이트/이미지 서비스의 URL을 참조합니다. 이미지 미노출 시 배경색과 장소 이름이 남으며, 장소의 `위치·사진` 링크는 계속 작동합니다. 사진은 참고 목적이고 이미지 저작권은 각 소유자에게 있습니다. 외부 링크에 추적 파라미터를 추가하지 않았습니다.

## 보존·수정

이 ZIP과 `family_trip_slideshow.html`을 보관하세요. 다음 ChatGPT 대화에 이 프로젝트 ZIP 또는 `data.js`를 첨부하고 '이 프로젝트의 일정을 수정해줘'라고 요청하면 원본 구조를 유지한 채 수정할 수 있습니다. 연결된 프로젝트 보관 위치에 업로드한 경우 그 파일을 참조해도 됩니다.

## 지도 배경 설정 (2026-11-18 수정)

기존 CARTO 지도 타일 URL은 서비스 측 API 키 요구로 오류가 발생할 수 있어, API 키가 필요 없는 OpenStreetMap 표준 타일(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`)로 변경했습니다. Leaflet은 유지하며 핀·개략 동선·이동수단 표시는 동일합니다. OSM 타일은 네트워크 연결이 필요하고 공개 타일 사용 정책 및 사용량 제한의 적용을 받습니다.

## 지도 방식 · 2026-11 수정

Leaflet 및 OpenStreetMap 타일 호출은 제거했습니다. 대신 Google Maps의 일반 iframe 주소(`https://maps.google.com/maps?q=...&output=embed`)로 장소 하나씩 표시하며, Google Maps 공식 **Maps Embed API**를 사용하지 않습니다. 별도 API 키와 청구 계정은 필요하지 않습니다.

중요: 이 일반 임베드 URL의 동작은 Google/브라우저의 정책에 따라 바뀔 수 있습니다. 확실히 지원되는 Google Maps URLs 링크를 각 카드와 지도 바로가기 버튼에 제공했습니다. iframe 표시가 차단되면 직접 열기 링크를 사용하세요.

단일 `family_trip_slideshow.html`은 파일 그대로 공유할 수 있습니다. 외부 사진·지도·폰트는 수신자에게도 인터넷 연결과 외부 서비스 접근 권한이 필요합니다. TODO 체크상태는 공유되지 않고 각각의 브라우저에 저장됩니다. 지도에 이동 경로나 이동수단을 그리지 않지만, 이동수단 텍스트는 여행 카드에 유지됩니다.
