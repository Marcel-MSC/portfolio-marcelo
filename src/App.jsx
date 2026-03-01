import React, { useState, useEffect } from "react";
import Pages from "./pages";
import MatrixBackground from "./components/MatrixBackground";
import { normalizeProfileUrls } from "./utils/portfolio";
import fallbackPortfolio from "./data/portfolio.json";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/marcel-msc")
      .then((res) => {
        if (!res.ok) throw new Error("API not ok");
        return res.json();
      })
      .then((user) => {
        normalizeProfileUrls(user);
        setUser(user);
      })
      .catch(() => {
        normalizeProfileUrls(fallbackPortfolio);
        setUser(fallbackPortfolio);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return (
    <>
      <MatrixBackground />
      <div className="relative z-10">
        <Pages user={user} />
      </div>
    </>
  );
}

export default App;
