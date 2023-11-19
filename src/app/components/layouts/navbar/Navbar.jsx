'use client';
import Link from 'next/link';
import { User } from '../../icons/User';
import { Cart } from '../../icons/Cart';
import { usePathname } from 'next/navigation';
import Menubar from '../../icons/Menubar';
import { useState } from 'react';
import Close from '../../icons/Close';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='shadow-md text-white'>
      <div className='max-w-screen-xl flex items-center justify-between p-8 mx-auto fixed z-50 top-0 left-0 right-0 '>
        <div className='flex items-center gap-8'>
          <Link
            onClick={() => setIsOpen(false)}
            href={'/'}
            className='text-4xl'
          >
            Food<span className='text-primary'>tuck</span>
          </Link>
        </div>
        <div
          className={`flex-col justify-between items-center w-full h-[calc(100vh-82px)] absolute top-20 right-0 text-2xl lg:bg-inherit rounded-md bg-[#2f2e2d] border border-primary lg:border-none ${
            isOpen ? 'flex' : 'hidden'
          } lg:flex lg:flex-row lg:gap-8 lg:w-auto lg:h-auto lg:static`}
        >
          <Link onClick={() => setIsOpen(false)} href={'/'} className='nav-btn'>
            Home
            {pathname === '/' && <div className='w-6 bg-primary h-[2px]'></div>}
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/menu'}>
            Menu
            {pathname === '/menu' && (
              <div className='w-6 bg-primary h-[2px]'></div>
            )}
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/about'} c>
            About
            {pathname === '/about' && (
              <div className='w-6 bg-primary h-[2px]'></div>
            )}
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/shop'}>
            Shop
            {pathname === '/shop' && (
              <div className='w-6 bg-primary h-[2px]'></div>
            )}
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/contact'} c>
            Contact
            {pathname === '/contact' && (
              <div className='w-6 bg-primary h-[2px]'></div>
            )}
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <Link onClick={() => setIsOpen(false)} href={'/login'}>
            <User className='w-6 h-6 hover:text-primary cursor-pointer' />
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href={'/cart'}
            className='relative'
          >
            <Cart className='w-6 h-6 hover:text-primary cursor-pointer' />
            <span className='absolute text-sm text-white bg-red-500 px-[0.35rem] rounded-full top-3 left-3'>
              2
            </span>
          </Link>
          <button className='lg:hidden' onClick={handleOpen}>
            {isOpen ? <Close /> : <Menubar />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
