import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Provider } from 'react-redux'
import appStore from './store/appStore'

function App() {
  return (
    <>
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
    </>
  )
}

export default App
