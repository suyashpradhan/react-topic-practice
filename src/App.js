import { Route, Routes } from "react-router";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Categories } from "./Components/Categories";
import { ProductDetails } from "./Components/ProductDetails";
import { ErrorPage } from "./Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:productId" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
