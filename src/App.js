import './App.css';
import SocialButton from './component/SocialButton';
import { LinkedIn } from 'react-linkedin-login-oauth2';
// import { LinkedInPage } from './component/SocialButtonLinkdn';

const handleSocialLogin = (user) => {
  console.log(user.token)
}

const handleSocialLoginFailure = (err) => {
  console.error(err);
}

const handleSuccess = (data) => {
  console.log(data);
  console.log("hola");
}

const handleFailure = (error) => {
  console.log(error.errorMessage);
  console.log("chao");
}

function App() {
  return (
    <div className="container">
      <SocialButton
        provider='facebook'
        appId='1093250811128737'
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Facebook
      </SocialButton>

      <LinkedIn
        clientId="78xszo6gtvp5ip"
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri="http://localhost:3000/linkedin"
      >
        Inicia con LinkedIn
      </LinkedIn>

      <SocialButton
        provider='google'
        appId='333435459310-fns9fah35gl36tj55uea4od4tt2kdchr.apps.googleusercontent.com'
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Google
      </SocialButton>
    </div>
  );
}

export default App;
