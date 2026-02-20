import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}
