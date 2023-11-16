'use client';
import Link from 'next/link';
import { User } from '../../icons/User';
import { Cart } from '../../icons/Cart';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='container flex items-center justify-between mt-12'>
      <div className='flex items-center gap-8'>
        <Link href={'/'} className='text-4xl mr-16'>
          F<span className='text-primary'>oo</span>dtuck
        </Link>
        <Link href={'/'} className='nav-btn'>
          Home
          {pathname === '/' && <div className='w-6 bg-primary h-[2px]'></div>}
        </Link>
        <Link href={'/menu'}>
          Menu
          {pathname === '/menu' && (
            <div className='w-6 bg-primary h-[2px]'></div>
          )}
        </Link>
        <Link href={'/about'}>
          About
          {pathname === '/about' && (
            <div className='w-6 bg-primary h-[2px]'></div>
          )}
        </Link>
        <Link href={'/shop'}>
          Shop
          {pathname === '/shop' && (
            <div className='w-6 bg-primary h-[2px]'></div>
          )}
        </Link>
        <Link href={'/contact'}>
          Contact
          {pathname === '/contact' && (
            <div className='w-6 bg-primary h-[2px]'></div>
          )}
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <Link href={'/login'}>
          <User className='w-6 h-6 hover:text-primary cursor-pointer' />
        </Link>
        <Link href={'/cart'}>
          <Cart className='w-6 h-6 hover:text-primary cursor-pointer' />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
