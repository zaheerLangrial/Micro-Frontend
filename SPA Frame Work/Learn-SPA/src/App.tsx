import './App.css'
import Error from './components/Error'
import Root from './components/root'
import Courses from './pages/Courses'
import Home from './pages/Home'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {


  const router = createBrowserRouter([
    {
      path : '/' , element: <Root />,
      errorElement : <Error />,
      children : [
        {
          path : '/' , element: <Home />
        },
        {
          path : '/course' , element : <Courses />
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
