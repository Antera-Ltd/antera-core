
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductsPage as Products } from './pages/Products';
import { SolutionsPage as Solutions } from './pages/Solutions';
import { SekelaAPISPage as SekelaAPIS } from './pages/SekelaAPIS';
import { DevelopersPage as Developers } from './pages/Developers';
import { BlogPage as Blog } from './pages/Blog';
import { CustomersPage as Customers } from './pages/Customers';
import { CompanyPage as Company } from './pages/Company';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="sekela-apis" element={<SekelaAPIS />} />
            <Route path="developers" element={<Developers />} />
            <Route path="blog" element={<Blog />} />
            <Route path="customers" element={<Customers />} />
            <Route path="company" element={<Company />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
