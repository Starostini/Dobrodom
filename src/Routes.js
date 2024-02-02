import AdminPanel from "./pages/AdminPanel";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import PetPage from "./pages/PetPage";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PET_ROUTE,
  REGISTRATION_ROUTE,
  HOME_ROUTE,
  PETS_ROUTE,
  GRADUATES_ROUTE,
  PROJECTS_ROUTE,
  CHARITY_ROUTE,
  CONTACTS_ROUTE,
  ABOUT_ROUTE,
} from "./utils/consts";
import Pets from "./pages/Pets";
import Graduates from "./pages/Graduates";
import Projects from "./pages/Projects";
import Charity from "./pages/Charity";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <AdminPanel />,
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: PETS_ROUTE,
    Component: <Pets />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Registration />,
  },
  {
    path: PET_ROUTE + "/:id",
    Component: <PetPage />,
  },
  {
    path: GRADUATES_ROUTE,
    Component: <Graduates />,
  },
  {
    path: PROJECTS_ROUTE,
    Component: <Projects />,
  },
  {
    path: CHARITY_ROUTE,
    Component: <Charity />,
  },
  {
    path: CONTACTS_ROUTE,
    Component: <Contacts />,
  },
  {
    path: ABOUT_ROUTE,
    Component: <AboutUs />,
  },
];
