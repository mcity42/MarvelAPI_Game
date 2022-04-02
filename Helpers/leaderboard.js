const username = require('win');
const {userTeam , cpuTeam} = require('fight');

// grab the user.name field (from /Win) and create html element for it to append

//name ,  team,  enemies


const username = username;
userTeam= user.team;
cpuTeam = cpu.team;


console.log(user.team);
console.log(userTeam);
console.log(cpuTeam);


// Dynamically add to leaderboard 
/* <tr>
      <th scope="row">PASS</th>
        <td>Larry Bird</td>
          <td>Magic Johnson</td>
          <td>Michael Jordan</td>
        </tr> */
        //Append to tbody


function createLeaderRow() {
  const newRow = document.createElement("tr");
  const column1 = document.createElement("th");
  column1.setAttribute("scope", "row");
  column1.innerText = username;
  newRow.appendChild(column1);
  
  
  const column2 = document.createElement("td");
  column1.innerText = userTeam[0];
  newRow.appendChild(column2);
  
  const column3 = document.createElement("td");
  column1.innerText = userTeam[1];
  newRow.appendChild(column3);
  
  const column4 = document.createElement("td");
  column1.innerText = userTeam[2];
  newRow.appendChild(column4);
  
  
  const column5 = document.createElement("td");
  column1.innerText = "Victors";
  newRow.appendChild(column5);
  
  
  const tbody = document.getElementById("tbody");
  tbody.appendChild(newRow);
}



module.exports = {
   createLeaderRow,
}