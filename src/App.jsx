import Layout from "./components/Layout";
import ListingsPage from "./pages/ListingsPage";

function App() {
  return (
    <Layout>
      <header>
        <h1>Property Listings Dashboard</h1>
      </header>

      <main>
        <ListingsPage />
      </main>
    </Layout>
  );
}

export default App;
