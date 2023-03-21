import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import AdminDashboard from "./dashboard/admin/index";
import EventsPage from "./dashboard/admin/Events";
import AllCompanies from "./dashboard/admin/companies/AllCompanies";
import Projects from "./dashboard/admin/companies/projects";
import Companies from "./dashboard/admin/company";
import Transactions from "./dashboard/admin/companies/Transactions";
import SingleCompany from "./dashboard/admin/SingleCompany";
import MembersPage from "./dashboard/admin/Members";
import Administration from "./dashboard/admin/members/Administration";
import Partners from "./dashboard/admin/members/Partners";
import Trainees from "./dashboard/admin/members/Trainees";
import Trainers from "./dashboard/admin/members/Trainers";
import SingleAdmin from "./dashboard/admin/members/SingleAdmin";
import SinglePartner from "./dashboard/admin/SinglePartner";
import Singletrainee from "./dashboard/admin/Singletrainee";
import Singletrainer from "./dashboard/admin/Singletrainer";
import Singlealumni from "./dashboard/admin/Singlealumni";
import Alumni from "./dashboard/admin/members/alumni";
import ParentPage from "./dashboard/admin/ParentPage";
import Payments from "./dashboard/admin/Payments";
import CompaniesPayment from "./dashboard/admin/payments/CompaniesPayment";
import ParentsPayment from "./dashboard/admin/payments/ParentsPayment";


function App() {
  return (
    <div className="w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />

          <Route
            path="/admin/dashboard"
            exact
            element={<AdminDashboard />}
          ></Route>
          <Route path="/dashboard/events" element={<EventsPage />}>
            {" "}
          </Route>
          {/* dashboard companies */}
          <Route path="/dashboard/companies" exact element={<Companies />}>
            <Route index element={<AllCompanies />} />
            <Route path="projects" element={<Projects />} />
            <Route path="transactions" element={<Transactions />} />
            <Route
              path="/dashboard/companies/allcompanies/singlecompany"
              element={<SingleCompany />}
            />
            {/* members */}
          </Route>
          <Route path="/dashboard/members" exact element={<MembersPage />}>
            <Route index element={<Administration />} />
            <Route path="partners" element={<Partners />} />
            <Route path="alumni" element={<Alumni />} />
            <Route path="trainees" element={<Trainees />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="admin" element={<SingleAdmin />} />
            <Route
              path="/dashboard/members/partners/single"
              element={<SinglePartner />}
            />
            <Route
              path="/dashboard/members/trainers/singletrainer"
              element={<Singletrainer />}
            />
            <Route
              path="/dashboard/members/alumni/singlealumni"
              element={<Singlealumni />}
            />
            <Route
              path="/dashboard/members/alumni/singletrainee"
              element={<Singletrainee />}
            />
          </Route>
          <Route path="/dashboard/parentpage" exact element={<ParentPage />} ></Route>

        <Route path="/payments" exact element={<Payments />}>
        <Route index element={<CompaniesPayment />} />
        <Route path="parents" element={<ParentsPayment />} />
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
