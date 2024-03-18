import React from "react";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";

const MeuBotao = () => {
  return <Button variant="primary">(Clique Aqui)</Button>;
};

const Home = () => (
  <div>
    <Head>
      <title>Moisés Siqueira</title>
    </Head>
    <Navbar />
    <h1 style={{ fontFamily: "Inter, sans-serif" }}>Moisés Siqueira</h1>
    <MeuBotao />
  </div>
);

const App = () => (
  <div>
    <Button variant="primary">Primary Button</Button>
    <Script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      crossOrigin="anonymous"
    ></Script>
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
      integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
      crossOrigin="anonymous"
    ></Script>
    <Script src="/js/bootstrap.js"></Script>
  </div>
);

export default Home;
export { App };
