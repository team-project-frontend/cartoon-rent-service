import React, { useCallback, useEffect, useState } from "react";
import { ReservationContainer } from "../../styleComponents/MainStyle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ponyo from "../../assets/images/ponyo.png";
import tape from "../../assets/images/tape.png";
import heartFill from "../../assets/images/heart.png";
import heartNo_fill from "../../assets/images/heart_no_fill.png";
import bg from "../../assets/images/bg.png";
import { Media768 } from "../../utiles/media";

const Reservation = () => {
  //api 통신으로 꼽을 배열
  const [slideData, setSlideData] = useState([
    {
      id: 0,
      data: [
        {
          imgid: "0",
          imgUrl: ponyo,
          title: "1번데이터",
          status: "연체중",
          like: false,
        },
        {
          imgid: "1",
          imgUrl: ponyo,
          title: "2번데이터",
          status: "대기중",
          like: true,
        },
        {
          imgid: "2",
          imgUrl: ponyo,
          title: "3번데이터",
          status: "대여중",
          like: false,
        },
        {
          imgid: "3",
          imgUrl: ponyo,
          title: "4번데이터",
          status: "연체중",
          like: false,
        },
      ],
    },
    {
      id: 1,
      data: [
        {
          imgid: "4",
          imgUrl: ponyo,
          title: "5번데이터",
          status: "대여중",
          like: false,
        },
        {
          imgid: "5",
          imgUrl: ponyo,
          title: "6번데이터",
          status: "대기중",
          like: false,
        },
        {
          imgid: "6",
          imgUrl: ponyo,
          title: "7번데이터",
          status: "연체중",
          like: false,
        },
        {
          imgid: "7",
          imgUrl: ponyo,
          title: "8번데이터",
          status: "대기중",
          like: false,
        },
      ],
    },
  ]);

  const [slideIndex, setSlideInde] = useState(0);

  const handleClick = useCallback(
    (e, value) => {
      if (value === e.currentTarget.dataset.id) {
        console.log(e.currentTarget.dataset.id, "클릭데이터 아이디");
        console.log(value, "클릭 아이디");
      }
    },
    [slideData.data]
  );

  const handleChage = useCallback(
    (e) => {
      setSlideInde(e);
    },
    [slideIndex]
  );
  const propsData = Media768();

  return (
    <>
      <ReservationContainer props={Media768}>
        <h1
          className="sectionTitle"
          style={
            Media768()
              ? { padding: "0 60px", textAlign: "center" }
              : { padding: "0 60px" }
          }
        >
          내 예약 현황
        </h1>
        <div
          className="navigation"
          style={
            Media768()
              ? { padding: "0 60px 50px 60px", justifyContent: "center" }
              : { padding: "0 60px 50px 60px" }
          }
        >
          <p className="subTitle">
            <span
              style={{
                borderBottom: "2px solid #ff8f50",
                paddingBottom: "5px",
              }}
            >
              👀한 눈에 보기
            </span>
          </p>
          {!Media768() && (
            <select>
              <option value="1">전체보기</option>
              <option value="2">최근어쩌고</option>
            </select>
          )}
        </div>
        <div className="slideClass">
          <Carousel
            autoPlay={false}
            infiniteLoop={Media768 ? true : false}
            showThumbs={false}
            emulateTouch={true}
            swipeable={true}
            showIndicators={false}
            showStatus={false}
            onChange={handleChage}
          >
            {slideData.map((a) => {
              return (
                <div
                  className="con"
                  key={a.id}
                  style={
                    Media768()
                      ? {
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          // padding: "20px 60px",
                          // gap: "50px",
                        }
                      : {
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "20px 60px",
                          gap: "50px",
                        }
                  }
                >
                  {a.data.map((c) => {
                    return (
                      <div
                        key={c.imgid}
                        className="box"
                        style={{
                          background: "#fff",
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <div className="imgBox"></div>
                          <div className="dim"></div>
                          <div>
                            <img
                              src={c.imgUrl}
                              alt="이미지"
                              style={{ padding: "15%" }}
                            />
                          </div>
                          {c.status === "연체중" ? (
                            <img
                              src={bg}
                              alt="패널티 이미지"
                              style={{
                                padding: "15%",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                height: "100%",
                              }}
                            />
                          ) : null}
                          <div className="imgBox2"></div>
                        </div>
                        <p
                          style={{
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: "25px",
                          }}
                        >
                          &lt;{c.status}&gt;
                        </p>
                        <p
                          data-id={c.imgid}
                          onClick={(e) => {
                            handleClick(e, c.imgid);
                          }}
                          style={{
                            cursor: "pointer",
                            display: "inline-block",
                            marginTop: "5px",
                          }}
                        >
                          <span>
                            <img
                              src={c.like ? heartFill : heartNo_fill}
                              style={{
                                width: "14px",
                                height: "12px",
                              }}
                            />
                          </span>
                          <span
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            {c.title}
                          </span>
                        </p>
                        <p
                          style={{
                            marginTop: "15px",
                            fontSize: "18px",
                            color: "#FF8F50",
                          }}
                        >
                          <span
                            style={{
                              letterSpacing: "-1px",
                            }}
                          >
                            잔여 시간 03 : 08: 36
                          </span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
      </ReservationContainer>
      <div className="paperBg"></div>
    </>
  );
};

export default Reservation;
