import { observer } from "mobx-react"
import dataStore from "../../data/dataStore"
import BusinessData from "../businessData/BusinessData";
import AdminHome from "./AdminHome"
import Login from "./Login"


const AdminPage = observer(() => {

  return (
    <>
    {/* <div style={{background:'black', height:'100%'}}> */}
  { !dataStore.isLogin &&
    <BusinessData  />}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,background:'#C0AA81', height:'100%'}}>
        {
          !dataStore.isLogin ? <Login /> : <AdminHome />
        }
      </div>
      <div style={{background:'black', height:'100%'}}></div>
      {/* </div> */}
    </>
  );
}
);

export default AdminPage;
