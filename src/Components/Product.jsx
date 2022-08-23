export default function Product() {
  const products = ["Laptops", "Phone", "Gadgets"];
  const productLists = products.map((product) => (
    <h3 className="text-blue-900 text-star">{product}</h3>
  ));
  return <div>{productLists}</div>;
}
