import ReactGA from "react-ga";

export const sendGAEvent = (category, action, label) => { 
    ReactGA.initialize('UA-223069772-1', {debug: true});
    ReactGA.event({
      category: category,
      action: action,
      label: label
    })
  }