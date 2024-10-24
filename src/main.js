import { useState } from "react";
import "./App.css";
import { tab } from "@testing-library/user-event/dist/tab";

function Main() {
  // 선택된 탭을 추적하는 상태 선언 (초기값은 'urban')
  const [activeTab, setActiveTab] = useState("urban");

  // 각 탭을 클릭할 때 호출되는 함수
  const handleTabClick = (tabType) => {
    setActiveTab(tabType); // 선택된 탭을 업데이트
  };

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="bg">
            <div className="banner"></div>
          </div>
          <section className="coffee-machine">
            <div className="tabmenu">
              <h2>카누 바리스타 전용머신</h2>
              <ul className="kanu-tab mt-3 flex gap-8">
                <li
                  className={activeTab === "urban" ? "active" : ""}
                  onClick={() => handleTabClick("urban")}
                  type="urban"
                >
                  URBAN
                </li>
                <li
                  className={activeTab === "breeze" ? "active" : ""}
                  onClick={() => handleTabClick("breeze")}
                  type="breeze"
                >
                  BREEZE
                </li>
                <li
                  className={activeTab === "pebble" ? "active" : ""}
                  onClick={() => handleTabClick("pebble")}
                  type="pebble"
                >
                  PEBBLE
                </li>
              </ul>
            </div>
            <div
              className={`kanu-tab-rander ${
                activeTab === "urban" ? "active" : "hidden"
              }`}
              type="urban"
            >
              <div className="product-img">
                <div>
                  <img
                    src="https://kanu.co.kr/layout/basic/img/main/kanuMachineUrban.jpg"
                    alt="어반"
                  />
                </div>
              </div>
              <div className="product-detail">
                <p>KANU BARISTA</p>
                <p>카누 바리스타 어반</p>
                <p>
                  우아한 라인과 소재의 사용과 3가지 컬러의 머신
                  <br />
                  모던하면서 력셔리한 공간 완성
                </p>
                <a href="#none" className="urban-shop-link">
                  SHOP
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="13"
                    viewBox="0 0 7 13"
                    fill="none"
                  >
                    <path
                      d="M1 11.5L6 6.5L1 1.5"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              className={`kanu-tab-rander ${
                activeTab === "breeze" ? "active" : "hidden"
              }`}
              type="breeze"
            >
              <div className="product-img">
                <div>
                  <img
                    src="https://kanu.co.kr/layout/basic/img/main/kanuMachineBreeze.jpg"
                    alt="브리즈"
                  />
                </div>
              </div>
              <div className="product-detail" id="product-detail-bg">
                <p>KANU BARISTA</p>
                <p>카누 바리스타 브리즈</p>
                <p>
                  기하학의 아름다움과 유연함
                  <br />
                  감성과 실용성을 담은 단순함의 미학
                </p>
                <a href="#none">
                  SHOP
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="13"
                    viewBox="0 0 7 13"
                    fill="none"
                  >
                    <path
                      d="M1 11.5L6 6.5L1 1.5"
                      stroke="#444444"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              className={`kanu-tab-rander ${
                activeTab === "pebble" ? "active" : "hidden"
              }`}
              type="pebble"
            >
              <div className="product-img">
                <div>
                  <img
                    src="https://kanu.co.kr/layout/basic/img/main/kanuMachinePebble.jpg"
                    alt="페블"
                  />
                </div>
              </div>
              <div className="product-detail" id="product-detail-bg">
                <p>KANU BARISTA</p>
                <p>카누 바리스타 페블</p>
                <p>
                  유려한 곡선과 미니멀한 디자인
                  <br />
                  작고 소중한 나만의 카페
                </p>
                <a href="#none">
                  SHOP
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="13"
                    viewBox="0 0 7 13"
                    fill="none"
                  >
                    <path
                      d="M1 11.5L6 6.5L1 1.5"
                      stroke="#444444"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </section>
          <section className="bg-[#3D3D3C] py-[100px] pb-[120px] text-white">
            <div className="w-[1280px] mx-auto text-center">
              <p className="text-[#BE8354] text-lg" data-aos="fade-up">
                KANU BARISTA Capsule
              </p>
              <p
                className="mt-3.5 text-[32px] font-semibold"
                data-aos="fade-up"
              >
                아메리카노를 위한 카누 바리스타 캡슐
              </p>
              <ul className="mt-[50px] flex gap-6">
                <li
                  className="flex-1 h-[554px] px-[90px] pt-[70px] pb-[114px] bg-[#333] flex flex-col items-center"
                  data-aos="fade-up"
                >
                  <div className="w-[200px] h-[200px]">
                    <img
                      src="/layout/basic/img/main/kanuBaristarCapsule.png"
                      alt="카누 바리스타 캡슐"
                    />
                  </div>
                  <p className="text-[22px] font-medium">카누 바리스타 캡슐</p>
                  <p className="mt-2 text-[#ddd] leading-6">
                    9.5g 풍부한 원두를 담아
                    <br />
                    완성한 아메리카노
                  </p>
                  <a
                    href="/product/list.html?cate_no=45"
                    className="mt-10 py-3.5 px-2 flex items-center justify-center gap-1 border border-white text-sm w-[140px] h-11"
                  >
                    SHOP
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                    >
                      <path
                        d="M1 11.5L6 6.5L1 1.5"
                        stroke="white"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li
                  className="flex-1 h-[554px] px-[90px] pt-[70px] pb-[114px] bg-[#333] flex flex-col items-center"
                  data-aos="fade-up"
                >
                  <div className="w-[200px] h-[200px]">
                    <img
                      src="/layout/basic/img/main/kanuNespressoCapsule.png"
                      alt="네스프레소 캡슐"
                    />
                  </div>
                  <p className="text-[22px] font-medium">
                    카누 네스프레소 호환캡슐
                  </p>
                  <p className="mt-2 text-[#ddd] leading-6">
                    풍부한 크레마로
                    <br />
                    채워진 커피의 향미
                  </p>
                  <a
                    href="/product/list.html?cate_no=46"
                    className="mt-10 py-3.5 px-2 flex items-center justify-center gap-1 border border-white text-sm w-[140px] h-11"
                  >
                    SHOP
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                    >
                      <path
                        d="M1 11.5L6 6.5L1 1.5"
                        stroke="white"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li
                  className="flex-1 h-[554px] px-[90px] pt-[70px] pb-[114px] bg-[#333] flex flex-col items-center"
                  data-aos="fade-up"
                >
                  <div className="w-[200px] h-[200px]">
                    <img
                      src="/layout/basic/img/main/kanuDolcheCapsule.png"
                      alt="돌체 캡슐"
                    />
                  </div>
                  <p className="text-[22px] font-medium">
                    카누 돌체구스토 호환캡슐
                  </p>
                  <p className="mt-2 text-[#ddd] leading-6">
                    풍부한 첫 맛과
                    <br />
                    부드러운 끝 맛의 밸런스
                  </p>
                  <a
                    href="/product/list.html?cate_no=46"
                    className="mt-10 py-3.5 px-2 flex items-center justify-center gap-1 border border-white text-sm w-[140px] h-11"
                  >
                    SHOP
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                    >
                      <path
                        d="M1 11.5L6 6.5L1 1.5"
                        stroke="white"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          {/* 머신소개,캡슐 소개 섹션 */}
          <section className="grid grid-cols-2">
            <div className="">
              <div className="h-[600px] bg-[url('/layout/basic/img/main/sepcialKanuMachine.png')] bg-center bg-cover bg-no-repeat"></div>
            </div>
            <div className="bg-[#212121] text-white items-center flex justify-start">
              <div className="w-[calc(1280px/2)] flex justify-end max-2xl:justify-center">
                <div className="inline-flex flex-col">
                  <p className="text-[#BE8354] text-lg" data-aos="fade-up">
                    Special Machine
                  </p>
                  <p className="text-[32px] font-semibold" data-aos="fade-up">
                    한번의 터치로 완성하는 캡슐 머신
                  </p>
                  <p className="mt-6 text-[#ccc] text-base" data-aos="fade-up">
                    단 한번의 터치로 카페 퀄리티의 아메리카노를
                    <br />
                    간편하게 완성 할 수 있습니다.
                  </p>
                  <a
                    href="/kanu/barista/machine"
                    className="mt-10 py-3.5 px-2 flex items-center justify-center gap-1 border border-white text-sm w-[140px] h-11"
                    data-aos="fade-up"
                  >
                    VIEW MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                    >
                      <path
                        d="M1 11.5L6 6.5L1 1.5"
                        stroke="white"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[600px] bg-white items-center flex justify-end">
              <div className="w-[calc(1280px/2)] flex justify-start max-2xl:justify-center">
                <div className="inline-flex flex-col">
                  <p className="text-[#BE8354] text-lg" data-aos="fade-up">
                    Special Capsule
                  </p>
                  <p className="text-[32px] font-semibold" data-aos="fade-up">
                    다양한 로스팅으로 즐기는 카누 캡슐
                  </p>
                  <p className="mt-6 text-[#999] text-base" data-aos="fade-up">
                    라이트 로스팅부터 다크 로스팅까지 원하는 단계별로
                    <br />
                    카누의 풍부한 캡슐을 즐겨보세요.
                  </p>
                  <a
                    href="/product/list.html?cate_no=45"
                    className="mt-10 py-3.5 px-2 flex items-center justify-center gap-1 border border-[#111] text-sm w-[140px] h-11"
                    data-aos="fade-up"
                  >
                    VIEW MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                    >
                      <path
                        d="M1 11.5L6 6.5L1 1.5"
                        stroke="#111111"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[600px] bg-[#fafafa]">
              <div className="h-[600px] bg-[url('/layout/basic/img/main/sepcialKanuCapsule.png')] bg-center bg-cover bg-no-repeat"></div>
            </div>
          </section>
          {/* 시리얼 번호 등록 섹션 */}
          <section>
            <div className="h-[490px] bg-[#222]"></div>
            <div className="-mt-[380px] w-[1280px] mx-auto">
              <h2
                className="flex items-center justify-center"
                data-aos="fade-up"
              >
                <img
                  src="/layout/basic/img/main/kanulogo-white.svg"
                  alt="kanu"
                />
              </h2>
              <p
                className="mt-4 text-[32px] font-semibold text-white text-center"
                data-aos="fade-up"
              >
                카누 바리스타 정품 등록 혜택
              </p>
              <div className="mt-[50px] h-[680px]">
                <div>
                  <img src="/layout/basic/img/main/kanuBenefit.jpg" alt="" />
                </div>
              </div>
              <div className="py-[108px] flex justify-between items-start">
                <div>
                  <p className="text-[32px] font-semibold" data-aos="fade-up">
                    카누 정품 시리얼 번호 등록
                  </p>
                  <p className="mt-4 text-base" data-aos="fade-up">
                    정품등록을 하고 카누 바리스타의 가치를
                    <br />
                    서비스를 통해 누려 보세요.
                  </p>
                  <a
                    href="/kanu/barista/royalty/index.html"
                    className="mt-10 py-3.5 px-2 flex items-center justify-center gap-1 border border-[#111] text-sm w-[140px] h-11"
                    data-aos="fade-up"
                  >
                    정품 등록하기
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                    >
                      <path
                        d="M1 11.5L6 6.5L1 1.5"
                        stroke="black"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
                <ul className="flex items-center gap-5 text-white text-[22px]">
                  <li
                    className="w-[154px] h-[154px] py-9 px-9 flex items-center justify-center flex-col cnb-gradient-main text-center rounded-[20px]"
                    data-aos="fade-up"
                  >
                    <span>
                      <strong className="font-normal text-[32px]">24</strong>
                      개월
                    </span>
                    무상보증
                  </li>
                  <li
                    className="w-[154px] h-[154px] py-9 px-9 flex items-center justify-center cnb-gradient-main text-center rounded-[20px]"
                    data-aos="fade-up"
                  >
                    클리닝
                    <br />
                    서비스
                  </li>
                  <li
                    className="w-[154px] h-[154px] py-9 px-9 flex items-center justify-center cnb-gradient-main text-center rounded-[20px]"
                    data-aos="fade-up"
                  >
                    다양한
                    <br />
                    혜택제공
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <script>AOS.init();</script>
        </div>
      </div>
    </div>
  );
}

export default Main;
