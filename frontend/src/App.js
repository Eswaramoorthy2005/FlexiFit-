import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import FitHome from './Components/FitHome/FitHome.js';
import Login from './Components/Login/Login.js';
import Signup from './Components/Login/Signup.js';
import Workouts from './Components/workouts';
import WorkoutCalendar from './Components/WorkoutCalendar/WorkoutCalendar.js';
import Adwork from './Components/adwork/adwork.js';

import UserProfile from './Components/UserProfile/UserProfile.js';
import LvlCard from './Components/LvlCard.js';
import Beginner from './Components/Beginner.js';
import Begwl from './Components/Begwl.js';
import Begwg from './Begwg.js';
import Intermediate from './Components/Intermediate.js';
import Intwl from './Components/Intwl.js';
import Intwg from './Components/Intwg.js';
import WorkoutDetial1 from './Pages/WorkoutDetail/WorkoutDetail1.js';
import WorkoutDetial2 from './Pages/WorkoutDetail/WorkoutDetail2.js';
import WorkoutDetial3 from './Pages/WorkoutDetail/WorkoutDetail3.js';
import WorkoutDetial4 from './Pages/WorkoutDetail/WorkoutDetail4.js';
import WorkoutDetial5 from './Pages/WorkoutDetail/WorkoutDetail5.js';
import WorkoutDetial6 from './Pages/WorkoutDetail/WorkoutDetail6.js';
import WorkoutDetial7 from './Pages/WorkoutDetail/WorkoutDetail7.js';
import WorkoutDetial8 from './Pages/WorkoutDetail/WorkoutDetail8.js';
import Expert from './Components/Expert.js';
import Exwl from './Components/Expert/Exwl.js';
import Exwg from './Components/Expert/Exwg.js';
import Bmi from './Components/bmi/bmi.js';

import { CartProvider } from './Pages/CartContext/CartContext.js';

import Cardio from './Pages/Cardio';
import Strength from './Pages/Strength';
import Massager from './Pages/Massager.jsx';
import Accessories from './Pages/Accessories.jsx';
import CartPage from './Pages/CartPage/CartPage.jsx';
import Home from './Pages/Home';

import AdminHome from './Pages/Admin/AdminHome.jsx';
import AddProduct from './Pages/AddProduct/AddProduct.jsx';
import ListProduct from './Pages/ListProduct/ListProduct.jsx';
import UserDashboard from './Pages/UserDashboard/UserDashboard.jsx';
import PaymentPage from './Pages/PaymentPage/PaymentPage.jsx';

export const CartContext = createContext();

const App = () => {
  

  return (
    <div className='fnt'>
      <CartProvider>
      <Router>

        <Routes>

          <Route exact path="/" element={<FitHome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/workouts" element={<Workouts/>} />
          <Route path="/dashboard" element={<WorkoutCalendar/>} />
          <Route path="/adwork" element={<Adwork/>} />
          
          <Route path="/prof" element={<UserProfile/>}/>
          <Route path="/lvl" element={<LvlCard/>}/>
          <Route path="/beginner" element={<Beginner/>}/>
          <Route path="/begwl" element={<Begwl/>}/>
          <Route path="/begwg" element={<Begwg/>}/>
          <Route path="/Intermediate" element={<Intermediate/>}/>
          <Route path="/Intwl" element={<Intwl/>}/>
          <Route path="/Intwg" element={<Intwg/>}/>
          <Route path="Intwl/jog" element={<WorkoutDetial2/>}/>
          <Route path="Intwl/dumb" element={<WorkoutDetial3/>}/>
          <Route path="Intwl/squat" element={<WorkoutDetial4/>}/>
          <Route path="Intwl/SideLeg" element={<WorkoutDetial1/>}/>
          <Route path="Begwl/jog" element={<WorkoutDetial2/>}/>
          <Route path="Begwl/walk" element={<WorkoutDetial3/>}/>
          <Route path="Begwl/squat" element={<WorkoutDetial4/>}/>
          <Route path="Begwg/squat" element={<WorkoutDetial4/>}/>
          <Route path="Begwg/push" element={<WorkoutDetial5/>}/>
          <Route path="Begwg/pull" element={<WorkoutDetial6/>}/>
          <Route path="Intwg/dumbench" element={<WorkoutDetial7/>}/>
          <Route path="Intwg/dumfly" element={<WorkoutDetial8/>}/>
          <Route path="/expert" element={<Expert/>}/>
          <Route path="/exwl" element={<Exwl/>}/>
          <Route path="/exwg" element={<Exwg/>}/>
          <Route path="/Intwg" element={<Intwg/>}/>
          <Route path="/bmi" element={<Bmi/>}/>

          <Route path="/home" element={<Home />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/strength" element={<Strength />} />
          <Route path="/massager" element={<Massager />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage/>} />
          
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/list-product" element={<ListProduct />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />

        </Routes>
        
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
