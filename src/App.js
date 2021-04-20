import './App.css';
import TopMenu from './Component/topmenu/TopMenu.js'
import Header from './Component/header/Header.js'
import Content from './Component/content/Content.js'
import Footer from './Component/footer/Footer.js'
function App() {
  return (
    <div className="FATHER">
      <TopMenu/>
      <Header/>
      <Content noidung="Xin chao cac ban" tieude="Day la content 1" vitri="order-lg-2" anh="img/01.jpg"/>
      <Content noidung="Xin chao cac ban" tieude="Day la content thu 2 " vitri="order-lg-1" anh="img/02.jpg"/>
      <Content noidung="Xin chao cac ban" tieude="Day la content thu 33333 " vitri="order-lg-2" anh="img/03.jpg"/>
      <Footer/>

    </div>
  );
}

export default App;
