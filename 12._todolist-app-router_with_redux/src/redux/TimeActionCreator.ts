import { createAsyncThunk } from "@reduxjs/toolkit";

const timeout = (delayTime: number) =>
  new Promise((resolve) => setTimeout(resolve, delayTime));


  const TimeActionCreator = {
    asyncChangeTime : createAsyncThunk("changeTime",
    async (_, thunkAPI) => {
      await timeout(2000);
      return { currentTime: new Date() };
    }),
  };

  export default TimeActionCreator;