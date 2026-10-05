import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "@/pages/Landing";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import SupportPage from "@/pages/SupportPage";
import DeleteAccountPage from "@/pages/DeleteAccountPage";
import SoulEntryPage from "@/pages/soul/SoulEntryPage";
import SoulSearchPage from "@/pages/soul/SoulSearchPage";
import SoulSelfPage from "@/pages/soul/SoulSelfPage";

/* Reset scroll on route change (Lenis keeps its own position). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="/soul-search" element={<SoulEntryPage />} />
        <Route path="/soul-search/self" element={<SoulSelfPage />} />
        <Route path="/soul-search/s/:id" element={<SoulSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
