require("dotenv").config();

const express = require("express");
const { getMarvelCharacterData } = require("./Helpers/index");

const app = express();
app.use(express.static("fecomponents"))
app.use(express.static("fecomponents/Landing"))
const PORT = 3030;
// app.engine('html', require('ejs').renderFile)
app.get("/", (req, res) => {

  res.sendFile(__dirname + "/fecomponents/Landing/index.html")
  
});


  app.get("/TeamSelect/index.html", (req, res) => {
  
    res.sendFile(__dirname + "/fecomponents/TeamSelect/index.html")
    
  });

app.get("/characters", async (req, res) => {
  const marvelData = await getMarvelCharacterData();

  res.send(marvelData);
});

app.get("/api/image", async (req,res) => {
  const marvelDataImage = await getMarvelCharacterData();
  
    const randomInt1 = Math.floor(Math.random()* marvelDataImage.data.results.length);
    const imgUrl1 = `${marvelDataImage.data.results[randomInt1].thumbnail.path}.${marvelDataImage.data.results[randomInt1].thumbnail.extension}`
    const imgName1 = marvelDataImage.data.results[randomInt1].name;
    const randomInt2 = Math.floor(Math.random()* marvelDataImage.data.results.length);
    const imgUrl2 = `${marvelDataImage.data.results[randomInt2].thumbnail.path}.${marvelDataImage.data.results[randomInt2].thumbnail.extension}`
    const imgName2 = marvelDataImage.data.results[randomInt2].name;
    const randomInt3 = Math.floor(Math.random()* marvelDataImage.data.results.length);
    const imgUrl3 = `${marvelDataImage.data.results[randomInt3].thumbnail.path}.${marvelDataImage.data.results[randomInt3].thumbnail.extension}`
    const imgName3 = marvelDataImage.data.results[randomInt3].name;

    res.send({imgUrl1,imgUrl2,imgUrl3,imgName1,imgName2,imgName3})
    
})


app.listen(PORT, () => {
  console.log("Listening... watcha say?");
});

module.exports = {
  getMarvelCharacterData,
}