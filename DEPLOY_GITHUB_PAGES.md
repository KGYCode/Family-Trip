# Family Trip · GitHub Pages 배포 안내

이 ZIP은 GitHub Pages 정적 웹사이트 루트에 올릴 파일입니다.

1. GitHub에서 `family-trip`라는 새 **Public** 저장소를 생성합니다 (README 자동 생성 선택 가능).
2. 저장소에서 **Add file → Upload files**를 선택합니다.
3. 이 ZIP의 압축을 푼 뒤, `index.html`, `styles.css`, `app.js`, `data.js`, `.nojekyll`을 저장소 **최상위 디렉터리**에 올립니다 (ZIP 파일 자체 업로드가 아님).
4. **Settings → Pages → Build and deployment → Deploy from a branch**, Branch `main`, Folder `/(root)`를 선택하고 저장합니다.
5. 사이트 주소는 `https://<github-username>.github.io/family-trip/` 형태입니다. 실제 URL은 Pages 설정 화면의 표시 내용을 확인합니다.

지도는 Google Maps 일반 iframe을 사용합니다. 별도 API 키 없이 작동하는 방식이지만, Google의 임베드 정책 및 방문자 브라우저 환경에 따라 iframe이 차단될 수 있습니다. 장소의 'Google Maps에서 크게 열기' 링크는 별도로 제공됩니다.

GitHub Pages 일반 저장소의 사이트는 공개됩니다. 항공권 예약번호, 사적인 주소나 연락처 같은 민감정보는 올리지 마세요.

`data.js`에서 일정과 TODO를 변경할 수 있습니다. CSS/JavaScript는 각각 `styles.css`/`app.js`에 분리되어 있습니다.
