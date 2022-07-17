import React from "react";

export default function Home(props) {
  let { acount } = props;
  return <div>Hello {acount.name}</div>;
}
