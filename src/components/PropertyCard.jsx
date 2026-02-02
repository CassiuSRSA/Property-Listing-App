function PropertyCard({ property }) {
  const { title, price, location, bedrooms, bathrooms, type, image } = property;

  return (
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
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
  width: "300px",
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
