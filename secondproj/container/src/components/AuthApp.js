import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  // when ref is defined, render into div
  useEffect(() => {
    // second argument = communcation for routing
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
        console.log("container noticed nagivation in Auth");
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};

export default AuthApp;
