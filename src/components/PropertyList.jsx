import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  return (
    <div className="properties-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;
