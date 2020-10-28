var downloadTxtUrl = 'https://raw.githubusercontent.com/nextcodelab/hosthson/main/developerInfo.json';
var responseResult;
function ChangeText() {

    var AppName = responseResult.Application;
    var Developer = responseResult.Developer;
    var ContactMail = responseResult.Email;
    var theDate = responseResult.Date;
    var p_tag = "p_tag";
    for (i = 0; i <= 15; i++) {
        var tag_id = document.getElementById(p_tag + i);
        tag_id.innerHTML = tag_id.innerHTML.replace(/ApplicationName/g, AppName).replace(/DeveloperName/g, Developer);
    }
    var contactTag = document.getElementById("tag_contact_email");
    contactTag.innerHTML = contactTag.innerHTML.replace(/ContactEmail/g, ContactMail);

    var date_Tag = document.getElementById("tag_date");
    date_Tag.innerHTML = date_Tag.innerHTML.replace(/TheDate/g, theDate);
    
}
window.onload = loadAll;

function loadAll() {
   getJson();
}
function getJson() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', downloadTxtUrl, 'jsonp');
    xhr.responseType = 'json';
    xhr.onload = function (e) {
        if (this.status == 200) {
            console.log('response', this.response); // JSON response 
            responseResult = this.response;
            ChangeText();
        }
    };
    xhr.send();
}

