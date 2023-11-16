import Image from 'next/image';

const Header = () => {
  return (
    <div className='container flex items-center justify-between mt-10'>
      <div className='w-[420px]'>
        <p className='font-miniver text-primary text-lg'>
          Healthy & Tasty Food &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ___
        </p>
        <h1 className='font-bold text-5xl leading-normal'>
          Enjoy Healthy Life & Testy Food.
        </h1>
        <p className='text-base text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>
        <div>
          <button>Show More</button>
          <button>Place an order</button>
        </div>
      </div>
      <div className='mr-20'>
        <Image
          src={'/header.png'}
          alt='new food'
          width={600}
          height={600}
          className='object-cover'
        />
      </div>
    </div>
  );
};
export default Header;
