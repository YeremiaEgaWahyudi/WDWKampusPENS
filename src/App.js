import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import ProfileVideo from './components/profilevideo';
import BeritaTerkini from './components/hotnews';
import Layanan from './components/layanan';
import PensTv from './components/penstv';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <ProfileVideo />
        <BeritaTerkini />
        <Layanan />
        <PensTv />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
