import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function FavoriteContents(props) {
  const navigate = useNavigate();
  function navigateToCategory(category) {
    navigate(`${category}`);
  }

  return (
    <div
      style={{
        maxWidth: "1440px",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#169EF9",
          width: "100%",
          height: "466px",
          borderRadius: "150px 0px",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        id="top-area"
      >
        <div
          style={{
            fontSize: "40px",
            flexBasis: "60px",
          }}
        >
          당신의 취향은?
        </div>
        <div
          style={{
            fontSize: "18px",
            flexBasis: "30px",
          }}
        >
          취향별로 골라보는 만화책! 최고 👏👏😀😀👏
        </div>
        <div
          id="list"
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div id="icon">판타지</div>
          <div id="icon">액션</div>
          <div id="icon">로맨스</div>
          <div id="icon">미스터리</div>
          <div id="icon">코미디</div>
        </div>
      </div>
      <div
        id="wrapper"
        style={{
          padding: "120px 83.5px 120px 103px",
          width: "100%",
          height: "860px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          id="side-area"
          style={{
            flexBasis: "360px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            id="sideTitle"
            style={{
              fontSize: "40px",
              padding: "20px 0 0 20px",
              height: "262px",
            }}
          >
            <p>카테고리별</p>
            <p>인기 순위</p>
          </div>
          <div
            id="sideButtonList"
            style={{
              display: "flex",
              margin: "0 0 20px 20px",
              height: "100%",
              flexWrap: "wrap",
              alignContent: "space-between",
            }}
          >
            <button
              style={{
                width: "176px",
                height: "69px",
                borderRadius: "15px",
                backgroundColor: "#169EF9",
                color: "white",
                border: "none",
                fontSize: "29px",
              }}
              onClick={() => navigateToCategory("/")}
            >
              #작품별 🎨
            </button>
            <button
              style={{
                width: "176px",
                height: "69px",
                borderRadius: "15px",
                fontSize: "29px",
                backgroundColor: "white",
                border: "2px solid #169EF9",
              }}
              onClick={() => navigateToCategory("/bybookstore")}
            >
              #책방별 🏰
            </button>
            <button
              style={{
                width: "176px",
                height: "69px",
                borderRadius: "15px",
                fontSize: "29px",
                backgroundColor: "white",
                border: "2px solid #169EF9",
              }}
              onClick={() => navigateToCategory("/byauthor")}
            >
              #작가별 🖊️
            </button>
          </div>
        </div>
        <Outlet />
      </div>
      <div
        id="bottom-area"
        style={{
          backgroundColor: "#F2F9FF",
          height: "798px",
        }}
      >
        <div
          id="bottom-content"
          style={{
            height: "398px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "700",
              fontStyle: "normal",
            }}
          >
            <select
              style={{
                color: "#169EF9",
                border: "none",
                outline: "0",
                backgroundColor: "#F2F9FF",
                fontSize: "40px",
                fontWeight: "700",
                textAlign: "right",
              }}
            >
              <option value="박진감 넘치는">박진감 넘치는</option>
              <option value="시간 가는줄 모르는">시간 가는줄 모르는</option>
            </select>
            분위기의
          </h1>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "700",
              fontStyle: "normal",
              marginTop: "20px",
            }}
          >
            <select
              style={{
                color: "#169EF9",
                border: "none",
                outline: "0",
                backgroundColor: "#F2F9FF",
                fontSize: "40px",
                fontWeight: "700",
                textAlign: "right",
              }}
            >
              <option value="판타지">판타지</option>
              <option value="액션">액션</option>
              <option value="로맨스">로맨스</option>
              <option value="미스터리">미스터리</option>
              <option value="코미디">코미디</option>
            </select>
            만화책이 읽고싶어요.
          </h1>
          <div
            style={{
              marginTop: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                border: "2px solid #169EF9",
                borderRadius: "15px",
                width: "213px",
                height: "46px",
                backgroundColor: "white",
                margin: "0 18px",
              }}
            >
              <h3
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "21px",
                  textAlign: "center",
                  color: "#169EF9",
                }}
              >
                키워드별 랭킹 보기
              </h3>
            </button>
            <button
              style={{
                border: "2px solid #169EF9",
                borderRadius: "15px",
                width: "213px",
                height: "46px",
                backgroundColor: "#169EF9",
              }}
            >
              <h3
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "21px",
                  textAlign: "center",
                  color: "#C6E8FF",
                }}
              >
                키워드로 검색하기
              </h3>
            </button>
          </div>
        </div>
        <div
          id="slider"
          style={{
            height: "400px",
            backgroundColor: "pink",
          }}
        >
          slider
        </div>
      </div>
    </div>
  );
}
