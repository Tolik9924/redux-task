import { combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { dataReducer } from "./dataReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    data: dataReducer
})

export const storeData = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
