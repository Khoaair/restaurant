import About from './components/layouts/about/About';
import Category from './components/layouts/category/Category';
import Header from './components/layouts/header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Category />
    </>
  );
}
