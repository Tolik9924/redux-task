import { addDataFromSwapi } from "../store/dataReducer"
import { addData } from "../toolkitStore/dataReducer"

export const fetchData = () => {
    return async (dispatch) => {
        await fetch("https://swapi.dev/api/people/")
            .then(res => res.json())
            .then(json => dispatch(addDataFromSwapi(json)))
    }
}

export const fetchDataToolkit = () => {
    return async (dispatch) => {
        await fetch("https://swapi.dev/api/planets/")
            .then(res => res.json())
            .then(json => dispatch(addData(json)))
    }
}
