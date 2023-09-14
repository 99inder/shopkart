import Homepage from "./pages/Homepage";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
