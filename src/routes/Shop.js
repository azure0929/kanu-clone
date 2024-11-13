import { useState } from "react";
import products from "../data/products";
import "./Shop.css";
import "../App.css";

function Shop() {
  // 초기값을 0으로 설정하여 첫 번째 li가 기본으로 선택된 상태
  const [selectedIndex, setSeletedIndex] = useState(0);

  // 클릭 헨들러 함수
  const handleSelect = (index) => {
    setSeletedIndex(index);
  };

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="inner">
            <div className="intro">
              <div className="intro-inner">
                <div className="brand-introduce">
                  <h2>
                    세상에서 가장 작은 카페
                    <span> '카누'</span>
                  </h2>
                  <p>
                    깊고 풍부한 맛을 간편하게 즐기며, 최상의 커피 경험을
                    <br />
                    선사할 캡슐 커피 시스템입니다.
                  </p>
                </div>
              </div>
            </div>
            <ul>
              {["커피머신", "전용캡슐", "호환캡슐", "엑세서리"].map(
                (item, index) => (
                  <li
                    key={index}
                    className={selectedIndex === index ? "selected" : ""}
                    onClick={() => handleSelect(index)}
                  >
                    <a href="#none">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="items">
            <ul>
              {products.map((product) => (
                <li key={product.id} className="item">
                  <div className="item-content">
                    <div className="thumbnail">
                      <a href="#none">
                        <img src={product.image} alt={product.name} />
                      </a>
                    </div>
                    <div className="addCartItem">
                      <div></div>
                      장바구니 담기
                    </div>
                    <div className="product-detail">
                      <div>
                        <p className="cnb-name">{product.name}</p>
                      </div>
                      <div className="price">
                        <span>{product.price}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
