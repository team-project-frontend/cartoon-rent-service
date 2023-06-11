import React from "react";
import { ReservationContainer } from "../styleComponents/MainStyle";
import { Media768 } from "../utiles/media";
import comedyImg from "../assets/images/comedyimg.png";
import minteryImg from "../assets/images/minteryimg.png";
import romanceImg from "../assets/images/romance_img.png";
import actionImg from "../assets/images/action_img.png";
import pantasyImg from "../assets/images/pantasy_img.png";

const Favorite = () => {
  return (
    <div>
      <div
        style={{
          padding: Media768() ? "50px 0px" : "50px 0px",

          background: "#FF8F50",
          borderRadius: "150px 0px",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <div className="favoriteTitle">당신의 취향은?</div>
        <div
          className="favoriteSubTitle"
          style={{
            marginBottom: !Media768() ? "50px" : "35px",
          }}
        >
          취향별로 골라보는 만화책! 최고 👏👏😀😀👏
        </div>
        {!Media768() ? (
          <div
            className="favoriteIconBox"
            style={{
              display: "flex",
              maxWidth: "1440px",
              margin: "0 auto",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "20%",
                height: "220px",
              }}
            >
              <div
                className="icon1"
                style={{
                  padding: "50%",
                }}
              ></div>
              <p style={{ color: "#FFFFFF", margin: "0px 0 10px" }}>판타지</p>
              <p
                style={{
                  color: "#DDDDDD",
                  fontSize: "13px",
                }}
              >
                Pantasy
              </p>
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                className="icon2"
                style={{
                  padding: "50%",
                }}
              ></div>
              <p style={{ color: "#FFFFFF", margin: "0px 0 10px" }}>액션</p>
              <p
                style={{
                  color: "#DDDDDD",
                  fontSize: "13px",
                }}
              >
                Action
              </p>
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                className="icon3"
                style={{
                  padding: "50%",
                }}
              ></div>
              <p style={{ color: "#FFFFFF", margin: "0px 0 10px" }}>로맨스</p>
              <p
                style={{
                  color: "#DDDDDD",
                  fontSize: "13px",
                }}
              >
                Romance
              </p>
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                className="icon4"
                style={{
                  padding: "50% ",
                }}
              ></div>
              <p style={{ color: "#FFFFFF", margin: "0px 0 10px" }}>미스터리</p>
              <p
                style={{
                  color: "#DDDDDD",
                  fontSize: "13px",
                }}
              >
                Mistery
              </p>
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                className="icon5"
                style={{
                  padding: "50% ",
                }}
              ></div>
              <p style={{ color: "#FFFFFF", margin: "0px 0 10px" }}>코미디</p>
              <p
                style={{
                  color: "#DDDDDD",
                  fontSize: "13px",
                }}
              >
                Comedy
              </p>
            </div>
          </div>
        ) : (
          <div
            className="favoriteIconBox"
            style={{
              maxWidth: "767px",
              padding: "0 30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20%",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "calc(50% - 20%)",
                }}
              >
                <div
                  className="icon4"
                  style={{
                    padding: "30%",
                    backgroundSize: "contain",
                  }}
                ></div>
                <p style={{ color: "#FFFFFF", margin: "20px 0 10px" }}>
                  미스터리
                </p>
                <p
                  style={{
                    color: "#DDDDDD",
                    fontSize: "13px",
                  }}
                >
                  Mistery
                </p>
              </div>
              <div
                style={{
                  width: "calc(50% - 20%)",
                }}
              >
                <div
                  className="icon5"
                  style={{
                    padding: "30% ",
                    backgroundSize: "contain",
                  }}
                ></div>
                <p style={{ color: "#FFFFFF", margin: "20px 0 10px" }}>
                  코미디
                </p>
                <p style={{ color: "#DDDDDD", fontSize: "13px" }}>Comedy</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10%",
              }}
            >
              <div
                style={{
                  height: "120px",
                  width: "calc(50% - 20%)",
                }}
              >
                <div
                  className="icon1"
                  style={{
                    padding: "30% ",
                    backgroundSize: "contain",
                  }}
                ></div>
                <p style={{ color: "#FFFFFF", margin: "20px 0 10px" }}>
                  판타지
                </p>
                <p
                  style={{
                    color: "#DDDDDD",
                    fontSize: "13px",
                  }}
                >
                  Pantasy
                </p>
              </div>
              <div
                style={{
                  width: "calc(50% - 20%)",
                }}
              >
                <div
                  className="icon2"
                  style={{
                    padding: "30% ",
                    backgroundSize: "contain",
                  }}
                ></div>
                <p style={{ color: "#FFFFFF", margin: "20px 0 10px" }}>액션</p>
                <p
                  style={{
                    color: "#DDDDDD",
                    fontSize: "13px",
                  }}
                >
                  Action
                </p>
              </div>
              <div
                style={{
                  width: "calc(50% - 20%)",
                }}
              >
                <div
                  className="icon3"
                  style={{
                    padding: "30% ",
                    backgroundSize: "contain",
                  }}
                ></div>
                <p style={{ color: "#FFFFFF", margin: "20px 0 10px" }}>
                  로맨스
                </p>
                <p
                  style={{
                    color: "#DDDDDD",
                    fontSize: "13px",
                  }}
                >
                  Romance
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <ReservationContainer props={Media768}>
        <div className="favorite_con">
          <div></div>
          <div></div>
        </div>
      </ReservationContainer>
    </div>
  );
};

export default Favorite;
