import Gallary from "./Pages/Gallary/Gallary";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Reservation from "./Pages/Reservation/Reservation";
import GallaryPageImageGen from './Components/GallaryPageImageGen/GallaryPageImageGen'

const routes = [
       { path: '/' , element: <Home />},
       { path: '/menu' , element: <Menu />},
       { path: '/reservation' , element: <Reservation/>},
       { path: '/gallary' , element: <Gallary/> ,children:[
              {path:'allPhotos',element: <GallaryPageImageGen type={'all'} />},
              {path:'interior',element: <GallaryPageImageGen type={'interior'} />},
              {path:'food',element: <GallaryPageImageGen type={'food'} />},
              {path:'events',element: <GallaryPageImageGen type={'events'} />},
              {path:'vipGhests',element: <GallaryPageImageGen type={'vipGhests'} />},
       ]},
]

export default routes