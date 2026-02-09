import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import PropertyList from "../components/PropertyList";
import "./ListingsPage.css";

function ListingsPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearch(searchInput);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  useEffect(() => {
    async function fetchProperties() {
      setLoading(true);
      setError(null);

      let query = supabase
        .from("properties")
        .select("*")
        .order("price", { ascending: true });

      if (search) {
        query = query.or(`title.ilike.%${search}%,location.ilike.%${search}%`);
      }

      if (type) query = query.eq("type", type);
      if (bedrooms) query = query.gte("bedrooms", Number(bedrooms));

      const { data, error } = await query;

      if (error) {
        setError("Failed to load properties");
        setProperties([]);
      } else {
        setProperties(data);
      }

      setLoading(false);
    }

    fetchProperties();
  }, [search, type, bedrooms]);

  if (loading) return <p>Loading properties...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Properties</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by title or location"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Penthouse">Penthouse</option>
        </select>

        <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
          <option value="">Any Bedrooms</option>
          <option value="1">1 Bedroom+</option>
          <option value="2">2 Bedrooms+</option>
          <option value="3">3 Bedrooms+</option>
          <option value="4">4 Bedrooms+</option>
        </select>
      </div>
      {!loading && properties.length === 0 && (
        <p>No properties match your search.</p>
      )}
      {searchInput !== search && <p>Searching…</p>}
      <PropertyList properties={properties} />
    </div>
  );
}

export default ListingsPage;
