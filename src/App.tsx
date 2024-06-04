import React from 'react';
import Header from './components/header/Header';
import News from './components/news/News';
import Subscription from "./components/subscription/Subscription";
import Footer from './components/footer/Footer';
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h2 className="news-title">Новости</h2>
                <News />
                <Subscription />
            </main>
            <Footer />
        </div>
    );
}

export default App;
