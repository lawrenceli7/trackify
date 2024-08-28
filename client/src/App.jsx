import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";
import TransactionPage from "./pages/TransactionPage";

function App() {
  const authUser = false;

  return (
    <div>
      {authUser && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
