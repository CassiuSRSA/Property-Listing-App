import { mockProperties } from "../api/mockProperties";
import PropertyList from "../components/PropertyList";

function ListingsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Properties</h2>
      <PropertyList properties={mockProperties} />
    </div>
  );
}

export default ListingsPage;
