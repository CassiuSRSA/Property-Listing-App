import { useParams, Link } from "react-router-dom";
import { useProperties } from "../hooks/useProperties";

function PropertyDetailPage() {
  const { id } = useParams();
  const { properties, loading, error } = useProperties();

  if (loading) return <p>Loading property…</p>;
  if (error) return <p>Error: {error}</p>;

  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div>
        <p>Property not found.</p>
        <Link to="/">← Back to listings</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to listings</Link>

      <h2>{property.title}</h2>

      <img
        src={property.image}
        alt={property.title}
        style={{ width: "100%", maxWidth: "600px", marginBottom: "20px" }}
      />

      <p>
        <strong>Location:</strong> {property.location}
      </p>
      <p>
        <strong>Type:</strong> {property.type}
      </p>
      <p>
        <strong>Bedrooms:</strong> {property.bedrooms}
      </p>
      <p>
        <strong>Bathrooms:</strong> {property.bathrooms}
      </p>
      <p>
        <strong>Price:</strong> R {property.price.toLocaleString()}
      </p>
    </div>
  );
}

export default PropertyDetailPage;
