import React from 'react';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Home from "./pages/Home";

function App() {
  return (

    <div>
      <Home></Home>
      <TopNavigation></TopNavigation>
      <TopBanner></TopBanner>
      <Services></Services>

    </div>

  );
}

export default App;
