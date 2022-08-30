// import logo from './logo.svg';
import './App.css';
import React , {useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import FrontPage from './FrontPage';
import FormPage from './FormPage';
import PostView from './PostView';
import {useSelector,useDispatch} from "react-redux";
import {getTours} from "./redux/features/tourSlice";


// /https://www.youtube.com/watch?v=Z_D4w6HmT8k
//https://62dbd756e705d101a6a568cb--mellow-vacherin-42e0ed.netlify.app/
//https://contactmentor.com/how-to-add-loading-spinner-react-js/
//https://62dce488705cf921a45b02e5--bejewelled-bienenstitch-37f76a.netlify.app/

function App() {

  // const [data,setData]=useState([]);
  // const [loading,setLoading]=useState(true);
  const dispatch = useDispatch();
  const {loading,tours,currentPage} = useSelector(state=>({...state.tour}));


  useEffect(()=>{
    // alert("FETCHING DATA TAKES TIME , KINDLY WAIT AND REFRESH THE BROWSER IN SMALL INTERVAL");
    // axios
    //   .get("http://localhost:5000")
    //   .then((res)=>{
    //     setData(res.data.reverse());
    //     setLoading(false);
    //   })
    //   .catch((err)=>console.log(err,"it has an error"));
    dispatch(getTours(currentPage));
  },[currentPage])


  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage></FrontPage>}></Route>
      <Route path="/landing" element={<PostView data={tours} loading={loading}></PostView>}></Route>
      <Route path="/form" element={<FormPage></FormPage>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
