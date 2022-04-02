/*
https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
CharacterDataWrapper { 
    data (CharacterDataContainer, optional): The results returned by the call.,
    }
    CharacterDataContainer {
    offset (int, optional): The requested offset (number of skipped results) of the call.,
    limit (int, optional): The requested result limit.,
    total (int, optional): The total number of resources available given the current filter set.,
    count (int, optional): The total number of results returned by this call.,
    results (Array[Character], optional): The list of characters returned by the call.
    }
    Character {
    name (string, optional): The name of the character.,
    thumbnail (Image, optional): The representative image for this character.,
    }
    */


//Get data by name
app.get('/:findByName', async (req, res) => {
  const findByName = req.params.findByName;  //* note* or use findNameStartsWith (at least 2 starting letters)
  const fighter = await getFighters(findByName);


  // if the fighter(marvel character) is not found
  if (fighter.data.count < 1) {
      res.status(404).send('Character not found');

  } else
   {
       //results -> fighterName and awaits thumbnail image
      const fighterName = fighter.data.results.findByName;
      const fighterImage = await getFighterImage(fighterName);
      res.json({
          fighter,
          thumbnail
      });
  }
 //user search Input using full name **OPTION**
  function findByName(findByName) {
      const request = url + `/characters?name=${findByName}&ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${md5Digest}`;
      let body = fetch(request);
      let response = body.json();
      return response;
  }

  //user search Input returns characters with names 
  //that begin with the specified string (e.g. Sp).**OPTION**
  function findNameStartsWith(findNameStartsWith) {
      const request = url + `/characters?name=${findNameStartsWith}&ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${md5Digest}`;
      let body = fetch(request);
      let response = body.json();
      return response;
  }
  //Array for a fighter
  var fighterChosenData = { };

    var teamData = [];
    data.push(fighterChosenData);

    console.log(teamData);
