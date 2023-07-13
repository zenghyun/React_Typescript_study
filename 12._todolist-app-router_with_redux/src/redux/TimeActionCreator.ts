import { createAction } from "@reduxjs/toolkit";

export const TIME_ACTION = {
  CHANGE_TIME: "changeTime" as const,
};

const TimeActionCreator = {
  changeTime: createAction<{ currentTime: Date }>("changeTime"),
};

export default TimeActionCreator;
