//https://teachablemachine.withgoogle.com/models/J2tuBbTBR/

prediction = ""

Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90,
})

camera = document.getElementById("camera");

Webcam.attach(camera)

function capture_img(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "img" src = "'+data_uri+'"/>'
    })
}

console.log("ml5 version", ml5.version)

addmodel = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4HPZO0Ku-/model.json", model_loaded)

function model_loaded(){
    console.log("Model has loaded.")
}