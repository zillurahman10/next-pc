const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products: []
}

const pcBuilderSlice = createSlice({
    name: 'pc-builder',
    initialState,
    reducers: {
        addToPcBuilder: (state, action) => {
            state.products.push(action.payload)
        }
    }
})

export const { addToPcBuilder } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer