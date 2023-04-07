# cartoon-rent-service

# 파일트리

```
cartoon-rent-service
├─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ src
│  ├─ App.jsx
│  ├─ Client.jsx
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ NotoSansKR-Black.otf
│  │  │  ├─ NotoSansKR-Bold.otf
│  │  │  ├─ NotoSansKR-Light.otf
│  │  │  ├─ NotoSansKR-Medium.otf
│  │  │  ├─ NotoSansKR-Regular.otf
│  │  │  ├─ NotoSansKR-Thin.otf
│  │  │  ├─ Pretendard-Bold.otf
│  │  │  ├─ Pretendard-Medium.otf
│  │  │  ├─ Pretendard-Regular.otf
│  │  │  ├─ Pretendard-SemiBold.otf
│  │  │  ├─ oehalmeoni.ttf
│  │  │  ├─ ogbich.ttf
│  │  │  └─ 휴먼범석체.ttf
│  │  └─ images
│  │     ├─ item_3.jpg
│  │     └─ spinner2.gif
│  ├─ atoms
│  │  └─ countAtom.js
│  ├─ components
│  │  ├─ Contents.jsx
│  │  └─ Error.jsx
│  ├─ hooks
│  │  └─ Navigate.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Counter.jsx
│  │  ├─ Join.jsx
│  │  ├─ Login.jsx
│  │  ├─ Main.jsx
│  │  └─ Test.jsx
│  ├─ styleComponents
│  │  └─ style.js
│  └─ utiles
│     ├─ routes.jsx
│     └─ toast.jsx
└─ vite.config.js

 - assets:소스 파일 경로입니다 (확장자 추가시 vite.config 에서 수정)
 - hooks:리액트 커스텀 훅 (UseNavigate,useState,useCallback 등등)
 - atoms: redux store 처럼 모아둘 예정입니다
 - components:페이지와 달리 공용으로 사용하는 컴포넌트
 - pages: 페이지 모음 (상세페이지 같은 하위 컴포넌트는 폴더로 묶을 필요가 있어보입니다)
 - styleComponents: 스타일 컴포넌트 폴더
 - utiles:공공적으로 사용될 함수,데이터,라우터 등등 
 - vite.config.js:빌드 및 소스경로 개발서버 설정 등

 추가사항:axios 커스텀 파일 필요


```

# 클론 및 스크립트 명령어

```
git clone https://github.com/team-project-frontend/cartoon-rent-service.git
cd cartoon-rent-service
npm install
npm run dev   //실행
npm run build  //dist 파일압축
npm run deploy // 깃허브 배포
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
