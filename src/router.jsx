import Gallary from "./Pages/Gallary/Gallary";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import store from "./store";
import Reservation from "./Pages/Reservation/Reservation";
import GallaryPageImageGen from './Components/GallaryPageImageGen/GallaryPageImageGen'
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import ArticleBox from "./Components/ArticleBox/ArticleBox";
import BlogSingleArticles from "./Components/BlogSingleArticles/BlogSingleArticles";
import Contact from "./Pages/Contact/Contact";

const routes = [
       { path: '/' , element: <Home />},
       { path: '/menu' , element: <Menu />},
       { path: '/reservation' , element: <Reservation/>},
       { path: '/gallary' , element: <Gallary/> ,children:[
              {path:'allPhotos',element: <GallaryPageImageGen type={store.menuItems.all} />},
              {path:'interior',element: <GallaryPageImageGen type={store.menuItems.interior} />},
              {path:'food',element: <GallaryPageImageGen type={store.menuItems.food} />},
              {path:'events',element: <GallaryPageImageGen type={store.menuItems.events} />},
              {path:'vipGhests',element: <GallaryPageImageGen type={store.menuItems.vipGhests} />},
       ]},
       { path: '/about' , element: <About/>},
       { path: '/blog' , element: <Blog/>,children:[
              {path:'Article',element: <ArticleBox  />},
              {path:'Article/*',element: <BlogSingleArticles />},
       ]},
       { path: '/contact' , element: <Contact/>},
      
]

export default routes