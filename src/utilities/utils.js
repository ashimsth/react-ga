import ReactGA from "react-ga";

export const sendGAEvent = (category, action, label) => { 
    ReactGA.initialize('UA-223069772-1', {debug: true});
    ReactGA.event({
      category: category,
      action: action,
      label: label
    })
  }

  const initAuth = () => {
    const CLIENT_ID = process.env.REACT_APP_GA_CLIENT_ID;
    return window.gapi.auth2.init({
      client_id: CLIENT_ID,
      scope: "https://www.googleapis.com/auth/analytics.readonly",
    });
  };

  export const checkSignedIn = () => {
    return new Promise((resolve, reject) => {
      initAuth() 
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance(); 
          resolve(auth.isSignedIn.get()); 
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  export const renderButton = () => {
    window.gapi.signin2.render("signin-button", {
      scope: "profile email",
      width: 240,
      height: 50,
      longtitle: true,
      theme: "dark",
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  };
  
  const onSuccess = (googleUser) => {
    console.log("Logged in as: " + googleUser.getBasicProfile().getName());
  };
  
  const onFailure = (error) => {
    console.error(error);
  };
  
  