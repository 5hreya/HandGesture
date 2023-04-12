

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

addmodel = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cw5u6uC5L/model.json", model_loaded)

function model_loaded(){
    console.log("Model has loaded.")
}

function check(){
    var snapshot = document.getElementById("img")
    addmodel.classify(snapshot, gotResult)
}

function gotResult(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("Prediction").innerHTML = results[0].label
        prediction = results[0].label

        if(results[0].label == "Thumbs Up"){
            document.getElementById("Emoji").innerHTML = "&#128077";
        }
        else if(results[0].label == "Peace"){
            document.getElementById("Emoji").innerHTML = "&#9996";
        }
        else{
            document.getElementById("Emoji").innerHTML = "&#128076";
        }
    }
}