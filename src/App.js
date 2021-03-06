import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import "./App.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

var username = 'Chinmay';

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
/**
 *
 * @param {Event} e
 */
function openMask(e) {
  // console.log(e.target);
  let it = e.target;
  while (it && !it.classList.contains("mask-container")) {
    it = it.parentElement;
  }
  // console.log('it',it);
  if (!it) return;
  let m = it.querySelector(".mask");
  m?.classList.add("maskOpen");
  setTimeout(() => {
    m.classList.remove("maskOpen");
  }, 1000);
}

function HomeComponent() {
  return (
    <div id="home" className="container">
      <div className="title-row">
        <span>Hi {username}</span>
        <img src={require("./images/bell.png")} alt="bell" />
        <img src={require("./images/qr.png")} alt="qr" />
      </div>
      <div className="welcome">Welcome to FLM Loyalty Program</div>
      <div className="qrcode">
        <div className="shadow-source"></div>
        <img src={require("./images/qrcard.png")} alt="" />
      </div>
      <div
        className="home-list-item mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/promotions-select.png")} alt="bell" />
        <span>Rewards catalogue</span>
      </div>
      <div
        className="home-list-item mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/map.png")} alt="bell" />
        <span>Rewards catalogue</span>
      </div>
    </div>
  );
}

function MyCard() {
  return (
    <div className="container">
      <div className="title-row">
        <span>{username}'s Card</span>
      </div>
      <div style={{ marginTop: ".7rem", marginBottom: "1.7em" }}>
        Show this card each time you shop and get instant cash saving
      </div>
      <div className="qrcode">
        <div className="shadow-source"></div>
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
      <Loading width="100%" height="calc(100% - 210px)" />
    </div>
  );
}

function Vouchers() {
  return (
    <div className="container">
      <div className="title-row">
        <span>Vouchers</span>
      </div>
      <Loading width="100%" height="calc(100% - 210px)" />
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

function Profile(props) {
  return (
    <div className="container">
      <div
        id="edit-profile"
        className=" mask-container"
        onClick={(e) => openMask(e)}
      >
        <div>{username}</div>
        <div className="mask"></div>
        <div>View and edit profile</div>
      </div>
      <div
        id="steps-left"
        className=" mask-container"
        onClick={(e) => openMask(e)}
      >
        <div>1 Step left</div>
        <div className="mask"></div>
        <div id="step-progress"></div>
        <div>
          Complete your profile to get the best Capillary app experience
        </div>
      </div>
      <div
        className="profile-list-item  mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/credit-card.png")} alt="" />
        <span>Stamps</span>
      </div>
      <div
        className="profile-list-item  mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/game-controller.png")} alt="" />
        <span>Games</span>
      </div>
      <div
        className="profile-list-item  mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/shopping-store.png")} alt="" />
        <span>Store Locator</span>
      </div>
      <div
        className="profile-list-item  mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/transaction.png")} alt="" />
        <span>Transactions</span>
      </div>
      <div
        className="profile-list-item  mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/bell.png")} alt="" />
        <span>Notifications</span>
      </div>
      <div
        className="profile-list-item  mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/refer.png")} alt="" />
        <span>Refer a friend</span>
      </div>
      <div
        className="profile-list-item  mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/manual.png")} alt="" />
        <span>App tour</span>
      </div>
      <div
        className="profile-list-item  mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/help.png")} alt="" />
        <span>Help</span>
      </div>
      <div
        className="profile-list-item  mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <img src={require("./images/setting.png")} alt="" />
        <span>Settings</span>
      </div>
      <div
        className="profile-list-item-2 mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <span>Legal</span>
      </div>
      <div
        className="profile-list-item-2 mask-container"
        onClick={(e) => openMask(e)}
      >
        <div className="mask"></div>
        <span>Software version</span>
        <span style={{ float: "right", marginRight: ".2rem" }}>V 1.0.13</span>
      </div>
      <div
        className="profile-list-item-2 mask-container"
        onClick={(e) => {
          openMask(e);
          props.setSpace("tour");
        }}
      >
        <div className="mask"></div>
        <span>Sign out</span>
      </div>
    </div>
  );
}

function UserSpace(props) {
  let [currentTab, setCurrentTab] = useState("home");
  let tabRef = useRef();
  let homeRef = useRef();
  // console.log(currentTab);
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
        {currentTab === "vouchers" && <Vouchers />}
        {currentTab === "profile" && <Profile setSpace={props.setSpace} />}
      </div>
      <div className="nav-bar">
        <div className="bg-holder"></div>
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
          {/* <img src={require("./images/logo.png")} alt="" /> */}
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

function TourSpace(props) {
  return (
    <div className="main">
      <div
        style={{
          float: "right",
          margin: "2rem 1rem",
          position: "relative",
          zIndex: "100",
        }}
      >
        <u>Find Store</u>
      </div>
      <div id="tour-wrapper">
        <Swiper pagination={true} modules={[Pagination]} className="swiper">
          <SwiperSlide>
            <img src={require("./images/p1.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("./images/p2.png")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("./images/p3.png")} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="signin-block">
        <div
          onClick={() => {
            props.setSpace("user");
          }}
        >
          Sign in
        </div>
        <div
          onClick={() => {
            props.setSpace("login");
          }}
        >
          Register
        </div>
      </div>
    </div>
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyBGh-dRWFP0zvy23S2B0xUYi6yePunXons",
  authDomain: "auth-5acae.firebaseapp.com",
  projectId: "auth-5acae",
  storageBucket: "auth-5acae.appspot.com",
  messagingSenderId: "734665972003",
  appId: "1:734665972003:web:08084f0bafd90b8abad496",
  measurementId: "G-DP5NP4RN0B",
};
firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

function LoginSpace(props) {
  useEffect(() => {
    
    // FirebaseUI config.

    var uiConfig = {
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: 'popup',
    
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          username=authResult.user.displayName.split(' ')[0];
          username = username.charAt(0).toUpperCase() + username.slice(1);
          props.setSpace('user')
          return false;
        },
      },
    };
    
    
    // Initialize the FirebaseUI Widget using Firebase.
    
    // The start method will wait until the DOM is loaded.
    ui.start("#google-login", uiConfig);
  }, []);
  return (
    <div className="main">
      <img
        id="back"
        src={require("./images/back.png")}
        onClick={() => {
          props.setSpace("tour");
        }}
      />
      <div id="google-login"></div>
    </div>
  );
}

function App() {
  const [currentSpace, setCurrentSpace] = useState("tour");
  return (
    <div className="main">
      {currentSpace === "tour" && <TourSpace setSpace={setCurrentSpace} />}
      {currentSpace === "user" && <UserSpace setSpace={setCurrentSpace} />}
      {currentSpace === "login" && <LoginSpace setSpace={setCurrentSpace} />}
    </div>
  );
}

export default App;
