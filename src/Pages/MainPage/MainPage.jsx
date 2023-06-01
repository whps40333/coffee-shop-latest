import React from "react";
import ShopSection from "./Shops/ShopSection";
import MainHeader from "../../components/Header/MainHeader";

function MainPage(props) {
  return (
    <>
      <MainHeader
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
      <div>
        <ShopSection />
      </div>
    </>
  );
}

export default MainPage;
