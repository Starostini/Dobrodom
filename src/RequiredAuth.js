import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import AdminPanel from "./pages/AdminPanel";
import { getAuth } from "./services/Request.services";
import Success from "./pages/components/Success";
import Modal from "./ui/Modal";
import Missing from "./pages/Missing";
const RequireAuth = () => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const [roles, setRoles] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [titleMsg, setTitleMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    try {
      async function validate() {
        const response = await getAuth({
          jwt: auth.jwt,
        });
        setLoading(true);
        if (response.status !== 200) {
          setLoading(false);
          setMessage(response.message);
          setTitleMsg(response.title);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setRoles(response.data.roles);
          setLoading(false);
        }
      }
      validate();
    } catch (error) {
      console.log(error);
    }
  });
  return loading ? (
    <Modal active={loading} />
  ) : // ) : auth.isAuth  ? (
  auth.isAuth && roles === "ADMIN" ? (
    <AdminPanel />
  ) : (
    <Missing />
    //<Success message={message} titlemsg={titleMsg} />
  );
};

export default RequireAuth;
