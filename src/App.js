import "./App.scss";
import { lazy, Suspense } from "react";
import { HomePage } from "./routes";
import { Contacts } from "./containers";
import { Footer, ScrollTop } from "./components";
import { Routes, Route } from "react-router-dom";

const WorksPage = lazy(() => import("./routes/WorksPage/WorksPage"));
const ProjectPage = lazy(() => import("./routes/ProjectPage/ProjectPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<></>}>
        <ScrollTop>
          <Routes>
            <Route path="/" element={<HomePage title={document.title} />}></Route>
            <Route path="/works" element={<WorksPage title={`پروژه‌ها | ${document.title}`} />}></Route>
            <Route path="/works/:id" element={<ProjectPage title={document.title} />} />
          </Routes>
        </ScrollTop>
      </Suspense>
      <Contacts />
      {/* <div className="app__flag-margin" /> */}
      <Footer />
    </div>
  );
}

export default App;
