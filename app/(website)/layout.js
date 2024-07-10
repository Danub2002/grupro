import "../global.css"
import Header from "@/components/Header"

export const metadata = {
  title: 'GruPro',
  description: 'Grupo De Programamção',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
