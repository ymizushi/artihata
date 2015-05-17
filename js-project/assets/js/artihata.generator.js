var artihata;

(function (artihata) {
  var RGBA = (function () {
    function RGBA(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    RGBA.prototype.compare = function (rgba) {
      var sumDifference = 0;
      sumDifference += Math.abs(this.r - rgba.r);
      sumDifference += Math.abs(this.g - rgba.g);
      sumDifference += Math.abs(this.b - rgba.b);
      sumDifference += Math.abs(this.a - rgba.a);
      return sumDifference;
    }

    return RGBA;
  })();

  function getEmojiName(rgba, rgbaMap) {
    var beforeDifference = 200000 // 十分に大きい数;
    var targetEmojiName;
    for (var emojiName in rgbaMap) {
      var baseRGBAList = rgbaMap[emojiName];
      var baseRGBA = new RGBA(baseRGBAList[0], baseRGBAList[1], baseRGBAList[2], baseRGBAList[3])
      var difference = baseRGBA.compare(rgba);
      if (beforeDifference > difference) {
        beforeDifference = difference;
        targetEmojiName = emojiName;
      }
    }  
    return targetEmojiName;
  }

  function putText(text) {
    var generateTextInput = document.getElementById("generate_text"); 
    generateTextInput.value = text;
  }

  function formatFileNameToEmojiName(fileName) {
    var emojiName = fileName.slice(0,-4);
    return ":" + emojiName + ":";
  }

  function serializeTableToText(table) {
    var outputText = "";
    for (var j in table) {
      for (var i in table[j]) {
        outputText += formatFileNameToEmojiName(table[j][i]);
      }
        outputText += "\n";
    }
    return outputText;
  }

  var selectFileButton = document.getElementById("selectfile");
  selectFileButton.addEventListener("change", function(event) {
    var file = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function() {
      var img = new Image();
      img.onload = function() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var width = img.width;
        if (width > 34) {
          width = 34;
        }
        var height = img.height;
        canvas.width = width;
        canvas.height = height;
        context.drawImage(img, 0, 0);

        var srcData = context.getImageData(0, 0, width, height);
        var dstData = context.createImageData(width, height);
        var src = srcData.data;
        var dst = dstData.data;

        var emojiList = [];
        for (var i = 0; i < height; i++) {
          var emojiRowList = [];
          for (var j = 0; j < width; j++) {
            var idx = (j + i * width) * 4;
            var r = src[idx];
            var g = src[idx+1];
            var b = src[idx+2];
            var a = src[idx+3];
            var rgba = new RGBA(r,g,b,a);
            var emojiName = getEmojiName(rgba, artihata.EMOJI_RGBA_MAP);
            emojiRowList.push(emojiName); 
          }
          emojiList.push(emojiRowList);
        }
        putText(serializeTableToText(emojiList));
      }
      img.src = reader.result;
    }
  }, false);
})(artihata || (artihata = {}));

