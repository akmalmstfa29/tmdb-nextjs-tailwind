import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: React.ReactNode
  // any props that come into the component
}

const Layout = ({ children, ...props }: Props) => {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
        {children}
      <Footer />
    </div>
  )
}
export default Layout