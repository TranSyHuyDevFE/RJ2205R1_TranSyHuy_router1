import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { state } = useLocation();

  return <div>Hello {state.userID}</div>;
}
