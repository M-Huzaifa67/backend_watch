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

// Helper function to generate a list of image URLs
function generateImageList(basePath, prefix, extension = ".png", count = 10) {
  const list = [];
  for (let i = 1; i <= count; i++) {
    list.push(`${BASEURL}/images/${basePath}/${prefix}${i}${extension}`);
  }
  return list;
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
const std_list = [
  {
    name: "Ali",
    age: 25,
    imageUrl: rolexList[0],
    city: "Lahore",
    country: "Pakistan",
  },
  {
    name: "Amir",
    age: 22,
    imageUrl: omegaList[1],
    city: "Karachi",
    country: "Pakistan",
  },
  {
    name: "Umar",
    age: 25,
    imageUrl: shanghaiList[2],
    city: "Lahore",
    country: "Pakistan",
  },
];

app.get("/data", (req, res) => {
  return res.json(std_list);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${BASEURL}`);
});
