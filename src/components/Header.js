import "../App.css";

function Header() {
  return (
    <header id="cnb-header" className="cnb-header fixed left-0 top-0 w-full text-[#BE8354] text-[15px] z-50">
      <div className="cnb-header-bg relative">
        <nav className="cnb-header-inner mt-2 min-w-[1340px] max-w-[1340px] w-full mx-auto flex py-5 px-[30px] pr-[50px] bg-[#111] backdrop-blur rounded-2xl z-[1] transition-all duration-500">
          <div className="w-[90px]">
            <a href="/">
              <img src="https://kanu.co.kr/SkinImg/img/logo.png" alt="logo" />
            </a>
          </div>
          <ul className="cnb-menu-list ml-12 flex gap-11 font-medium">
            <li className="py-1">
              <a href="#none" className="p-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:bg-[#FFA257] after:w-0 after:h-[1px] hover:after:w-full after:transition-all ease-in hover:text-[#FFA257]">머신</a>
            </li>
            <li className="py-1">
              <a href="#none" className="p-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:bg-[#FFA257] after:w-0 after:h-[1px] hover:after:w-full after:transition-all ease-in hover:text-[#FFA257]">캡슐</a>
            </li>
            <li className="py-1">
              <a href="#none" className="p-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:bg-[#FFA257] after:w-0 after:h-[1px] hover:after:w-full after:transition-all ease-in hover:text-[#FFA257]">정품등록</a>
            </li>
            <li className="py-1">
              <a href="#none" className="p-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:bg-[#FFA257] after:w-0 after:h-[1px] hover:after:w-full after:transition-all ease-in hover:text-[#FFA257]">SHOP</a>
            </li>
            <li className="py-1">
              <a href="#none" className="p-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:bg-[#FFA257] after:w-0 after:h-[1px] hover:after:w-full after:transition-all ease-in hover:text-[#FFA257]">RECYCLE</a>
            </li>
            <li className="py-1">
              <a href="#none" className="p-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:bg-[#FFA257] after:w-0 after:h-[1px] hover:after:w-full after:transition-all ease-in hover:text-[#FFA257]">ABOUT US</a>
            </li>
            <li className="py-1">
              <a href="#none" className="p-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:bg-[#FFA257] after:w-0 after:h-[1px] hover:after:w-full after:transition-all ease-in hover:text-[#FFA257]">Q&amp;A</a>
            </li>
          </ul>
          <ul className="ml-auto flex gap-6 items-center">
          <li class="cnb-search-bt flex-1">
              <a href="#none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#BE8354"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.9999 20.9999L16.6499 16.6499"
                    stroke="#BE8354"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="flex-1">
              <a
                href="#none"
                class="xans-element- xans-layout xans-layout-statelogoff"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 21C4 17.134 7.58172 14 12 14C16.4183 14 20 17.134 20 21"
                    stroke="#BE8354"
                    stroke-width="1.4"
                  ></path>
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#BE8354"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <li
              class="xans-element- xans-layout xans-layout-orderbasketcount flex-1"
            >
              <a href="#none" class="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="24"
                  viewbox="0 0 22 24"
                  fill="none"
                >
                  <path
                    d="M0.789022 19.3L2.42102 5.7H15.579L17.211 19.3H0.789022Z"
                    fill="none"
                    stroke="#BE8354"
                    stroke-width="1.4"
                  ></path>
                  <path
                    d="M13 5C13 4.47471 12.8965 3.95457 12.6955 3.46927C12.4945 2.98396 12.1999 2.54301 11.8284 2.17157C11.457 1.80014 11.016 1.5055 10.5307 1.30448C10.0454 1.10346 9.52529 1 9 1C8.47471 1 7.95457 1.10346 7.46927 1.30448C6.98396 1.5055 6.54301 1.80014 6.17157 2.17157C5.80014 2.54301 5.5055 2.98396 5.30448 3.46927C5.10346 3.95457 5 4.47471 5 5"
                    stroke="#BE8354"
                    stroke-width="1.4"
                  ></path></svg>
                <span class="coupon-label absolute top-[-8px] -right-full text-sm font-medium text-[#BE8354] w-6">0</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
