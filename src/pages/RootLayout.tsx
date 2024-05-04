import { Outlet } from "react-router-dom";
import { Nav, Footer } from "../components";
export const RootLayout = () => {
  return (
    <section>
      <Nav />
      <Outlet />
      <Footer />
    </section>
  );
};
