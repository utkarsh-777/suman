import axios from "axios";
import React, { useEffect, useState } from "react";
import MiniDrawer from "./components/Drawer/Drawer";

const App = () => {
  const [doctorDetails, setDoctorDetails] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails");
    setDoctorDetails(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <MiniDrawer doctorDetails={doctorDetails} />
    </div>
  );
};

export default App;
