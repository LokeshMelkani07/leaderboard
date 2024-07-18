import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import store from "../src/components/store";
import Table from "../src/components/Table";
import Popup from "../src/components/Popup";
import Carousel from "../src/components/Carousel";
import Footer from "../src/components/Footer";
import ThemeToggle from "../src/components/ThemeToggle";
import "./styles.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const theme = useSelector((state) => state.theme);

  const handleAddScoreClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`app ${theme}`}>
      <header className="leaderboard-header">LeaderBoard</header>
      <div className="left-half">
        <div className="upper-heading">
          <button className="add-score-btn" onClick={handleAddScoreClick}>
            Add Score
          </button>
          <ThemeToggle />
        </div>
        <Table />
        {showPopup && <Popup onClose={handleClosePopup} />}
      </div>
      <div className="right-half">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
