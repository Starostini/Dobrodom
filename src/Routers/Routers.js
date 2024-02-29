import Layout from "../Layout";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "../RequiredAuth";
import Auth from "../pages/Auth";
import Missing from "../pages/Missing";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  CHARITY_ROUTE,
  CONTACTS_ROUTE,
  GRADUATES_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PETS_ROUTE,
  PROJECTS_ROUTE,
  REGISTRATION_ROUTE,
  UNAUTORIZED_ROUTE,
} from "../utils/consts";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Pets from "../pages/Pets";
import Graduates from "../pages/Graduates";
import Projects from "../pages/Projects";
import Charity from "../pages/Charity";
import Contacts from "../pages/Contacts";
import AboutUs from "../pages/AboutUs";
import AdminPanel from "../pages/AdminPanel";
import AdminPets from "../pages/AdminPets";
import Unautorized from "../pages/Unautorized";

// import useAuth from "../hooks/useAuth";

// const ROLES = () => {
//     return useAuth()
// }

const Routers = () => {
  const BrowserRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={REGISTRATION_ROUTE} element={<Registration />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={PETS_ROUTE} element={<Pets />} />
          <Route path={GRADUATES_ROUTE} element={<Graduates />} />
          <Route path={PROJECTS_ROUTE} element={<Projects />} />
          <Route path={CHARITY_ROUTE} element={<Charity />} />
          <Route path={CONTACTS_ROUTE} element={<Contacts />} />
          <Route path={ABOUT_ROUTE} element={<AboutUs />} />
          <Route path={UNAUTORIZED_ROUTE} element={<Unautorized />} />
          {/* private routes */}
          <Route element={<RequireAuth />}>
            <Route path={"/admin/*"} element={<AdminPanel />} />
          </Route>

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.Directum]} />}>
            <Route path="kadrus/*" element={<Directum />} />
          </Route> */}

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.DirectumST]} />}>
            <Route path="Оформление сотрудника/*" element={<Directum />} />
          </Route> */}

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.Adminboard]} />}>
            <Route path="adminboard" element={<Adminboard />} />
          </Route> */}

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.UploadScanStore]} />}>
            <Route path="Загрузка документов" element={<UploadScanStore />} />
          </Route> */}

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.UploadScanOffice]} />}>
            <Route path="Подтверждение документов" element={<UploadScanOffice />}/>
          </Route> */}

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    );
  };
  return BrowserRoutes();
};

export default Routers;
