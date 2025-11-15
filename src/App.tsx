import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Investors from "./pages/Investors";
import MemberZone from "./pages/MemberZone";
import CustomSignIn from "./components/auth/CustomSignIn";
import CustomSignUp from "./components/auth/CustomSignUp";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home onNavigate={setPage} />;
      case "services":
        return <Services onNavigate={setPage} />;
      case "pricing":
        return <Pricing onNavigate={setPage} />;
      case "about":
        return <About onNavigate={setPage} />;
      case "investors":
        return <Investors onNavigate={setPage} />;
      case "member-zone":
        return <MemberZone onNavigate={setPage} />;
      case "signin":
        return <CustomSignIn onBack={() => setPage("home")} />;
      case "signup":
        return <CustomSignUp onBack={() => setPage("home")} />;
      default:
        return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Header onNavigate={setPage} currentPage={page} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setPage} />
    </div>
  );
}
