import "../App.css";

function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="photo">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="242"
              height="54"
              viewbox="0 0 242 54"
              fill="none"
            >
              <g clip-path="url(#clip0_593_2671)">
                <path
                  d="M0 0.383789H1.89315V36.0339L43.6579 0.383789H46.2898L20.0859 22.6096L47.2364 53.1726H44.9046L18.793 23.7401L1.89315 38.1333V53.1726H0V0.383789Z"
                  fill="#C2866D"
                ></path>
                <path
                  d="M126.91 0.363281L128.549 0.383468L174.401 50.4268V0.363281L176.224 0.383468V53.1723H174.585L128.734 3.08852V53.1723H126.91V0.363281Z"
                  fill="#C2866D"
                ></path>
                <path
                  d="M85.6995 0H84.0834L55.0166 53.1723H56.979L65.6136 37.3256L67.1374 34.5802L84.8222 2.18019L102.876 35.2464L104.054 37.3256L112.688 53.1723H114.766L85.6995 0Z"
                  fill="#C2866D"
                ></path>
                <path
                  d="M193.194 29.7759V0.383789H195.087V29.7759C195.087 44.9363 204.298 52.4862 217.666 52.4862C231.033 52.4862 240.084 44.9565 240.084 29.8769V0.383789H241.977V29.7759C241.977 45.9255 232.165 54.0002 217.597 54.0002C203.029 54.0002 193.17 46.0062 193.17 29.7759"
                  fill="#C2866D"
                ></path>
              </g>
              <defs>
                <clippath id="clip0_593_2671">
                  <rect width="242" height="54" fill="white"></rect>
                </clippath>
              </defs>
            </svg>
          </a>
        </div>
        <div className="content">
          <div className="company">동서식품(주)</div>
          <ul>
            <li>
              <span>CEO</span>
              <p>김광수, RUTH KJELL NIKLAS</p>
            </li>
            <li>
              <span>TEL</span>
              <p>080-023-9114 ( LUNCH : PM 12:30 - PM 13:45 )</p>
            </li>
            <li>
              <span>ADDRESS</span>
              <p>인천광역시 부평구 새벌로 55 (청천동) 동서식품</p>
            </li>
            <li>
              <span>MALL ORDER LICENSE</span>
              <p>제2011-인천부평-00394호</p>
            </li>
            <li>
              <span>BUSINESS LICENSE</span>
              <p>122-81-00804 </p>
              <div className="confirm">사업자정보확인</div>
            </li>
          </ul>
          <div className="copyright">
            <ul>
              <li>
                <a href="#none">이용약관</a>
              </li>
              <li>
                <a href="#none">개인정보 처리방침</a>
              </li>
              <li>
                <a href="#none">1:1문의</a>
              </li>
              <li>
                <a href="#none">이용약관</a>
              </li>
            </ul>
            <p>Copyright © 동서식품(주). all right reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
