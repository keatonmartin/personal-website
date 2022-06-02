const name = "Keaton Martin";
const speed = 50;
var i = 0;
var elementText = "";

function typeWriter() {
  if (i < name.length) {
    elementText += name.charAt(i);
    $("#name").text(elementText);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function shrink() {
  $("#name").animate({
    fontSize: "48px"
  }, 1000);
}

typeWriter();
shrink();
