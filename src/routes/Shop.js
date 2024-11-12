import { useState } from "react";
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
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/a249921bb55e07c7ed74a21578efe14a.png"
                        alt="카누 바리스타 머신 어반 스노우 화이트"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">
                        카누 바리스타 머신 어반 스노우 화이트
                      </p>
                    </div>
                    <div className="price">
                      <span>199,000원</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/7fe131241ded1be5284db63796c257d3.png"
                        alt="카누 바리스타 머신 어반 오로라 블랙"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">
                        카누 바리스타 머신 어반 오로라 블랙
                      </p>
                    </div>
                    <div className="price">
                      <span>199,000원</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/28f4a0e10a3e15fdd5307315bfae9e39.png"
                        alt="카누 바리스타 머신 어반 차콜 브라운"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">
                        카누 바리스타 머신 어반 차콜 브라운
                      </p>
                    </div>
                    <div className="price">
                      <span>199,000원</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/fb30f229d13a5abedf38e556a98fa08f.png"
                        alt="카누 바리스타 머신 브리즈 파스텔 핑크"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">
                        카누 바리스타 머신 브리즈 파스텔 핑크
                      </p>
                    </div>
                    <div className="price">
                      <span>169,000원</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/d5756d6ab39a81ceac60b21091538ee5.png"
                        alt="카누 바리스타 머신 브리즈 캐슬그레이"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">
                        카누 바리스타 머신 브리즈 캐슬그레이
                      </p>
                    </div>
                    <div className="price">
                      <span>169,000원</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/343ca405aa2892075d80491eeb901b2d.png"
                        alt="카누 바리스타 머신 브리즈 파스텔 블루"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">
                        카누 바리스타 머신 브리즈 파스텔 블루
                      </p>
                    </div>
                    <div className="price">
                      <span>169,000원</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/87f5c92fdbcbf9a0dd5fc718169ed4c8.png"
                        alt="카누 바리스타 머신 브리즈 샌드 베이지"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">
                        카누 바리스타 머신 브리즈 샌드 베이지
                      </p>
                    </div>
                    <div className="price">
                      <span>169,000원</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/8a14c71854cafbb7852cf0abd8f9e40a.png"
                        alt="카누 바리스타 머신 브리즈 크림 화이트"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">
                        카누 바리스타 머신 브리즈 크림 화이트
                      </p>
                    </div>
                    <div className="price">
                      <span>169,000원</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/4885199f1698e403f33802a3d1933718.png"
                        alt="카누 바리스타 머신 페블 블랙"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">카누 바리스타 머신 페블 블랙</p>
                    </div>
                    <div className="price">
                      <span>149,000원</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item-content">
                  <div className="thumbnail">
                    <a href="#none">
                      <img
                        src="https://kanu.co.kr/web/product/medium/202410/19f6d000782d7cf1fa3db11dfb7aa299.png"
                        alt="카누 바리스타 머신 페블 화이트"
                      />
                    </a>
                  </div>
                  <div className="addCartItem">
                    <div></div>
                    장바구니 담기
                  </div>
                  <div className="product-detail">
                    <div>
                      <p className="cnb-name">카누 바리스타 머신 페블 화이트</p>
                    </div>
                    <div className="price">
                      <span>149,000원</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
