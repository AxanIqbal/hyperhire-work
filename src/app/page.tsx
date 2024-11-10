'use client';

import Hero from '@/assets/images/hero-bg.png';
import Header from '@/components/organisms/Header';
import InfoTooltip from '@/components/molecules/Tooltip';
import Offers from '@/components/molecules/Offers';
import PeopleCarousal from '@/components/organisms/PeopleCarousal';
import FeatureCarousal from '@/components/organisms/FeatureCarousal';

export default function Home() {
  return (
    <main>
      <section
        className={'relative bg-cover bg-no-repeat pb-[60px] md:pb-[100px]'}
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(38, 194, 185,0.8), rgb(40, 139, 231,0.8)), url("${Hero.src}")`,
        }}>
        <Header />

        <div className={'mx-auto flex flex-col max-w-screen-xl'}>
          <div className={'flex flex-col lg:flex-row gap-[36px] md:gap-[14px] px-[16px] mt-[36px] md:mt-[61px] '}>
            <div className={'flex-1'}>
              <InfoTooltip
                className="animate-fadeUp delay-300 opacity-0"
                cardClassName={'bg-[#8BC4FF] md:bg-white'}
                arrowClassName={'bg-[#8BC4FF] md:bg-white'}>
                <p className={'text-white md:text-[#40E2E8] font-black'}>풀타임, 파트타임</p>
              </InfoTooltip>
              <h1 className={'animate-fadeUp font-black text-[36px] md:text-[48px] text-white mb-[16px]'}>
                최고의 실력을 가진 외국인 인재를 찾고 계신가요?
              </h1>
              <h3 className={'font-black text-[18px] md:text-[24px] text-white mb-0 md:mb-[24px] animate-fadeUp'}>
                법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
              </h3>
              <h5 className={'font-black hidden md:block text-[18px] text-white animate-fadeUp underline'}>
                개발자가 필요하신가요?
              </h5>

              <Offers className={'mt-[60px] hidden md:flex animate-fadeIn'} />
            </div>

            <PeopleCarousal className={'flex-1'} />
          </div>

          <FeatureCarousal className={' max-w-screen-xl mt-[60px] animate-fadeIn'} />
        </div>
      </section>
    </main>
  );
}
