const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.static(path.join(__dirname, "uploads/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const localIP = "192.168.1.2";
const PORT = process.env.PORT || 3000;
const BASEURL = process.env.BASEURL || `http://${localIP}:${PORT}`;
const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
];

function generateImageList(basePath, prefix, extension = ".png", count = 10) {
  const jsonDataList = {};
  for (let i = 1; i <= count; i++) {
    let watchData = {
      name: `${basePath} Watch ${i}`,
      imageUrl: `${BASEURL}/images/${basePath}/${prefix}${i}${extension}`,
      price : Math.floor(Math.random() * 10000) + 1000,
      description: `This is a description for ${basePath} Watch ${i}.`,
      city: cities[Math.floor(Math.random() * cities.length)],
      country: "Pakistan",
    };
    jsonDataList[i] = watchData;
    //list.push(`${BASEURL}/images/${basePath}/${prefix}${i}${extension}`);
  }
  return jsonDataList;
}

// Generate image lists
const rolexList = generateImageList("Rolex", "rolex");
const omegaList = generateImageList("Omega", "omega");
const shanghaiList = generateImageList("Shanghai", "shanghai");
const cartierList = generateImageList("Cartier", "cartier");
const tudorList = generateImageList("Tudor", "tudor");
const breguetList = generateImageList("Breguet", "breguet");
const sylviList = generateImageList("Sylvi", "sylvi");
const iwcList = generateImageList("Iwc", "iwc");

// Sample API response
const watches_list = [
  rolexList[1],
  omegaList[2],
  shanghaiList[3],
  cartierList[4],
  tudorList[5],
  breguetList[6],
  sylviList[7],
  iwcList[8],
];

app.get("/watches", (req, res) => {
  return res.json(watches_list);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${BASEURL}`);
});
