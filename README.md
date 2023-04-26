# cartoon-rent-service

# 메인 브랜치

# 파일트리

```
cartoon-rent-service
├─ README.md
├─ db.json
├─ index.html
├─ package-lock.json
├─ package.json
├─ src
│  ├─ App.jsx
│  ├─ Client.jsx
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ Cafe24Ssurround.ttf
│  │  │  ├─ NotoSansKR-Black.otf
│  │  │  ├─ NotoSansKR-Bold.otf
│  │  │  ├─ NotoSansKR-Light.otf
│  │  │  ├─ NotoSansKR-Medium.otf
│  │  │  ├─ NotoSansKR-Regular.otf
│  │  │  ├─ NotoSansKR-Thin.otf
│  │  │  ├─ Pretendard-Bold.otf
│  │  │  ├─ Pretendard-Medium.otf
│  │  │  ├─ Pretendard-Regular.otf
│  │  │  └─ Pretendard-SemiBold.otf
│  │  └─ images
│  │     ├─ btn.png
│  │     ├─ close.png
│  │     ├─ dummy.png
│  │     ├─ item_3.jpg
│  │     ├─ logo.png
│  │     ├─ nav_icon-01.svg
│  │     ├─ nav_icon-02.svg
│  │     ├─ nav_icon-03.svg
│  │     ├─ paper.svg
│  │     ├─ penalty.png
│  │     ├─ spinner2.gif
│  │     ├─ webtoonImg.png
│  │     └─ 도토리.png
│  ├─ components
│  │  ├─ Error.jsx
│  │  └─ mainComponent
│  │     ├─ Reservation.jsx
│  │     └─ shareTaste
│  │        ├─ Card.jsx
│  │        ├─ CardList.jsx
│  │        ├─ Nav.jsx
│  │        └─ ShareTaste.jsx
│  ├─ hooks
│  │  ├─ Navigate.jsx
│  │  └─ useInput.jsx
│  ├─ index.css
│  ├─ layout
│  │  ├─ Contents.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  └─ Nav.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Counter.jsx
│  │  ├─ FindID.jsx
│  │  ├─ Join.jsx
│  │  ├─ Login.jsx
│  │  ├─ Main.jsx
│  │  └─ Test.jsx
│  ├─ store
│  │  ├─ countState.js
│  │  └─ userState.js
│  ├─ styleComponents
│  │  ├─ HeaderStyle.js
│  │  ├─ MainStyle.js
│  │  ├─ NavStyle.js
│  │  ├─ shareTaste
│  │  │  ├─ CardListStyle.js
│  │  │  ├─ CardStyle.js
│  │  │  ├─ NavStyle.js
│  │  │  └─ Typography.js
│  │  └─ style.js
│  └─ utiles
│     ├─ api.jsx
│     ├─ media.jsx
│     ├─ routes.jsx
│     └─ toast.jsx
└─ vite.config.js

```

# 클론 및 스크립트 명령어

```
git clone https://github.com/team-project-frontend/cartoon-rent-service.git
cd cartoon-rent-service
npm install
npm run dev   //실행
npm run build  //dist 파일압축
npm run deploy // 깃허브 배포

json-server --watch db.json    // 입력시  터미널 추가로 열고 루트경로 db.json 파일을  json-server 로 사용할수있습니다
```

# 커밋메세지

```
feat	새로운 기능 추가
fix	버그 수정
docs	문서 수정
style	코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우
refactor	코드 리팩터링
design	CSS 등 사용자 UI 디자인 변경
build	관련 변경 사항 빌드
revert	되돌리기
rename	파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
remove	파일을 삭제하는 작업만 수행한 경우
```

```
cartoon-rent-service
├─ README.md
├─ db.json
├─ index.html
├─ package-lock.json
├─ package.json
├─ src
│  ├─ App.jsx
│  ├─ Client.jsx
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ Cafe24Ssurround.ttf
│  │  │  ├─ NotoSansKR-Black.otf
│  │  │  ├─ NotoSansKR-Bold.otf
│  │  │  ├─ NotoSansKR-Light.otf
│  │  │  ├─ NotoSansKR-Medium.otf
│  │  │  ├─ NotoSansKR-Regular.otf
│  │  │  ├─ NotoSansKR-Thin.otf
│  │  │  ├─ Pretendard-Bold.otf
│  │  │  ├─ Pretendard-Medium.otf
│  │  │  ├─ Pretendard-Regular.otf
│  │  │  └─ Pretendard-SemiBold.otf
│  │  └─ images
│  │     ├─ btn.png
│  │     ├─ close.png
│  │     ├─ dummy.png
│  │     ├─ item_3.jpg
│  │     ├─ logo.png
│  │     ├─ nav_icon-01.svg
│  │     ├─ nav_icon-02.svg
│  │     ├─ nav_icon-03.svg
│  │     ├─ paper.svg
│  │     ├─ penalty.png
│  │     ├─ spinner2.gif
│  │     ├─ webtoonImg.png
│  │     └─ 도토리.png
│  ├─ components
│  │  ├─ Error.jsx
│  │  └─ mainComponent
│  │     ├─ Reservation.jsx
│  │     └─ shareTaste
│  │        ├─ Card.jsx
│  │        ├─ CardList.jsx
│  │        ├─ Nav.jsx
│  │        └─ ShareTaste.jsx
│  ├─ hooks
│  │  ├─ Navigate.jsx
│  │  └─ useInput.jsx
│  ├─ index.css
│  ├─ layout
│  │  ├─ Contents.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  └─ Nav.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Counter.jsx
│  │  ├─ FindID.jsx
│  │  ├─ Join.jsx
│  │  ├─ Login.jsx
│  │  ├─ Main.jsx
│  │  └─ Test.jsx
│  ├─ store
│  │  ├─ countState.js
│  │  └─ userState.js
│  ├─ styleComponents
│  │  ├─ HeaderStyle.js
│  │  ├─ MainStyle.js
│  │  ├─ NavStyle.js
│  │  ├─ shareTaste
│  │  │  ├─ CardListStyle.js
│  │  │  ├─ CardStyle.js
│  │  │  ├─ NavStyle.js
│  │  │  └─ Typography.js
│  │  └─ style.js
│  └─ utiles
│     ├─ api.jsx
│     ├─ media.jsx
│     ├─ routes.jsx
│     └─ toast.jsx
└─ vite.config.js

```
