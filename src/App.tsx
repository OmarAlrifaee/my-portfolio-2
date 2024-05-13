import { useContext } from "react";
import { DarkModeContext } from "./context";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, RootLayout, TechStack, Work } from "./pages";
import { ScrollToTop } from "./components";
import { Toaster } from "@/components/ui/toaster";
function App() {
  const { dark } = useContext(DarkModeContext);
  return (
    <main className={`App ${dark && "dark"}`}>
      <ScrollToTop />
      <Routes>
        <Route Component={RootLayout}>
          <Route index Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/work" Component={Work} />
          <Route path="/contact" Component={Contact} />
          <Route path="/tech-stack" Component={TechStack} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}
export default App;