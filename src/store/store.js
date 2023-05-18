import { configureStore } from "@reduxjs/toolkit";
import clothesData from '../redux/getData'

const store = configureStore(
    {
        reducer: {
            "clothesData":clothesData
        }
    }
)

export default store