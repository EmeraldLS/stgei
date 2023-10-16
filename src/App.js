import {Routes, Route} from "react-router-dom"
import Home from "./container/Home"
import Login from "./components/Login";
import Protected from "./auth/Protected";
import Dashbaord from "./container/Dashbaord";
import Customers from "./container/Customers";
import CustomerDetails from "./container/CustomerDetails";
// import InsertCustomer from "./container/InsertCustomer";
import NoMatch from "./components/NoMatch";
import React, {lazy} from "react";
import CustomerInAMonth from "./components/CustomerInAMonth";

const InsertCustomer = lazy(() => import("./container/InsertCustomer"))

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoMatch />} />
      <Route element={<Protected />}>
        <Route path="/dashboard" element={<Dashbaord />}/>
        <Route path="/customers" element={<Customers />} />
        <Route path="/month" element={<CustomerInAMonth />} />
        <Route path="/customers/:customer_code" element={<CustomerDetails />} />
        <Route path="/customer" element={<InsertCustomer />} />
      </Route>
    </Routes>
   </>
  );
}

export default App;
