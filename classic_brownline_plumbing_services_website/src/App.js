import '@fortawesome/fontawesome-free/css/all.min.css';
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/animate.css';
// import { Index } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './routes/routes';
import { useDeviceType } from './hooks/deviceType';

function App() {
  const isMobile = useDeviceType().mobile;
  // console.log({isMobile});
  return (
    <>
      <AppRoutes />
      <ToastContainer
      toastClassName="custom_toast"
      position={isMobile?"top-center":"top-right"}
      autoClose={6000} // 3 seconds (you can increase if needed)
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      // rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </>
  );
}

export default App;
