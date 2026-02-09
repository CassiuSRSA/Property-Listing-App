import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
    <Link to={`/properties/${property.id}`} className="property-card">
      <div className="image-wrapper">
        <img src={property.image || "/placeholder.jpg"} alt={property.title} />
        <span className="price-tag">R {property.price.toLocaleString()}</span>
      </div>

      <div className="card-content">
        <h3>{property.title}</h3>
        <p className="location">{property.location}</p>

        <div className="meta">
          <span>{property.bedrooms} beds</span>
          <span>{property.type}</span>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
