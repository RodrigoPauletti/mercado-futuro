import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import { GlobalStyle } from "./styles";

function App() {
  const [vouchersCount, setVouchersCount] = useState(0);
  const handleVouchersCount = (value) => {
    setVouchersCount(value);
  };
  return (
    <>
      <Router>
        <Header vouchersCount={vouchersCount} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/companies" exact>
            <Companies />
          </Route>
          <Route path="/companies/:companySlug" exact>
            <CompanyDetails
              vouchersCount={vouchersCount}
              setVouchersCount={setVouchersCount}
              handleVouchersCount={(value) => handleVouchersCount(value)}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
