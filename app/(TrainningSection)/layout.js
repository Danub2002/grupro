import "../global.css"
import Sidebar from '@/components/Sidebar'
export const metadata = {
  title: 'GruPro',
  description: 'Grupo De Programamção',
}

export default function RootLayout({ children }) {
 return (
    <div className="flex">
      <Sidebar />
      <main>
      {children}
      </main>
    </div>

  )
}
