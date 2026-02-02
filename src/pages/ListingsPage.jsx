import PropertyList from "../components/PropertyList";
import { useProperties } from "../hooks/useProperties";

function ListingsPage() {
  const { properties, loading, error } = useProperties();

  if (loading) {
    return <p>Loading properties…</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Properties</h2>
      <PropertyList properties={properties} />
    </div>
  );
}

export default ListingsPage;
