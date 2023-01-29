import { Error404 } from '../components/Error404'
import  Contador  from '../components/counter'

export const RoutesPublic =  [
   {
      path: "/",
      element: <Contador />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]