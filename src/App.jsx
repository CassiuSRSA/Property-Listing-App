import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ListingsPage from "./pages/ListingsPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";

function App() {
  return (
    <Layout>
      <header>
        <h1>Property Listings Dashboard</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ListingsPage />} />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
