import './App.css';
import SocialButton from './component/SocialButton';

const handleSocialLogin = (user) => {
  console.log(user.token)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
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

      <SocialButton
        provider='linkedin'
        appId='6AYOEm3iTEolQFrW'
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Linkend
      </SocialButton>

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
