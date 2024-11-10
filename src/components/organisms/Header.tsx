import React from 'react';
import Logo from '@/assets/svg/logo.svg';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/organisms/navigation-menu';

function Header() {
  return (
    <header className={'h-[60px] flex justify-between items-center px-[16px] max-w-screen-lg mx-auto'}>
      <Logo />

      <div className={'hidden md:flex gap-[60px] items-center'}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={'text-white font-[900] text-[16px]'}>채용</NavigationMenuTrigger>
              <NavigationMenuContent className={'flex-col'}>
                <h4 className={'font-[700] w-[240px] my-[11px] mx-[16px]'}>채용</h4>
                <NavigationMenuLink className={'block my-[10px] font-[500] mx-[16px]'}>
                  해외 개발자 원격 채용
                </NavigationMenuLink>
                <NavigationMenuLink className={'block my-[10px] font-[500] mx-[16px]'}>
                  외국인 원격 채용 (비개발 직군)
                </NavigationMenuLink>
                <hr />
                <NavigationMenuLink className={'block my-[10px] font-[500] mx-[16px]'}>
                  한국어 가능 외국인 채용
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <h5 className={'font-[900] text-[16px] text-white'}>해외 개발자 활용 서비스</h5>
      </div>

      <button className={'bg-white hidden md:block font-[900] px-[24px] py-[6px] rounded-[8px] text-[#4A77FF]'}>
        문의하기
      </button>
    </header>
  );
}

export default Header;
