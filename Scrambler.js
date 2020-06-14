function scrambler(){
    let input = document.getElementById("input").value;

    let dictionary ={
        a:"z",
        b:"y",
        c:"x",
        d:"w",
        e:"v",
        f:"u",
        g:"t",
        h:"s",
        i:"r",
        j:"q",
        k:"p",
        l:"o",
        m:"n",
        n:"m",
        o:"l",
        p:"k",
        q:"j",
        r:"i",
        s:"h",
        t:"g",
        u:"f",
        v:"e",
        w:"d",
        x:"c",
        y:"b",
        z:"a",
        " ": " ",
        ".": ".",
        ",": ",",
        "!": "?",
        "?": "!",
        "\"": "\"",
        1:0,
        2:9,
        3:8,
        4:7,
        5:6,
        6:5,
        7:4,
        8:3,
        9:2,
        0:1
      }

      input = input.toLowerCase()
      let output =""

      
      for (var i = 0; i < input.length; i++) {
        let currentLetter = input[i];
        if (currentLetter in dictionary){
          output += dictionary[currentLetter]
        }
      }
    document.getElementById("output").innerHTML = output;
  }

  function copyFunc(){
    var range = document.createRange();
    range.selectNode(document.getElementById("output"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  }