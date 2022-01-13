//import { ListKaryawan } from "./components";
import HalamanKaryawan from "./components/Halaman/HalamanKaryawan/HalamanKaryawan";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HalamanAddKaryawan from "./components/Halaman/HalamanAddKaryawan/HalamanAddKaryawan";
import HalamanDua from "./components/Halaman/HalamanDummy/HalamanDua";
import HalamanSurvey from "./components/Halaman/HalamanSurvey/HalamanSurvey";
import HalamanEditKaryawan from "./components/Halaman/HalamanEditKaryawan/HalamanEditKaryawan";
import HalamanLogin from "./components/Halaman/HalamanLogin/HalamanLogin";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route exact path="/" element={<HalamanLogin />} />
          <Route path="/list" element={<HalamanKaryawan />} />
          <Route path="/tambah" element={<HalamanAddKaryawan />} />
          <Route path="/halaman2" element={<HalamanDua />} />
          <Route path="/HalamanSurvey" element={<HalamanSurvey />} />
          <Route path="/edit" element={<HalamanEditKaryawan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
