import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routers/router.jsx'
import{RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import 'sweetalert2/dist/sweetalert2.js'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<RouterProvider router = {router}/>
    {/* <App /> */}
  </Provider>,
)
