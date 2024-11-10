'use client';

import React, { useRef } from 'react';
import InfoTooltip from '@/components/molecules/Tooltip';
import { ResponsiveContainer, StackedCarousel } from 'react-stacked-center-carousel';
import Card from '@/components/molecules/Card';
import { cn } from '@/lib/utils';
import MoneyIcon from '@/assets/svg/money.svg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useWindowSize } from 'react-use';

interface PeopleCarousalProps {
  className?: string;
}

function PeopleCarousal({ className }: PeopleCarousalProps) {
  const ref = useRef<StackedCarousel | undefined>();

  return (
    <div className={cn('max-w-3xl relative flex flex-col', className)}>
      <InfoTooltip
        arrowPosition="center"
        className="self-center mb-8 animate-fadeIn"
        cardClassName={'flex gap-[10px] items-center'}>
        <MoneyIcon />
        <p className={'text-[#00C696] font-black'}>월 100만원</p>
      </InfoTooltip>

      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => (
          <StackedCarousel
            ref={carouselRef}
            slideComponent={Card}
            slideWidth={parentWidth < 500 ? parentWidth * 0.6 : parentWidth * 0.5}
            carouselWidth={parentWidth}
            data={[1, 2, 3]}
            currentVisibleSlide={3}
            maxVisibleSlide={3}
            useGrabCursor
          />
        )}
      />

      <>
        <div
          className="absolute top-[50%] left-[10px] z-10 cursor-pointer animate-fadeIn"
          onClick={() => {
            ref.current?.goBack();
          }}>
          <IoIosArrowBack color="white" />
        </div>
        <div
          className="absolute top-[50%] right-[10px] z-10 cursor-pointer animate-fadeIn"
          onClick={() => {
            ref.current?.goNext();
          }}>
          <IoIosArrowForward color="white" />
        </div>
      </>
    </div>
  );
}

export default PeopleCarousal;
