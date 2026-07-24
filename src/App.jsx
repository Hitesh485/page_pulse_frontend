import { useState } from "react";
import UrlForm from "./components/UrlForm";
import ReportCard from "./components/ReportCard";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
import Footer from "./components/Footer";

function App() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">

      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Page Pulse
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Audit any website in seconds
        </p>

        <UrlForm
          setReport={setReport}
          setLoading={setLoading}
          setError={setError}
          loading={loading}
        />

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} />}

        {report && <ReportCard report={report} />}

      </div>

      <Footer />

    </div>
  );
}

export default App;