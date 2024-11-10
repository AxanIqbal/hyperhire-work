import Image from 'next/image';
import Hero from '@/assets/images/hero-bg.png';
import Header from '@/components/organisms/Header';

export default function Home() {
  return (
    <main className={'font-[family-name:var(--font-poppins)]'}>
      <section className={'relative min-h-[90vh]'}>
        <Image src={Hero} alt={''} fill className={'object-cover -z-10'} />

        <Header />

        <div className={'flex gap-[36px] md:gap-[14px] mx-auto px-[16px] mt-[36px] md:mt-[61px] max-w-screen-lg'}>
          <div>
            <h1 className={'font-[900] text-[36px] md:text-[48px] text-white mb-[16px]'}>
              최고의 실력을 가진 외국인 인재를 찾고 계신가요?
            </h1>
            <h3 className={'font-[900] text-[18px] md:text-[24px] text-white mb-0 md:mb-[24px]'}>
              법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
            </h3>
            <h5 className={'font-[900] hidden md:block text-[18px] text-white'}>개발자가 필요하신가요?</h5>
          </div>

          <div />
        </div>
      </section>
    </main>
  );
}
