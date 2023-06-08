
import express from 'express'
const router = express.Router();
import routers from './UserRoute'
import authRoute from './AuthRoute'
const defaultRoutes = [
    {
      path: '/users',
      route: routers,
    },
    {
      path: '/auth',
      route: authRoute,
    }
]  
  defaultRoutes.forEach((route) => {
    routers.use(route.path, route.route);
  });
  
  export default routers;