import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','700']
})

export const metadata = {
  title: "St Antonio Waterfront",
  description: "Riverside Dining in Assolna, South Goa"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  )
}