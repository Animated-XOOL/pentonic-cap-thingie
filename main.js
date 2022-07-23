Webcam.attach( '#camera' );

  camera = document.getElementById("camera");

  webcam.set({
    width:350,
    height: 300,
    image_format : 'png',
    png_quality:90
  });
function take_snapshot()
{
    webcam.snao(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+dataurl+'"/>';
    });

};
  console.log('ml5 version:', ml5.version);

  classifier =ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/xjZy6nkaz/model.json',modelLoaded);