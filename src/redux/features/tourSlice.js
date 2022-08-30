import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";

export const getTours = createAsyncThunk(
    "tour/getTours",
    async (page) => { //"_,"-->actually tells the user that no argument has been send and to avoid any error on destructuring the "rejectWithValue"
        try {
            const response = await api.getTours(page);
            return response.data
        } catch (err) {
            console.log(err);
        }
    }
)

const tourSlice = createSlice({
    name:"tour",
    initialState:{
        loading:false,
        tours:[],
        currentPage:1,
        numberOfPages:null,
        
    },
    reducers:{
        setCurrentPage:(state,action)=>{
            state.currentPage=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getTours.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getTours.fulfilled, (state, action) => {
            state.loading = false;
            state.tours = action.payload.data;
            state.numberOfPages=action.payload.numberOfPages;
            state.currentPage=action.payload.currentPage;
           
        })
        builder.addCase(getTours.rejected, (state, action) => {
            state.loading = false;
            
        })
    }
})

export const {setCurrentPage} = tourSlice.actions;
export default tourSlice.reducer;