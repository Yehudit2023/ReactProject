// import { observer } from "mobx-react"
// import dataStore from "../../data/dataStore"
// import BusinessData from "../businessData/BusinessData";
// import AdminHome from "./AdminHome"
// import Login from "./Login"


// const AdminPage = observer(() => {

//   return (
//     <>
//   { !dataStore.isLogin &&
//     <BusinessData  />}

//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,background:'#C0AA81', height:'100%'}}>
//         {
//           !dataStore.isLogin ? <Login /> : <AdminHome />
//         }
//       </div>
//       <div style={{background:'black', height:'100%'}}></div>
//     </>
//   );
// }
// );

// export default AdminPage;
import { observer } from "mobx-react";
import dataStore from "../../data/dataStore";
import BusinessData from "../businessData/BusinessData";
import AdminHome from "./AdminHome";
import Login from "./Login";

const AdminPage = observer(() => {
  return (
    <>
      { !dataStore.isLogin &&
        <div className="B_Data_AdminPage" style={{ textAlign: 'center', background: '#C0AA81', minHeight: '27vh', display: 'flex', justifyContent: 'center', alignItems: 'center',direction:"rtl" }}>
          <div>
            <BusinessData />
          </div>
        </div>}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '73vh', background: '#C0AA81' }}>
        {
          !dataStore.isLogin ? <Login /> : <AdminHome />
        }
      </div>
    </>
  );
});

export default AdminPage;

