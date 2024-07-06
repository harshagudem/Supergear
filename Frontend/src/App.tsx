import BannerCategories from './Componenets/BannerCategories';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import HomeBanner from './Componenets/HomeBanner';
import Highligts from './Componenets/Highligts';
import Categoties from './Componenets/Categoties';

function App() {

  return (
    <main>
      <BannerCategories/>
      <HomeBanner/>
      <Highligts/>
      <Categoties/>
    </main>
  )
}

export default App
