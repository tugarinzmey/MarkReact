import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://swapi.tech/api/people/?search=";

const initialState = {
    inputValue: "", 
    results: [],
    isLoading: true,
}

export const getResults = createAsyncThunk('search/fetchResults', async (inputValue) => {
    return fetch(url+inputValue)
    .then(response => response.json())
    .catch((error) => console.log(error));
});

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        clearResults: (state) => {
            state.results = {};
        },
        showResults: (state, {payload}) => {
            getResults(payload);
        },
        updateInput: (state, {payload}) => {
            state.inputValue = payload;
        },
    },
    extraReducers: {
        [getResults.pending]: (state) => {
            state.isLoading = true;
        },
        [getResults.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.results = action.payload.results;
        },
        [getResults.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})

export const{clearResults, showResults, updateInput} = searchSlice.actions;

export default searchSlice.reducer