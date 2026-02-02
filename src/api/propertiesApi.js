export async function fetchProperties() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  const data = await response.json();

  // Shape fake API data into property listings
  return data.slice(0, 10).map((post) => ({
    id: post.id,
    title: post.title,
    price: Math.floor(Math.random() * 4000000) + 800000,
    location: "Johannesburg",
    bedrooms: Math.floor(Math.random() * 4) + 1,
    bathrooms: Math.floor(Math.random() * 3) + 1,
    type: "House",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  }));
}
