import{s as n,j as i,F as t,a as e,r as g}from"./index-14a05d80.js";const h=n.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 50px 20px;
  & > .navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  & > .slide {
    margin-top: 45px;
    margin-bottom: 25px;
    border: 1px solid;
    height: 525px;
  }
`,x=()=>i(t,{children:[i(h,{children:[e("h1",{className:"sectionTitle",children:"내 예약 현황"}),i("div",{className:"navigation",children:[e("p",{className:"subTitle",children:e("span",{children:"한 눈에 보기"})}),i("select",{children:[e("option",{value:"1",children:"전체보기"}),e("option",{value:"2",children:"최근어쩌고"})]})]}),e("div",{className:"slide"})]}),e("div",{className:"paperBg"})]}),m=n.nav`
  margin-bottom: 30px;
`,v=n.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`,l=n.div`
  display: block;
  margin-right: 40px;
`,r=n.li`
  font-family: "Noto Sans";
  cursor: pointer;
  font-size: 13px;
  text-align: center;
  color: #bebebe;
  margin-bottom: 5px;
  ${({active:c})=>c&&`
    font-weight: bold;
    text-decoration: underline;
  `};
`,s=n.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #bebebe;
  margin-top: 10px;
  margin: auto;
`;function u({onChangeFilter:c}){const[o,f]=g.useState("all"),a=p=>{f(p),c(p)};return e(m,{children:i(v,{children:[i(l,{children:[i(r,{className:`navigation__item ${o==="available"?"navigation__item--active":""}`,onClick:()=>a("available"),children:["대여 가능한",e("br",{})," 책만 보기"]}),e(s,{})]}),i(l,{children:[i(r,{className:`navigation__item ${o==="comment"?"navigation__item--active":""}`,onClick:()=>a("comment"),children:["댓글순",e("br",{}),"내림차순"]}),e(s,{})]}),i(l,{children:[i(r,{className:`navigation__item ${o==="like"?"navigation__item--active":""}`,onClick:()=>a("like"),children:["좋아요순",e("br",{}),"내림차순"]}),e(s,{})]}),i(l,{children:[i(r,{className:`navigation__item ${o==="view"?"navigation__item--active":""}`,onClick:()=>a("view"),children:["조회순",e("br",{}),"내림차순"]}),e(s,{})]})]})})}const b="/cartoon-rent-service/assets/images/webtoonImg.53511647.png",y=n.div`
  width: 270px;
  height: 465px;
  background: #ffffff;
`,w=n.div``,N=n.div`
  display: flex;
  width: 280px;
  height: 186px;
  //   background: red;
  justify-content: space-between;
  padding-top: 75px;
  //   margin-right:10px;
  //   margin-left:10px
  background-image: url(${b});
  border-radius: 15px;
`,k=n.span`
  font-family: "Cafe24 Ssurround";
  margin-left: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 113px;
  color: #ff8f50;
`,C=n.button`
  width: 39px;
  height: 36px;
  background: #ff8f50;
  border: 3px solid #ff8f50;
  margin-top: 40px;
  margin-right: 20px;
`,_=n.span`
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;

  color: #ffffff;
`,S=n.div`
  width: 100%;
  //   margin-right: 20px;
  //   margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,z=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`,j=n.span`
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 34px;
  text-align: center;
  color: #555555;
`,T=n.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  /* identical to box height */

  color: #ff8f50;
`,R=n.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`,I=n.div`
  display: flex;
  justify-content: space-between;

  //   align-items: center;
`,$=n.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  padding-left: 10px;
  /* identical to box height */

  color: #222222;
`,W=n.span`
  padding-right: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  color: #000000;
`,L=n.span`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  /* sub txt */

  color: #555555;
`,d=()=>e(t,{children:i(y,{children:[e(w,{children:i(N,{children:[e(k,{children:"1"}),e(C,{children:e(_,{children:"110"})})]})}),i(S,{children:[i(z,{children:[e(j,{children:"기다린 것에 비해서..."}),e(T,{children:"[도서관의 주인]"})]}),i(R,{children:[i(I,{children:[e($,{children:"HEeeeeee"}),e(W,{children:"댓글(3)"})]}),e(L,{children:"내용이 뭔소린지 모르겠음..... 근데 너무너무 재미있음....왜 이렇게 많은지는 잘 모르겠음...."})]})]})]})}),F=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  margin-top: 50px;
`,H=()=>e(t,{children:i(F,{children:[e(d,{}),e(d,{}),e(d,{})]})});n.span`
  /* h1 */
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: #222222;
`;n.span`
  /* h2 gothic */

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 39px;

  /* sub txt */

  color: #555555;
`;n.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
`;const A=()=>e(t,{children:i(h,{children:[e("h1",{className:"sectionTitle",children:"취향 공유하기"}),i("div",{className:"navigation",children:[e("p",{className:"subTitle",children:e("span",{children:"👀한 눈에 보기"})}),e(u,{})]}),e("div",{className:"slide",children:e(H,{})})]})}),E=()=>e(t,{children:i("div",{className:"mainWrap",children:[e("div",{style:{width:"100%",height:"500px",background:" #ddd",textAlign:"center",lineHeight:"250px",fontSize:"36px",borderRadius:"0px 0px 150px 0px"},children:"배너영역"}),e(x,{}),e(A,{})]})});export{E as default};
