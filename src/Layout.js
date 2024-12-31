import React from 'react';
import Sidebar from './componentes/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <header className="">
          <Sidebar />
        </header>
        <main className="flex-1 p-4">
        <Outlet />
        </main>
        <footer className="p-4 bg-slate-800 text-center">
          <p className="text-sm">© 2024 Mi Sitio. Todos los derechos reservados.</p>
        </footer>
    </div>
  );
}

export default Layout;
