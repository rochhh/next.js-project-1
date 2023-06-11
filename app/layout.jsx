import React, { Children } from 'react'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'
export const metadata = {
    title: "prompt title ",
    description : "this is a description"
} 

const RootLayout = ({children}) => {
  return (
    <html lang='en' >
        <body>
            <main>
              <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout