import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages'


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])

export default AppRouter