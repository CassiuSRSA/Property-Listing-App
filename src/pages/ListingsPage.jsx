import { useState, useMemo } from "react";
import PropertyList from "../components/PropertyList";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import { useProperties } from "../hooks/useProperties";
import { useDebounce } from "../hooks/useDebounce";

function ListingsPage() {
  const { properties, loading, error } = useProperties();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(0);

  const debouncedSearch = useDebounce(search, 400);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        property.location.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesType = type === "" || property.type === type;

      const matchesBedrooms = property.bedrooms >= minBedrooms;

      return matchesSearch && matchesType && matchesBedrooms;
    });
  }, [properties, debouncedSearch, type, minBedrooms]);

  if (loading) return <p>Loading properties…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Properties</h2>

      <SearchBar value={search} onChange={setSearch} />

      <Filters
        type={type}
        minBedrooms={minBedrooms}
        onTypeChange={setType}
        onBedroomsChange={setMinBedrooms}
      />

      <PropertyList properties={filteredProperties} />
    </div>
  );
}

export default ListingsPage;
