import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <h1>ASK M</h1>
        <h1>Your travel Guide.....</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Copyright &copy; 2038</footer>
    </>
  )
}
