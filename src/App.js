import './App.css';
import Footer from './components/footer/Footer'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import WhatWeDo from './components/what_we_do/WhatWeDo';
import Statistics from './components/statistics/Statistics';
import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Statistics />
        <WhatWeDo />
        <Blogs />
        <Footer />
    </div>
  );
}

export default App;
