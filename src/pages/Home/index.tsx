import { HomeLayout } from '@/components/layout/HomeLayout'
import { HomePageProvider } from '@/core/contexts/HomePageContext'

export const Home: React.FC = () => {
  return (
    <HomePageProvider>
      <HomeLayout />
    </HomePageProvider>
  )
}
