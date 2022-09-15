import {createSlice} from "@reduxjs/toolkit"
const initialState ={
    count:0,
    detail:[]
}
export const cart= createSlice ({
    name:"cart",
    initialState:{},
    reducers:{
        setCartCount : (state, action)=>{
                state.count = action.payload.qty;
                console.log(action);
        }
    }
})

export const {setCartCount}= Cart.actions;
export default cart.reducer;