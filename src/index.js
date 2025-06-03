import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router';
import reportWebVitals from './reportWebVitals';
import Patients from './components/pages/Patients';
import Error404 from './components/pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/patients" element={<Patients/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
