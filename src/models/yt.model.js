import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ytSchema = new Schema(
  {
    title: { type: String },
    views: { type: String },
    date: { type: Date },
    videoId: { type: String },
    linkImg: { type: String },
    category: { type: String },
    channelName: { type: String },
    channelLinkImg: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ytModel = model("post", ytSchema);
