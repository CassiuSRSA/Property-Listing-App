import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  return (
    <div style={listStyle}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

const listStyle = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
};

export default PropertyList;
