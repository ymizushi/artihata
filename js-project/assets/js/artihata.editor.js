var artihata;

(function (artihata) {
  function createBaseImg(id) {
    var img = document.createElement("img");
    img.id =  ":" + id + ":";
    img.class = "emoji"; 
    img.title = ":" + id + ":"; 
    img.alt = ":" + id + ":";
    img.src = "img/emoji/" + id + ".png"; 
    img.height="20";
    img.width="20";
    img.align="absmiddle";
    img.draggable="true";
    img.addEventListener("dragstart", dragStart)
    return img;
  }

  function createDropboxDiv(id) {
    var div = document.createElement("span");
    div.id = id;
    div.addEventListener("dragstart", dragStart)
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", drop);
    return div;
  }

  function initPallet(pallet, height, width) {
    for (var i=pallet.childNodes.length-1;i>=0; i--) {
      pallet.removeChild(pallet.childNodes[i]);
    }

    for (var i=0;i<artihata.EMOJI_TEMPLATE.length;i++) {
      var img = createBaseImg(artihata.EMOJI_TEMPLATE[i]);
      pallet.appendChild(img);
      if ((i+1)%40 == 0) {
        var br = document.createElement("br");
        pallet.appendChild(br);
      }
    }
    return pallet;
  }

  function initDropbox(dropbox) {
    for (var i =dropbox.childNodes.length-1; i>=0; i--) {
      dropbox.removeChild(dropbox.childNodes[i]);
    }
    for (var y=0;y<height;y++) {
      for (var x=0;x<width;x++) {
        var div = createDropboxDiv(x+"_"+y+"_"+"dropbox")
        var img = createBaseImg("arrow_down");
        div.appendChild(img);
        dropbox.appendChild(div);
      }
      var br = document.createElement("br")
      dropbox.appendChild(br);
    }
  }

  function clickHandler (e) {
    width = document.getElementById("width_button").value;
    height = document.getElementById("height_button").value;

    var pallet = document.getElementById("pallet");
    initPallet(pallet, height, width);

    var dropbox = document.getElementById("dropbox");
    initDropbox(dropbox);
  }


  function putText(text) {
    var generateTextInput = document.getElementById("generate_text"); 
    generateTextInput.value = text;
  }

  function dragStart(event){
    event.dataTransfer.setData("text", event.target.id);
  }

  function dragOver(event){
    event.preventDefault();
  }
  function drop(event){
    var idName = event.dataTransfer.getData("text");
    var dragElem = document.getElementById(idName);
    var copyDragElem = dragElem.cloneNode(true);
    event.currentTarget.childNodes[0].remove();
    event.currentTarget.appendChild(copyDragElem);
    event.preventDefault();

    var dropbox = document.getElementById('dropbox');
    var outputText = "";
    for(var i=0;i<dropbox.childNodes.length;i++) {
      var childNode = dropbox.childNodes[i].childNodes[0];
      if (childNode) {
        outputText += childNode.id;
      } else {
        outputText += "\n";
      }
    }

    putText(outputText);
  }

  var generateButton = document.getElementById("generate_button");
  document.addEventListener('DOMContentLoaded', function () {
      generateButton.addEventListener("click", clickHandler);
  });

})(artihata || (artihata = {}));

