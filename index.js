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
  for (let i = 0; i < count; i++) {
    let watchData = {
      name: `${basePath} Watch ${i}`,
      imageUrl: `${BASEURL}/images/${basePath}/${prefix}${i}${extension}`,
      price: Math.floor(Math.random() * 10000) + 3000,
      description: `This is a description for ${basePath} Watch ${i}.`,
      city: cities[Math.floor(Math.random() * cities.length)],
      country: "Pakistan",
    };
    jsonDataList[i] = watchData;
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

app.get("/watches", (req, res) => {
  const brand = req.query.brand;
  const watches_Json = {
    Rolex: rolexList,
    Omega: omegaList,
    Shanghai: shanghaiList,
    Cartier: cartierList,
    Tudor: tudorList,
    Breguet: breguetList,
    Sylvi: sylviList,
    Iwc: iwcList
  };
  if (brand && watches_Json[brand]) {
    return res.json({ [brand]: watches_Json[brand] });
  }

  return res.json(
    watches_Json
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on ${BASEURL}`);
});
