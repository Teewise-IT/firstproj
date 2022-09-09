// import React from "react";
import Body from "../Components/Body";
import Nav from "../Components/Nav";
import Counter from "../Components/Counter";
import Product from "../Components/Product";
import Form from "../Components/Form";
import Todo from "../Components/Todo";

function Home() {
  return (
    <div>
      <Nav />
      <Body />
      <Product />
      <Counter />
      <Form />
      <Todo />
    </div>
  );
}

export default Home;
