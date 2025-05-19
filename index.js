const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const dontenv = require("dotenv");
dontenv.config();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This assumes you put the images inside /public/images/
// const localIP = "192.168.100.108"; 
const localIP = "192.168.1.2";
const PORT = process.env.PORT || 3000;


// const imagesUrl = [
//   `http://${localIP}:${port}/images/img1.jpg`,
//   `http://${localIP}:${port}/images/img2.jpg`,
//   `http://${localIP}:${port}/images/img3.jpg`,
// ];


const imagesUrl = [
'https://github.com/M-Huzaifa67/backend_watch/blob/main/public/images/img0.jpg',
'https://github.com/M-Huzaifa67/backend_watch/blob/main/public/images/img1.jpg',
'https://github.com/M-Huzaifa67/backend_watch/blob/main/public/images/img2.jpg',
'https://github.com/M-Huzaifa67/backend_watch/blob/main/public/images/img3.jpg',
'https://github.com/M-Huzaifa67/backend_watch/blob/main/public/images/img4.jpg',
'https://github.com/M-Huzaifa67/backend_watch/blob/main/public/images/img5.jpg',
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





app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
