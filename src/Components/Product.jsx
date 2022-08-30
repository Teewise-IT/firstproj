export default function Product() {
  const products = ["Laptops", "Phone", "Gadgets"];
  const productLists = products.map((product,index) => (
    <h3 className="text-blue-900 text-star" key={index}>{product}</h3>
  ));
  return <div>{productLists}</div>;
}
