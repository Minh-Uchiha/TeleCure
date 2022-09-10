import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AccountPage,
  CancelPaymentPage,
  ChatRoomPage,
  CheckoutPage,
  DoctorPage,
  ErrorPage,
  PatientPage,
  SignupPage,
  SuccessPaymentPage,
  WelcomePage,
} from "./pages";
import { Header, Footer } from "./components/main-components";

function App() {
  return (
    <div className="react-body">
      <Router>
        {/* Header and Footer are fixed for every page  */}
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/cancel-payment" element={<CancelPaymentPage />} />
          <Route path="/success-payment" element={<SuccessPaymentPage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/patient" element={<PatientPage />} />
          <Route path="/patient/checkout" element={<CheckoutPage />} />
          <Route path="/chatroom" element={<ChatRoomPage />} />
          <Route path="/signup" element={<AccountPage />} />
          <Route path="/account" element={<SignupPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
