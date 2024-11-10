import React from 'react';
import Avatar from '@/assets/images/avatar.png';
import Image from 'next/image';

function Tag({ title }: { title: string }) {
  return (
    <p
      className={
        'rounded-[6px] border border-[#C1C5CF] px-[12px] py-[4px] font-black text-[14px] md:text-[16px] text-[#5E626F]'
      }>
      {title}
    </p>
  );
}

function Card() {
  return (
    <div
      className={
        'rounded-[12px] bg-white py-[36px] px-[16px] md:px-[36px] flex flex-col items-center min-w-[234px]  md:min-w-[292px] '
      }>
      <Image src={Avatar} alt={''} height={120} width={120} />
      <h1 className={'mt-[16px] text-[18px] md:text-[24px] font-black'}>Abhishek Gupta</h1>
      <p className={'text-[#4A77FF]'}>
        마케팅 <span className={'font-black'}>· 2y+</span>
      </p>

      <div className={'flex flex-wrap mt-[16px] md:mt-[36px] gap-[4px] items-center justify-center'}>
        <Tag title={'마케팅 콘텐츠 제작'} />
        <Tag title={'인스타그램 관리'} />
        <Tag title={'트위터 관리'} />
        <Tag title={'블로그 글 작성'} />
      </div>
    </div>
  );
}

export default Card;
