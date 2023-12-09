import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './Components/Sidebar/Sidebar'
import GlobalStyleProvider from './providers/GlobalStyleProvider'
import ContextProvider from './providers/ContextProvider'
import { ClerkProvider, SignIn, auth } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'User Posting - Mark',
  description: 'Allowing users to post stuff cuz why not',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const {userId} = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <body className={inter.className}>
          <ContextProvider>
            <GlobalStyleProvider>
              {userId && <Sidebar />}
              <div className='w-full'>{children}</div>
            </GlobalStyleProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
