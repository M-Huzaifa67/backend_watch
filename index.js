const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This assumes you put the images inside /public/images/
const localIP = "192.168.1.5"; // your PC's IP on LAN
const port = 3000;

const imagesUrl = [
  `http://${localIP}:${port}/images/img1.jpg`,
  `http://${localIP}:${port}/images/img2.jpg`,
  `http://${localIP}:${port}/images/img3.jpg`,
];

const std_list = [
  {
    name: "Ali",
    age: 25,
    imageUrl: imagesUrl[0],
    city: "Lahore",
    country: "Pakistan",
  },
  {
    name: "Amir",
    age: 22,
    imageUrl: imagesUrl[1],
    city: "Karachi",
    country: "Pakistan",
  },
  {
    name: "Umar",
    age: 25,
    imageUrl: imagesUrl[2],
    city: "Lahore",
    country: "Pakistan",
  },
];



app.get("/data", (req, res) => {
  return res.json(std_list);
});





app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
