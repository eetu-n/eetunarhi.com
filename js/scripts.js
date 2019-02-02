$("#mute-midi").click( function (){
    if( $("#midi").prop('muted')){
        $("#midi").prop('muted', false);
        $("#mute-icon").html("volume_off");
    }

    else {
    $("#midi").prop('muted', true);
    $("#mute-icon").html("volume_up");
    }

});
