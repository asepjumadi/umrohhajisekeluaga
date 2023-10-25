import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import { Root } from "./page/Root";
import { PaketTour } from "./page/paket";
import { Umroh } from "./page/Umroh";
import { Furoda } from "./page/furoda";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      
    ],
  },
  {
    path:"/paket-tour",
    element: <PaketTour/>,
  },
  {
    path:"/paket-tour/umroh",
    element: <Umroh/>,
  },
  {
    path:"/paket-tour/haji-furoda",
    element: <Furoda/>,
  },
]);
function App() {
  return <RouterProvider router={router}/>
  
}

export default App
