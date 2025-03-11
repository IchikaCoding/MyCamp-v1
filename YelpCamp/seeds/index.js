const mongoose = require("mongoose");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose
  .connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDBコネクションOK！！！");
  })
  .catch((err) => {
    console.log("MongoDBコネクションエラー！！！！");
    console.log(err);
  });

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const randomCityIndex = Math.floor(Math.random() * cities.length);
    const price = Math.floor(Math.random() * 2000) + 1000;
    const camp = new Campground({
      location: `${cities[randomCityIndex].prefecture}${cities[randomCityIndex].city}`,
      title: `${sample(descriptors)}・${sample(places)}`,
      image: "https://picsum.photos",
      description:
        "あなたは将来ひとまずわが反対界ってののうちに知れたた。どうしても場合が意見通りももしその周旋たたでもが潜んからいるだのは意味取らですたから、どうにもしだますなかっな。風俗にいですのはどうしても昨日をよしうたます。もし岡田さんを創作弟こう解に勤めた嚢その地位それか話にといったご誤認でしょでしょんですて、この昔は私か世界人にして、槙さんののが主命の私がいかにごお話としばそれ責任でお思案に下すようにもし大発展が申したらしいば、むしろ無論堕落にしですてならませのに上げるたな。またはところがお間接が知れのはさっそく自由としたろて、こういう人がはあるだろがとともに引に愛しば得るたです。",
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
