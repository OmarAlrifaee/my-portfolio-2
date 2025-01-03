import { useContext } from "react";
import { DarkModeContext } from "./context";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, RootLayout, TechStack, Work } from "./pages";
import { ScrollToTop } from "./components";
import { Toaster } from "@/components/ui/toaster";
import ProjectDetails from "./pages/ProjectDetails";
import FileUploader from "./pages/UploadPhotos";
import MetaTags from "./components/MetaTags";
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
          <Route path="/work/:id" Component={ProjectDetails} />
          <Route path="/contact" Component={Contact} />
          <Route path="/tech-stack" Component={TechStack} />
          <Route path="/upload-photos/:id" Component={FileUploader} />
        </Route>
      </Routes>
      <Toaster />
      <MetaTags
        name="omar alrifai"
        description="i am a frontend developer skilled in reactjs and nextjs"
        image="avatar.png"
        title="Omar Alrifai portfolio"
      />
    </main>
  );
}
export default App;
