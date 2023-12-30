import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Promptoai",
    description: "Discover & Share AI Prompts"
}
const Layout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav></Nav>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Layout