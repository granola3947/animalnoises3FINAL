var pigeon = 0;
var cat = 0;
var dog = 0;
var cow = 0;
var mybr = document.createElement('br');

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AJQxXOmwl/model.json', modelReady);
    console.log(classifier);
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error, results){
    console.log('Got Result')
    if (error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("detectedis").innerHTML = 'detected is a '+
        results[0].label;

        document.getElementById("detectedis").style.color = "rgb("+random_number_r+","
        +random_number_g+","+random_number_b+")";

        img = document.getElementById('imag').innerHTML;
        console.log(img)

        if (results[0].label=="cow"){ 
            cow = cow + 1;
            img.src = "imgaes/chancesofbeingkilledbycow.jpg";
            document.getElementById("imag").innerHTML = '<img src="imgaes/chancesofbeingkilledbycow.jpg" />'
        }else if(results[0].label=="dog"){ 
            dog = dog + 1;
            img.src = "imgaes/walterdog.jpg";
            document.getElementById("imag").innerHTML = '<img src="imgaes/walterdog.jpg" />'
        }else if(results[0].label=="cat"){ 
            cat = cat + 1;
            img.src = "imgaes/popcat.jpg";
            document.getElementById("imag").innerHTML = '<img src="imgaes/popcat.jpg" />'
        }else if(results[0].label=="pigeon"){ 
            pigeon = pigeon + 1;
            img.src = "imgaes/chonkypigeon.jpg";
            document.getElementById("imag").innerHTML = '<img src="imgaes/chonkypigeon.jpg" />'}
        
        document.getElementById("numberotimes").innerHTML = 'number of times detected '+
        " / cow - \n" + cow + " / dog - \n" + dog + " / cat - \n" + cat + " / pigeon - \n" + pigeon;
        document.getElementById("numberotimes").style.color = "rgb("+random_number_r+","
        +random_number_g+","+random_number_b+")";
    }
}