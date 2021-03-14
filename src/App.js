import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import ProductContainer from "./containers/ProductContainer";
import CardContainer from "./containers/CardContainer";
import MessageContainer from "./containers/MessageContainer";

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer/>
                        <MessageContainer/>
                        <CardContainer/>
                    </div>
                </main>
                <footer className="bg-light text-center text-lg-start">
                    <Footer/>
                </footer>
            </div>
        </div>
    );
}

export default App;
