var config = {
    apiKey: "AIzaSyCpQIOIphY3FiBqCSrFXPyorCCE825ZqEQ",
    authDomain: "proyectvyt1.firebaseapp.com",
    databaseURL: "https://proyectvyt1.firebaseio.com",
    projectId: "proyectvyt1",
    storageBucket: "proyectvyt1.appspot.com",
    messagingSenderId: "805281786247"
  };
  firebase.initializeApp(config);



  var h1 = document.getElementById('video');
  var dbRef  = firebase.database().ref().child('video');
  var final = 0;
  dbRef.on('value',
function(data){
    var a = data.val();
    console.log(a);
   var wvideo =  video(a);
   innerHTML("loadvideo",wvideo);
}
);

function video(a){
    
    if(final == 0){
    if(a == 0){
     return '<img src="assets/desiciones.png"  width="1200" height="600" >'
      
    }
    if(a==1){

        return   '<video  id = "vid" width="1200" height="600" controls>+<source type="video/mp4" src="assets/v1_ primeros cursos.mp4"></source></video>'
        final = 0;
    }else {
        if(a==2){
            return '<video  id = "vid" width="1200" height="600" controls>+<source type="video/mp4" src="assets/v2_ cursos posteriores.mp4"></source></video>'
            final = 0;
        }else {
            if(a==3){
                return '<video  id = "vid" width="1200" height="600"  controls>+<source type="video/mp4" src="assets/v3_ becas.mp4"></source></video>'
                final = 0;
            }else {
                if(a==4){
                    return '<video  id = "vid" width="1200" height="600"  controls>+<source type="video/mp4" src="assets/v4_ intercambio.mp4"></source></video>'
                    final = 0;
                }else {
                    if(a==5){
                        return '<video  id = "vid" width="1200" height="600"  controls>+<source type="video/mp4" src="assets/v5_ perfil egreso.mp4"></source></video>'
                        final = 1;
                            }
            
                    }
        
                } 
            }
 
       }
    }else{
        if(final == 1){
            return '<img src="assets/QR.png"  width="1200" height="600" >'
        }
    }

}
function innerHTML(id,wvideo){
    return document.getElementById(id).innerHTML=wvideo;
}
 
