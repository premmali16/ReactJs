

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5001/students";

// Thunks
export const fetchStudents = createAsyncThunk("students/fetch", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addStudent = createAsyncThunk("students/add", async (student) => {
  const res = await axios.post(API_URL, student);
  return res.data;
});

export const updateStudent = createAsyncThunk("students/update", async (student) => {
  const res = await axios.put(`${API_URL}/${student.id}`, student);
  return res.data;
});

export const deleteStudent = createAsyncThunk("students/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice
const studentSlice = createSlice({
  name: "students",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.list.findIndex((s) => s.id === action.payload.id);
        state.list[index] = action.payload;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.list = state.list.filter((s) => s.id !== action.payload);
      });
  },
});

export default studentSlice.reducer;
