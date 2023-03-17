import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import ProductCatalog from "./components/productCatalog";
import { Route, Routes, useParams } from "react-router";
import ProductType from "./components/productType";
import ProductCreate from "./components/productCreate";
import ProductModules from "./components/productModules";
import ProductLocation from "./components/productLocation";

import Header from "./components/header/header";
import LandingPage from "./components/landingPage";
import CompanyList from "./components/companyList";
import ProductCart from "./components/productCart";
import ProductCatering from "./components/productCatering";
import ProductOverview from "./components/productOverview";
import ScrollToTop from "./components/ScrollToTop";
import GenerateInvoice from "./components/generateInvoice";

function App() {
  let { userId } = useParams();

  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/company_list" element={<CompanyList />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/:productType?/:productId?" element={<ProductType />} />
        <Route
          path="/:productType?/:workshopType?/:productId?"
          element={<ProductCreate />}
        />
        <Route
          path="/:productType?/:workshopType?/:productId?/modules"
          element={<ProductModules />}
        />
        <Route
          path="/:productType?/:workshopType?/:productId?/location"
          element={<ProductLocation />}
        />
        <Route
          path="/:productType?/:workshopType?/:productId?/catering"
          element={<ProductCatering />}
        />
        <Route path="/:productId?/overview" element={<ProductOverview />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="/generate-invoice" element={<GenerateInvoice />} />
      </Routes>
    </div>
  );
}

export default App;
