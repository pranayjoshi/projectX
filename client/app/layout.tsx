import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppSidebar } from '@/components/sidebar'
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AWS EC2 Manager',
  description: 'Manage your AWS EC2 instances',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen">
            <AppSidebar />
            <SidebarInset className="flex-1 overflow-auto">
              <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
                <SidebarTrigger />
              </header>
              <main className="flex-1">
                {children}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

