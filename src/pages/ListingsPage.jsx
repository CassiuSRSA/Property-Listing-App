import { useState, useMemo, useEffect } from "react";
import PropertyList from "../components/PropertyList";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import SortSelect from "../components/SortSelect";
import Pagination from "../components/Pagination";
import { useProperties } from "../hooks/useProperties";
import { useDebounce } from "../hooks/useDebounce";

const ITEMS_PER_PAGE = 6;

function ListingsPage() {
  const { properties, loading, error } = useProperties();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 400);

  const filteredAndSorted = useMemo(() => {
    let result = properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        property.location.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesType = type === "" || property.type === type;

      const matchesBedrooms = property.bedrooms >= minBedrooms;

      return matchesSearch && matchesType && matchesBedrooms;
    });

    if (sort === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [properties, debouncedSearch, type, minBedrooms, sort]);

  const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE);

  const paginatedProperties = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredAndSorted.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSorted, page]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, type, minBedrooms, sort]);

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

      <SortSelect value={sort} onChange={setSort} />

      {paginatedProperties.length === 0 ? (
        <p>No properties match your criteria.</p>
      ) : (
        <>
          <PropertyList properties={paginatedProperties} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}

export default ListingsPage;
