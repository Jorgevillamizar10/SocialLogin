import './App.css';
import SocialButton from './component/SocialButton';

const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}

function App() {
  return (
    <div>
      <SocialButton
        provider='facebook'
        appId='1093250811128737'
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Facebook
      </SocialButton>
    </div>
  );
}

export default App;
