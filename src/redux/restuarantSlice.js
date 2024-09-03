import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Api call or asynchronous function call using Thunk
//first argument is name of slice + / + name of Thunk function
export const fetchRestaurant = createAsyncThunk('restaurantSlice/fetchRestaurant', () => {
    const result = axios.get('/restaurant.json').then(response => response.data);
    console.log("Response form Thunk");
    console.log(result);
    return result;
})

const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    initialState: {
        loading: false, //pending state that means, Api call in-progress
        allRestaurant: [], //-resolve stage
        error: "" //rejected state - return error
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false;
            state.allRestaurant = action.payload;
            state.searchRestuarant = action.payload;
            state.error = "";
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false;
            state.allRestaurant = [];
            state.error = action.error.message;
        })
    },
    reducers: {
        searchRestuarant: (state, action) => {
            state.allRestaurant.restaurants = state.searchRestuarant?.restaurants.filter(item => item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})

export default restaurantSlice.reducer;
export const { searchRestuarant } = restaurantSlice.actions;

//Redux is a synchronous operation
//but Api call or file read or write , etc are Asynchronous operations
// To deal with asynchronous operation in Redux, we are using Redux Thunk
// Thunk is not a part of slice, seperate method in redux toolkit