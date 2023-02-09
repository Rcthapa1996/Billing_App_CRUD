import { Routes, Route } from "react-router-dom";

// Styles
import AppStyle from "./AppStyles.module.scss";

// Components
import Layout from "./Components/Layout";
import Home from "./Components/Account/Home";
import TutorialsList from "./Components/Tutorial/TutorialsList";
import TutorialEdit from "./Components/Tutorial/TutorialEdit";
import AddTutorial from "./Components/Tutorial/AddTuturoal";
import AddAccount from "./Components/Account/AddAccount";

function App() {
  return (
    <div className={AppStyle["app"]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<AddAccount />} />
          <Route path="transaction" element={<TutorialsList />} />
          <Route path="tutorials" element={<TutorialsList />} />
          <Route path="tutorials/:id" element={<TutorialEdit />} />
          <Route path="add" element={<AddTutorial />} />
          <Route path="*" element={<h1>No Page</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
