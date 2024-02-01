import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoadingPage = navigation.state === 'loading'
  const value = 'some value'
  return (
    <>
      <Navbar />
      <section className='page'>
        {isLoadingPage ? (
          <div className='loading'></div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  )
}
export default HomeLayout
