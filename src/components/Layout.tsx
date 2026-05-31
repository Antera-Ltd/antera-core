
import React from 'react';
import { Navbar } from './Navbar';
import { FinalCTAAndFooter } from './Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-[#1F1F1F] selection:bg-[#FA520F]/30">
      <Navbar />
      <main className="pt-14">
        <Outlet />
      </main>
      <FinalCTAAndFooter />
    </div>
  );
};
