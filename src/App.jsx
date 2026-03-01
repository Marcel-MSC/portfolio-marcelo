import React, { useState, useEffect } from 'react';
import Pages from './pages';
import MatrixBackground from './components/MatrixBackground';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/marcel-msc')
      .then(res => res.json())
      .then(user => {
        setUser(user);
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
