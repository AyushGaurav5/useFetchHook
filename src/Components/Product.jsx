import useFetch from "../Hooks/useFetch";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {data.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid #ccc", padding: "10px" }}
        >
          <img src={item.images[0]} alt={item.title} width="100%" />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;