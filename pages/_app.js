import { NotifyProvider } from '@/context/notify-context'
import { WorkContextProvider } from '@/context/work-context'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
  <NotifyProvider>
    <WorkContextProvider>
      <Component {...pageProps} />
    </WorkContextProvider>
  </NotifyProvider>
  )
}
