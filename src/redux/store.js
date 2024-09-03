import { configureStore } from "@reduxjs/toolkit";
import restuarantSlice from "./restuarantSlice";

const store = configureStore({
    reducer: {
        restuarantSlice: restuarantSlice
    }
})
export default store;