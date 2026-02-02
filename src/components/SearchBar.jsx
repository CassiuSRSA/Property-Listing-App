function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by title or location..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={inputStyle}
    />
  );
}

const inputStyle = {
  padding: "10px",
  width: "100%",
  maxWidth: "400px",
  marginBottom: "20px",
};

export default SearchBar;
