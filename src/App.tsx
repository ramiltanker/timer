import React from "react";

// Context
import { ThemeProvider } from "./providers/ThemeProvider";
// Context

// Components
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";
import Footer from "./components/Footer/Footer";
// Components

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        <Timer />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
