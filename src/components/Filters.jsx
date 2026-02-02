function Filters({ type, minBedrooms, onTypeChange, onBedroomsChange }) {
  return (
    <div style={filtersStyle}>
      <select value={type} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="">All Types</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
        <option value="Penthouse">Penthouse</option>
      </select>

      <select
        value={minBedrooms}
        onChange={(e) => onBedroomsChange(Number(e.target.value))}
      >
        <option value={0}>Any Bedrooms</option>
        <option value={1}>1+</option>
        <option value={2}>2+</option>
        <option value={3}>3+</option>
      </select>
    </div>
  );
}

const filtersStyle = {
  display: "flex",
  gap: "12px",
  marginBottom: "20px",
};

export default Filters;
