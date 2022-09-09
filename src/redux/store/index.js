
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";

const store = configureStore({
    reducer: mainReducer
});

export default store;