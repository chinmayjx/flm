import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import "./App.css";

const logos = {
  home: require("./images/home.png"),
  homeSelect: require("./images/home-select.png"),
  promotions: require("./images/promotions.png"),
  promotionsSelect: require("./images/promotions-select.png"),
  vouchers: require("./images/gift.png"),
  vouchersSelect: require("./images/gift-select.png"),
  profile: require("./images/profile.png"),
  profileSelect: require("./images/profile-select.png"),
};

function HomeComponent() {
  return (
    <div id="home" className="container">
      <div className="title-row">
        <span>Hi Chinmay</span>
        <img src={require("./images/bell.png")} alt="bell" />
        <img src={require("./images/qr.png")} alt="qr" />
      </div>
      <div className="welcome">Welcome to FLM Loyalty Program</div>
      <div className="qrcode">
        <img src={require("./images/qrcard.png")} alt="" />
      </div>
      <div className="home-list-item">
        <img src={require("./images/promotions-select.png")} alt="bell" />
        <span>Rewards catalogue</span>
      </div>
      <div className="home-list-item">
        <img src={require("./images/map.png")} alt="bell" />
        <span>Rewards catalogue</span>
      </div>
    </div>
  );
}

function MyCard() {
  return (
    <div id="mycard" className="container">
      <div className="title-row">
        <span>Chinmay's Card</span>
      </div>
      <div style={{ marginTop: ".7rem", marginBottom: "1.7em" }}>
        Show this card each time you shop and get instant cash saving
      </div>
      <div className="qrcode">
        <img src={require("./images/qrcard.png")} alt="" />
      </div>
    </div>
  );
}

function Promotions() {
  return (
    <div className="container">
      <div className="title-row">
        <span>Promotions</span>
      </div>
      <Loading width='100%' height='90%'/>
    </div>
  );
}

function Vouchers() {
  return (
    <div className="container">
      <div className="title-row">
        <span>Vouchers</span>
      </div>
      <Loading width='100%' height='90%'/>
    </div>
  );
}

function Loading(props) {
  return (
    <div
      id="loading-container"
      style={{ width: props.width, height: props.height }}
    >
      <img id="loading" src={require("./images/loading.gif")} alt="" />
    </div>
  );
}

function Profile(){
  return (<div className="container">
    <div id="edit-profile">
      <div>Chinmay</div>
      <div>View and edit profile</div>
    </div>
    <div id="steps-left">
      <div>1 Step left</div>
      <div id='step-progress'></div>
    </div>
  </div>)
}

function App() {
  let [currentTab, setCurrentTab] = useState("home");
  let tabRef = useRef();
  let homeRef = useRef();
  console.log(currentTab);
  useEffect(() => {
    tabRef.current = homeRef.current;
  }, []);
  function navBtnOnclick(e, n) {
    tabRef.current.classList.remove("nav-btn-select");
    tabRef.current = e.target;
    setCurrentTab(n);
    e.target.classList.add("nav-btn-select");
    // console.log(n,tabRef.current);
  }

  return (
    <div className="main">
      <div className="content">
        {currentTab === "home" && <HomeComponent />}
        {currentTab === "promotions" && <Promotions />}
        {currentTab === "mycard" && <MyCard />}
        {currentTab === "vouchers" && <Vouchers/>}
        {currentTab === "profile" && <Profile/>}
      </div>
      <div className="nav-bar">
        <div
          className="nav-btn nav-btn-select"
          ref={homeRef}
          onClick={(e) => navBtnOnclick(e, "home")}
        >
          <img
            src={currentTab === "home" ? logos.homeSelect : logos.home}
            alt=""
          />
          <span>Home</span>
        </div>
        <div
          className="nav-btn"
          onClick={(e) => navBtnOnclick(e, "promotions")}
        >
          <img
            src={
              currentTab === "promotions"
                ? logos.promotionsSelect
                : logos.promotions
            }
            alt=""
          />
          <span>Promotions</span>
        </div>
        <div
          id="mycard"
          className="nav-btn"
          onClick={(e) => navBtnOnclick(e, "mycard")}
        >
          <img src={require("./images/logo.png")} alt="" />
          <span>My card</span>
        </div>
        <div className="nav-btn" onClick={(e) => navBtnOnclick(e, "vouchers")}>
          <img
            src={
              currentTab === "vouchers" ? logos.vouchersSelect : logos.vouchers
            }
            alt=""
          />
          <span>Vouchers</span>
        </div>
        <div className="nav-btn" onClick={(e) => navBtnOnclick(e, "profile")}>
          <img
            src={currentTab === "profile" ? logos.profileSelect : logos.profile}
            alt=""
          />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}

export default App;
