import {React} from "react";
import { Routes, Route} from 'react-router-dom';
import { DashBoardpage } from './pages/Dashboardpage';
import {Notfoundpage} from'./pages/Notfoundpage';
import { Parameterspage } from './pages/Parametrspage';
import { Settingspage } from './pages/Settingspage';
import { Subscriptionspage } from './pages/Subsriptionspage';
import { Userpage } from './pages/Userpage';
import { Layout } from './components/Layout';

function App() { 

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<DashBoardpage/>} />
        <Route path="/params" element={<Parameterspage />} />
        <Route path="/subs" element={<Subscriptionspage />} />
        <Route path="/profile" element={<Userpage />} />
        <Route path="/settings" element={<Settingspage />} />
        <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
