import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const ProductList = lazy(() => import("./components/ProductList.jsx"));
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<div className="loading"><p>Loading...</p></div>}>
          <ProductList />
        </Suspense>
      },
      {
        path: '/products/:id',
        element: <Suspense fallback={<div className="loading"><p>Loading...</p></div>}>
          <ProductDetail />
        </Suspense>
      },
      {
        path: '/cart',
        element: <Suspense fallback={<div className="loading"><p>Loading...</p></div>}>
          <Cart />
        </Suspense>
      },
      {
        path: '/checkout',
        element: <Suspense fallback={<div className="loading"><p>Loading...</p></div>}>
          <Checkout />
        </Suspense>

      }
    ],
    errorElement: <Suspense fallback={<div className="loading"><p>Loading...</p></div>}>
      <NotFound />
    </Suspense>

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
