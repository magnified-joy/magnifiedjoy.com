$(function() {

    var USER_ID = 1274737756;
    var ACCESS_TOKEN = "208248046.467ede5.a38042dafab64283b48b142694c13b7d";
  
    var f = new Instafeed({
        get: 'user',
        userId: USER_ID,
        limit: 4,
        resolution: 'low_resolution',
        sortBy: 'most-recent',
        accessToken: ACCESS_TOKEN,
        after: function(){
                $('#instafeed a').attr('target','_blank');
        }
    }).run();
    
});