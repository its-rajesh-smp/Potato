import React, { useState } from "react";
import "./HomePage.css";
import SelectedCurrentLocation from "../../Components/UI/Home Page/SelectedCurrentLocation/SelectedCurrentLocation";
import Search from "../../Components/UI/Home Page/Search/Search";
import VegNonVegFilter from "../../Components/UI/Home Page/VegNonVegFilter/VegNonVegFilter";
import ProductContainer from "../../Components/Home Page/Products Container/ProductsContainer";
import GoToCart from "../../Components/UI/Home Page/GoToCart/GoToCart";
import OffersContainer from "../../Components/Offers Container/OffersContainer";

function HomePage(props) {

  const [filterParam, setFilterParam] = useState("")
  const [searchParam, setSearchParam] = useState("")

  return (
    <div className=" HomePage-div  ">
      <SelectedCurrentLocation />
      <OffersContainer />
      <Search searchParam={searchParam} setSearchParam={setSearchParam} />
      <VegNonVegFilter filterParam={filterParam} setFilterParam={setFilterParam} />
      <ProductContainer searchParam={searchParam} filterParam={filterParam} />
      <GoToCart />
    </div>
  );
}

export default HomePage;
