import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { GlobalAppStateProvider } from '@/hooks/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messenger',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
          <link
            rel='icon'
            href='https://cdn-icons-png.flaticon.com/512/5968/5968771.png'
            sizes='any'
          />
        </head>
        <body className={inter.className}>
          <GlobalAppStateProvider>{children}</GlobalAppStateProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
