import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  About,
  Error,
  Cocktail,
  Newsletter,
  Landing,
  SinglePageError,
} from './pages'
import { loader as landingLoader } from './pages/Landing'
import { loader as SingleCocktailLoader } from './pages/Cocktail'
import { action as formAction } from './pages/Newsletter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: SingleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        errorElement: <SinglePageError />,
        loader: landingLoader,
        element: <Newsletter />,
        action: formAction,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  )
}

export default App
