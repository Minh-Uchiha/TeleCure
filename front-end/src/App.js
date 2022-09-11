import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutPage,
  AccountPage,
  CancelPaymentPage,
  ChatRoomPage,
  CheckoutPage,
  DoctorPage,
  ErrorPage,
  PatientPage,
  DoctorSignupPage,
  PatientSignupPage,
  SuccessPaymentPage,
  WelcomePage,
  StreamChatPage,
} from "./pages";
import { Header, Footer } from "./components/main-components";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="react-body">
      <UserProvider>
        <Router>
          {/* Header and Footer are fixed for every page  */}
          <Header />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/cancel-payment" element={<CancelPaymentPage />} />
            <Route path="/success-payment" element={<SuccessPaymentPage />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/patient" element={<PatientPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/chatroom" element={<ChatRoomPage />} />
            <Route path="/streamchat" element={<StreamChatPage/>} />
            <Route path="/signup/doctor" element={<DoctorSignupPage />} />
            <Route path="/signup/patient" element={<PatientSignupPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
