import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Navigation from './Navigation'
import { Provider } from "@/components/ui/provider"

const queryClient = new QueryClient()

function App() {

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
