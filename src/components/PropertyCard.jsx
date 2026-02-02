import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  const { id, title, price, location, bedrooms, bathrooms, type, image } =
    property;

  return (
    <Link
      to={`/properties/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={cardStyle}>
        <img src={image} alt={title} style={imageStyle} />

        <div style={contentStyle}>
          <h3>{title}</h3>
          <p>{location}</p>
          <p>
            {bedrooms} bed • {bathrooms} bath • {type}
          </p>
          <strong>R {price.toLocaleString()}</strong>
        </div>
      </div>
    </Link>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
  width: "300px",
  minHeight: "395px",
  boxShadow: "0.2px 0.2px 8px #000000",
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
};

const contentStyle = {
  padding: "12px",
};

export default PropertyCard;
