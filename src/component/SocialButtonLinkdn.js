import React from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';

const LinkedInPage = () => {

  const handleSuccess = (data) => {
    console.log(data.code);
  }

  const handleFailure = (error) => {
    console.log(error.errorMessage);
  }

  return (
    <div>
      <LinkedIn
        clientId="81lx5we2omq9xh"
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri="http://localhost:3000/linkedin"
      >
        Inicia con LinkedIn
      </LinkedIn>
    </div>
  );
}

export default LinkedInPage;