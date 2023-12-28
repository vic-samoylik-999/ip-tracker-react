import React from 'react';

import UpperSide from './components/UpperSide';
import Map from './components/Map';
import Footer from './components/Footer';

export const IPDATA = React.createContext();

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const getData = async () => {
      const responce = await fetch(import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_KEY);
      const data = await responce.json();
      setData(data);
    };
    // getData();
  }, []);

  return (
    <main className="main">
      <IPDATA.Provider value={data}>
        <div className="wrapper">
          <UpperSide />
        </div>
        <Map />
        <Footer />
      </IPDATA.Provider>
    </main>
  );
}

export default App;
