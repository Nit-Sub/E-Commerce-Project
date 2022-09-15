import {configureStore} from "@reduxjs/toolkit";
import cartReducer from ""
 const store= configureStore({
    reducer:{
      cart:cartReducer
    }
 })
 export default store;