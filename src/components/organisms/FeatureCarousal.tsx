'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/organisms/carousel';
import Marketing from '@/assets/svg/marketing.svg';
import BoxIcon from '@/assets/svg/box.svg';
import CallIcon from '@/assets/svg/call.svg';
import ImageIcon from '@/assets/svg/image.svg';
import TargetIcon from '@/assets/svg/target.svg';
import { Card } from '@/components/organisms/card';

interface IFeatureCarousal {
  className?: string;
}

const data = [
  { label: '해외 마케팅', icon: <Marketing /> },
  { label: '퍼블리셔', icon: <ImageIcon /> },
  { label: '캐드원(제도사)', icon: <BoxIcon /> },
  { label: '해외 세일즈', icon: <TargetIcon /> },
  { label: '해외 CS', icon: <CallIcon /> },
];

function FeatureCarousal({ className }: IFeatureCarousal) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  const next = useCallback(() => {
    if (current === count - 1) {
      scrollTo(0);
    } else {
      scrollTo(current + 1);
    }
  }, [current, count, scrollTo]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [next]);

  return (
    <Carousel setApi={setApi} className={cn('hidden md:block', className)}>
      <CarouselContent>
        {data.map((f) => (
          <CarouselItem key={f.label} className={'w-[322px] md:basis-1/2 lg:basis-1/4'}>
            <div
              className={'backdrop-blur bg-[#39aed8]/50 border-0 flex gap-[24px] items-center p-[16px] rounded-[12px]'}>
              {f.icon}
              <p className={'font-black text-[24px] text-white'}>{f.label}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default FeatureCarousal;
