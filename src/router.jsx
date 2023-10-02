import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Reservation from "./Pages/Reservation/Reservation";

const routes = [
       { path: '/' , element: <Home />},
       { path: '/menu' , element: <Menu />},
       { path: '/reservation' , element: <Reservation/>},
]

export default routes