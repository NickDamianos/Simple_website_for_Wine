function checkName(){
    
    var fileName = document.location.href.split("/").slice(-1); 
    if (fileName == "index.html"){
        
        document.getElementsByClassName("arx")[0].style.borderLeftColor = "#b11226";
        document.getElementsByClassName("arx")[0].style.color = "#b11226";
        
    } else if (fileName == "epikinonia.html"){
        document.getElementsByClassName("about")[0].style.borderLeftColor = "#b11226";
        document.getElementsByClassName("about")[0].style.color = "#b11226";
    } else if(fileName == "history.html"){
        document.getElementsByClassName("history")[0].style.borderLeftColor = "#b11226";
        document.getElementsByClassName("history")[0].style.color = "#b11226";
    } else if(fileName == "wines.html"){
        document.getElementsByClassName("wine")[0].style.borderLeftColor = "#b11226";
        document.getElementsByClassName("wine")[0].style.color = "#b11226";
    }
}

function sendEmail(){
    var x = document.getElementById("mailForm");
    var text = "";
    var name = x.elements[0].value
    var subject  = x.elements[1].value;
    var email = x.elements[2].value
    var body = x.elements[3].value
    
    window.location.href = "mailto:nick.damianos96@gmail.com?subject="+subject+"&body="+body;
    alert("Κύριε/Κυρία "+name+" το email σας από "+ email+" στάλθηκε με επιτυχία");
}