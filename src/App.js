import "./App.css";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import TodayPage from "./pages/TodayPage"
import Calendar from "./pages/Calendar"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exect path="/" element={<HomePage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/today" element={<TodayPage />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>

  );
}

export default App;