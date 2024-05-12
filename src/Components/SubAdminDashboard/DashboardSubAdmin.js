import React, { useEffect, useState } from "react";
import BannarSubAdmin from "./BannarSubAdmin";
import FilterSubAdmin from "./FilterSubAdmin";
import DataDashboard from "./DataDashboard";
import DetailTableDashboard from "./DetailTableDashboard";
import NavSubAdmin from "./NavSubAdmin";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Api/api";

const DashboardSubAdmin = () => {
  const [data, setdata] = useState()
  let navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/subadmin-login')
    }
  }, [])

  // useEffect(() => {
  //   async function FetchData() {
  //     try {
  //       let url = BASE_URL + '/getadmindashdata?university=Chandigarh University(CU) - Punjab'
  //       const data = await fetch(url);
  //       const response = await data.json()
  //       setdata(response?.data)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   FetchData()
  // }, [])

  return (
    <>

      <BannarSubAdmin />
        <div className="flex flex-row">
          <FilterSubAdmin />
          {/* <DataDashboard data={data} /> */}
    
        <DetailTableDashboard data={data?.users} />
        </div>
    </>
  );
};

export default DashboardSubAdmin;
