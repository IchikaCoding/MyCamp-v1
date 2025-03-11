const mongoose = require("mongoose");
const Review = require("./review");
const { Schema } = mongoose;

const campgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
  reviews: [
    {
      type: Schema.Types.ObjectId, //キャンプグランドにレビューを関連付ける
      ref: "Review",
    },
  ],
});

//キャンプ場を消すと同時にレビューを削除する
campgroundSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});

module.exports = mongoose.model("Campground", campgroundSchema);
