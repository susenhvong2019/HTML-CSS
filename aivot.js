function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='SUOMEN_HTML'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        //document.getElementById("laatikko1").style.lineHeight = "50px";
    }
     if (boxNumber == 2){
            document.getElementById("laatikko2").innerHTML = "<table>" +
                "<tr>" +
                    "<th>HTML</th>" +
                    "<th>CSS</th>" +
                    "<th>JavaScript</th>" +
                "</tr>" +
                "<tr>" +
                    "<td>h1</td>" +
                    "<td>h1</td>" +
                    "<td>h1</td>" +
                "</tr>" +
                "<tr>" +
                    "<td>h2</td>" +
                    "<td>h2</td>" +
                    "<td>h2</td>" +
                "</tr>" +
                "<tr>" +
                    "<td>h3</td>" +
                    "<td>h3</td>" +
                    "<td>h3</td>" +
                "</tr>" +
            "</table>"; 
        
        // toiminnallisuus puuttuu!
    }
    if (boxNumber == 3){
        document.getElementById("laatikko3").innerHTML = "<img src='dog1.png' alt='trulli' width='500' height='333'>";
    
    // toiminnallisuus puuttuu!
    }
    else{
        document.location.reload();
        //toiminnallisuus puuttuu!
    }
    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = x.length-1; i>=0; i--) {
      text += x.elements[i].name+":"+ x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }


