import Header from "./container/Header";
import ContentList from "./container/ContentList";
import ContentDetails from "./container/ContentDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ContentList />} />
          <Route path="/details/:id" element={<ContentDetails />} />
          <Route> 404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
