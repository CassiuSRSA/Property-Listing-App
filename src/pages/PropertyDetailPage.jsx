import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "./PropertyDetailPage.css";

function PropertyDetailsPage() {
  const { id } = useParams();
  const location = useLocation();

  const backLink = location.state?.from || "/";

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProperty() {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Property not found");
      } else {
        setProperty(data);
      }

      setLoading(false);
    }

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading property…</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="property-details">
      <Link to={backLink} className="back-link">
        ← Back to listings
      </Link>

      <div className="details-grid">
        <img
          src={property.image_url || "/placeholder.jpg"}
          alt={property.title}
          className="main-image"
        />

        <div className="details-info">
          <h1>{property.title}</h1>
          <p className="location">{property.location}</p>

          <p className="price">R {property.price.toLocaleString()}</p>

          <div className="details-meta">
            <span>{property.bedrooms} bedrooms</span>
            <span>{property.type}</span>
          </div>

          <p className="description">{property.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailsPage;
