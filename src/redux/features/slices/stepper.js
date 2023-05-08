import { createSlice } from "@reduxjs/toolkit";
/* istanbul ignore next */
export const StepperSlice = createSlice({
    name: "stepper",
    initialState: {
        currentStepper: 1,
        formPersonalData:{}

    },
    reducers: {
        setCurrentStepper: (state, action) => {
            state.currentStepper = action.payload;
        },
        setData: (state, action) => {
            state.formPersonalData = action.payload;
        },
    },
});

export const { setCurrentStepper,setData } = StepperSlice.actions;

export default StepperSlice.reducer;