import { createSlice } from '@reduxjs/toolkit'

const dataReducerToolkit = createSlice({
    name: 'dataReducer',
    initialState: {
        data: []
    },
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        }
    }
});

export const { addData } = dataReducerToolkit.actions;
export default dataReducerToolkit.reducer;
