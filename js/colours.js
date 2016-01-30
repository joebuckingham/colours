var list = [
  {
    "name": "Section One",
    "colours": [
      "#FF7722",
      "rgb(33, 92, 10)",
      "#FFFFFF"
    ]
  },
  {
    "name": "Section Two",
    "colours": [
      "rgb(94, 171, 40)",
      "rgb(92, 33, 181)",
      "rgb(210, 124, 34)"
    ]
  }
];
/*
<h2>Section name</h2>
<div class="swatch">
<p>Swatch name</p>
<p class="value">#FF0000</p>
</div>
*/
$(document).ready(function() {
  var content = "";
  for (var i in list) {
    content += "<h2>" + list[i].name + "</h2>";
    var cols = list[i].colours;
    for (var j in cols) {
      content += "<div class='swatch' style='background-color: " + cols[j] + "'>" + cols[j] + "</div>";
    }
  }
  $("#list").html(content);
});
