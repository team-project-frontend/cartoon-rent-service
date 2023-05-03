import React, { useCallback, useEffect, useState } from "react";
import { ReservationContainer } from "../../styleComponents/MainStyle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ponyo from "../../assets/images/ponyo.png";
import tape from "../../assets/images/tape.png";
import heartFill from "../../assets/images/heart.png";
import heartNo_fill from "../../assets/images/heart_no_fill.png";

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

  return (
    <>
      <ReservationContainer
        props={tape}
        style={{
          height: "740px",
        }}
      >
        <h1 className="sectionTitle" style={{ padding: "0 60px" }}>
          내 예약 현황
        </h1>
        <div className="navigation" style={{ padding: "0 60px 50px 60px" }}>
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
          <select>
            <option value="1">전체보기</option>
            <option value="2">최근어쩌고</option>
          </select>
        </div>
        <div>
          <Carousel
            autoPlay={false}
            infiniteLoop={true}
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
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px 60px",
                  }}
                >
                  {a.data.map((c) => {
                    return (
                      <div
                        key={c.imgid}
                        className="box"
                        style={{
                          border: "1px solid",
                        }}
                      >
                        <img
                          src={c.imgUrl}
                          alt="이미지"
                          style={{ padding: "20px" }}
                        />
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
                          <span> {c.title}</span>
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
