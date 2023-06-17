import React, { Children } from 'react'

export const metadata = {
    title: "prompt title ",
    description : "this is a description"
} 

const RootLayout = ({children}) => {
  return (
    <html lang='en' >
        <body>    
          {children}
        </body>
    </html>
  )
}

export default RootLayout