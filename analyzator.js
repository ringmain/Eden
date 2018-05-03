function analyzovat(){
  
  var x = document.getElementById('inputText').value.toLowerCase().replace(/[\[\],.()]/g, "").split(" ").sort();
  var len = x.length;
  var text = "";
  var slovo = x[0];

  for (var i=0; i<len; i++){
    if (x[i] === slovo){
        text += x[i] + ', ';
    } else {
            text += "<br>" + x[i] + ', ';
            slovo = x[i];
      }
  }
  document.getElementById('textBox').innerHTML = text;
}
