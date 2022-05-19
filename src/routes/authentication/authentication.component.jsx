import SignInForm from "../../components/sign-in-form/sign-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./style.css";
function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
