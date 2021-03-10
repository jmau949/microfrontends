import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    // second argument = communcation for routing
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};

export default DashboardApp;
