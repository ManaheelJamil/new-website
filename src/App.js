import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./component/SignUp/signup";
import Login from "./component/login/Login";
import Landingpage from "./component/landingpage/landingpage";
import Home from './component/home/Home'
import AdminPanel from './component/AdminPanel'
import Firebase from './firebase.config'
const Signup=(props)=>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User signed up successfully
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    // An error occurred
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <Header />,
      children:[
        {
          path: "/",
          element: <Landingpage />,
        },
        {
          path: "/login",
          element: <Login />,
        },  
        {
          path: "/signup",
          element: <SignUp />,
        },    
        {
          path: "/home",
          element: <Home />,
        },   
        {
          path: "/AdminPanel",
          element: <AdminPanel />,
        },      
      ]
    },
  ]);
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
