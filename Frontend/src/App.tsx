import BannerCategories from './Componenets/BannerCategories';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import HomeBanner from './Componenets/HomeBanner';
import Highligts from './Componenets/Highligts';
import Categoties from './Componenets/Categoties';
import ProductList from './Componenets/ProductList';
import { DiSafari } from 'react-icons/di';
import DiscountedBanner from './Componenets/DiscountedBanner';
import Blog from './Componenets/Blog';

function App() {

  return (
    <main>
      <BannerCategories/>
      <HomeBanner/>
      <Highligts/>
      <Categoties/>
      <ProductList/>
      <DiscountedBanner/>
      <Blog/>
    </main>
  )
}

export default App
