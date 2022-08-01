import { configureStore } from "@reduxjs/toolkit";
import dataReducerToolkit from "./dataReducer";

export default configureStore({
    reducer: {
        data: dataReducerToolkit
    }
});
