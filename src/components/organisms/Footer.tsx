import React from 'react';
import Logo from '@/assets/svg/logo-color.svg';
import CodeIcon from '@/assets/svg/code.svg';
import PeopleIcon from '@/assets/svg/people.svg';
import KORIcon from '@/assets/svg/kor.svg';
import SettingIcon from '@/assets/svg/setting.svg';
import RightArrowIcon from '@/assets/svg/right-arrow.svg';

const serviceData = [
  { label: '해외 개발자 원격 채용', icon: <CodeIcon /> },
  { label: '외국인 원격 채용 (비개발)', icon: <PeopleIcon /> },
  { label: '한국어 가능 외국인 채용', icon: <KORIcon /> },
  { label: '해외 개발자 활용 서비스', icon: <SettingIcon /> },
];

function Footer() {
  return (
    <footer className={'max-w-screen-xl mx-auto my-[80px] px-[16px] bg-[#FBFBFB]'}>
      <div className={'flex flex-col md:flex-row justify-between items-start gap-[18px]'}>
        <div className={'w-[274px]'}>
          <Logo />
          <p className={'mt-[18px] mb-[16px] text-[#343741] font-black'}>
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </p>
          <p className={'mb-[8px] font-black text-[13px] text-[#5E626F]'}>010-0000-0000</p>
          <p className={'font-black text-[13px] text-[#5E626F]'}>aaaaa@naver.com</p>
        </div>

        <div className={'flex flex-wrap gap-[15px]'}>
          {serviceData.map((s) => (
            <div key={s.label} className={'bg-white p-[16px] rounded-[12px] min-w-[187px]'}>
              {s.icon}

              <p className={'mt-[12px] mb-[16px] font-black text-[#343741]'}>{s.label}</p>

              <div className={'flex flex-row gap-[4px] items-center'}>
                <p className={'font-black text-[#5E626F]'}>바로가기</p>
                <RightArrowIcon />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[40px] flex flex-col md:flex-row md:justify-between gap-12 text-inactive font-black text-[#343741]">
        <div className="grid grid-cols-5 gap-2 ">
          <p className="col-span-3">상호명</p>
          <p className="col-span-2">
            대표 <span className="font-black">CEO</span>
          </p>
          <p className="col-span-3">하이퍼하이어</p>
          <p className="col-span-2">김주현</p>
          <p className="col-span-3 font-black text-[#5E626F]">Hyperhire India Private Limited</p>
          <p className="col-span-2 font-black text-[#5E626F]">Juhyun Kim</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>
            사업자등록번호 <span className="font-black">CIN</span>
          </p>
          <p>427-86-01187</p>
          <p className={'text-[#5E626F]'}>U74110DL2016PTC290812</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className={'font-black'}>주소 ADDRESS</p>
          <p className={'font-black'}>서울특별시 강남대로 479, 지하 1층 238호 </p>
          <p className={'font-black text-[#5E626F]'}>
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
