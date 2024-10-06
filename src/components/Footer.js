import "../App.css";

function Footer() {
  return (
    <footer className="cnb-footer text-[#EDECEC] bg-[#111] py-[60px] text-sm fixed bottom-0 left-0 right-0">
      <div className="w-[1280px] mx-auto flex gap-[108px] justify-between">
        <div className="flex-[0_1_242px]">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="242"
              height="54"
              viewBox="0 0 242 54" // 수정: viewbox → viewBox
              fill="none"
            >
              <g clipPath="url(#clip0_593_2671)"> // 수정: clip-path → clipPath
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
                <clipPath id="clip0_593_2671"> // 수정: clip-path → clipPath
                  <rect width="242" height="54" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div className="flex-1">
          <div className="mb-[28px] font-semibold text-base">동서식품(주)</div>
          <ul className="xans-element- xans-layout xans-layout-footer grid grid-cols-2 gap-y-2.5 gap-x-[200px] justify-between ">
            <li className="flex items-center gap-2">
              <span>CEO</span>
              <p className="text-[#AEABAB] font-medium">김광수, RUTH KJELL NIKLAS</p>
            </li>
            <li className="xans-element- xans-layout xans-layout-info flex items-center gap-3 ">
              <span>TEL</span>
              <p className="text-[#AEABAB] font-medium">
                080-023-9114 ( LUNCH : PM 12:30 - PM 13:45 )
              </p>
            </li>
            <li className="flex items-center gap-2">
              <span>ADDRESS</span>
              <p className="text-[#AEABAB] font-medium">인천광역시 부평구 새벌로 55 (청천동) 동서식품</p>
            </li>
            <li className="flex items-center gap-2">
              <span>MALL ORDER LICENSE</span>
              <p className="text-[#AEABAB] font-medium">제2011-인천부평-00394호</p>
            </li>
            <li className="flex items-center gap-2">
              <span>BUSINESS LICENSE</span>
              <p className="text-[#AEABAB] font-medium">122-81-00804</p>
              <div
                className="relative p-2 inline-flex items-center justify-center w-fit h-[32px] text-[12px] text-[#EDECEC] border border-[#7C7777] rounded cursor-pointer"
              >
                사업자정보확인
              </div>
            </li>
          </ul>
          <div className="mt-12">
            <ul className="flex gap-9 -mx-1">
              <li>
                <a href="#none" className="p-1">이용약관</a>
              </li>
              <li>
                <a href="#none" className="p-1">개인정보 처리방침</a>
              </li>
              <li>
                <a href="#none" className="p-1">1:1 문의</a>
              </li>
              <li>
                <a href="#none" className="p-1">FAQ</a>
              </li>
            </ul>
            <p className="mt-3 text-[#625E5E] font-medium">Copyright © 동서식품(주). all right reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
