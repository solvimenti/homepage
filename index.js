function init() {
    let sub = GetURLParameter("sub");
    if(sub === "true") {
        $('#subscribeform').hide();
        $('#subscribedNotice').show();
    }
}

function subscribeFormClick() {
    window.location.href = "https://europe-west6-survey-handler.cloudfunctions.net/function-solvimenti-sub?email=" + document.subscribeform['mail'].value;
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}