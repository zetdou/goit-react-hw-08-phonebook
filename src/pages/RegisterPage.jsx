import { HelmetProvider, Helmet } from "react-helmet-async";
import { RegisterForm } from "../components/RegisterForm";

export default function Register() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
      </HelmetProvider>
      <RegisterForm />
    </>
  );
}
