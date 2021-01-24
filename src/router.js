import React from "react";
import Pages from "./pages";

const { StronaGlowna, Logowanie } = Pages;

const routes = {
  "/": () => <StronaGlown />,
  "?logowanie": () => <Logowanie />
};

export default routes;
