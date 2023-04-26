import { useState } from "react";
import {Nav,List,Item,Circle,ItemWrapper} from "../../../styleComponents/shareTaste/NavStyle";

function Navigation({ onChangeFilter }) {
  const [active, setActive] = useState("all");

  const handleClick = (filter) => {
    setActive(filter);
    onChangeFilter(filter);
  };

  return (
    <Nav> 
      <List >
        <ItemWrapper>
        <Item
          className={`navigation__item ${
            active === "available" ? "navigation__item--active" : ""
          }`}
          onClick={() => handleClick("available")}
        >
          대여 가능한<br/> 책만 보기
         
        </Item>
        <Circle/>
        </ItemWrapper>
        <ItemWrapper>
        <Item
          className={`navigation__item ${
            active === "comment" ? "navigation__item--active" : ""
          }`}
          onClick={() => handleClick("comment")}
        >
          댓글순<br/>내림차순
         
        </Item>
        <Circle/>
        </ItemWrapper>
        <ItemWrapper>
        <Item
          className={`navigation__item ${
            active === "like" ? "navigation__item--active" : ""
          }`}
          onClick={() => handleClick("like")}
        >
          좋아요순<br/>내림차순
        
        </Item>
        <Circle/>
        </ItemWrapper>
        <ItemWrapper>
        <Item
          className={`navigation__item ${
            active === "view" ? "navigation__item--active" : ""
          }`}
          onClick={() => handleClick("view")}
        >
          조회순<br/>내림차순
         
        </Item>
        <Circle/>
        </ItemWrapper>
      </List>
    </Nav>
  );
}

export default Navigation;