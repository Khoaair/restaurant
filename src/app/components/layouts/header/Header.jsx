import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='header h-[100vh] flex items-center md:block md:pt-64 lg:pt-48'>
      <div className='max-w-screen-xl mx-auto px-8 lg:flex lg:justify-between lg:items-center'>
        <div>
          <p className='font-[Inter] text-base text-white border border-primary max-w-max py-1 px-2 mb-2 md:text-base md:py-2 md:px-4 md:mb-4'>
            Welcome to coffee hut
          </p>
          <h1 className='font-[Helvetica] text-primary text-5xl leading-normal font-bold mb-4 md:text-6xl md:mb-8'>
            Heal the world <br /> with coffee
          </h1>
          <p className='font-[Inter] text-white text-sm mb-8 md:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Varius sed pharetra dictum neque massa congue
          </p>
          <div className='flex gap-2 md:gap-8'>
            <Link
              href='/shop'
              className='bg-primary text-white text-base py-2 px-6 font-bold hover:text-primary hover:bg-white hover:border-primary md:text-xl md:py-4 md:px-12'
            >
              Order now
            </Link>
            <Link
              href='/menu'
              className='border border-primary text-base text-primary bg-black py-2 px-6 font-bold hover:text-white hover:bg-primary md:text-xl md:py-4 md:px-12'
            >
              See menu
            </Link>
          </div>
        </div>
        <div className='hidden lg:block w-96 h-[596px] relative'>
          <div className='border-2 border-primary w-96 h-[596px] rounded-3xl absolute bottom-10 right-14'></div>
          <Image
            src='/coffee_latte.jpg'
            alt='header picture'
            layout='fill'
            objectFit='cover'
            className='rounded-3xl'
          />
        </div>
      </div>
      {/* <div className='flex justify-center items-center gap-2 mt-12'>
        <div className='w-1 h-12 bg-primary'></div>
        <h1>scroll down</h1>
      </div> */}
    </div>
  );
};
export default Header;
