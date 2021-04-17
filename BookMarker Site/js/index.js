
//Alert
alert("This site is designed to store links, pages or sites ");


//Assign the identifier of the input object to a variables
var firstInput  = document.getElementById("SiteName");
var secondInput = document.getElementById("SiteUrl");




//Making An Array To but All The Objects Inside it
var websites = [];




//This Function Will Start when we click on The button
function supmate() {

    var site = //The Objects
    {
        siteName :firstInput.value,
        siteUrl :secondInput.value,
    }
    
    if ((firstInput.value == "") || (secondInput.value =="")){
        alert("You Cant Add Elements with Empty fields");
    }
    else {
        websites.push(site);
    }

    test();
    clr();
    
}


function test() {

    var emptyElement = " ";

    for(var i = 0 ; i < websites.length ; i++){

        emptyElement +=
        `
        <tr> 
            <td>${i+1}</td>
            <td>${websites[i].siteName} </td>
            <td><a href="${websites[i].siteUrl}" target="_blank" >${websites[i].siteUrl}</a></td>
            <td><a href="${websites[i].siteUrl}" target="_blank" class="btn btn-warning" >Visit </a></td>
            <td><button onclick='deleteTheElement(${i})' class="btn btn-danger">Delete </button></td>
        </tr>

        `

    }
    document.getElementById("table_body").innerHTML = emptyElement;

}


function clr() {

    firstInput.value = "";  
    secondInput.value = "";

}

function deleteTheElement(i) {
    websites.splice(i,1);
    test();
}
