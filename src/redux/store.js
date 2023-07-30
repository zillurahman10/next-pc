const { configureStore } = require("@reduxjs/toolkit");
import pcBuilderReducer from './features/pcBuilder/pcBuilderSlice'

const store = configureStore({
    reducer: {
        pcBuilder: pcBuilderReducer
    }
})

export default store;