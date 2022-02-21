/*!
 * Quara Theme by OllieJW (https://olliejw.me)
 * License - https://olliejw.me/tos
 */



function noticereadModeClick() {
  window.open(pinned_url);
}



window.onload = function() {
  var template = document.getElementById('template').innerHTML;
  var compiled_template = Handlebars.compile(template);
  var rendered = compiled_template({
      pinned_text: pinned_text,
      pinned_read_more_text: pinned_read_more_text,
  });
  document.getElementById('target').innerHTML = rendered;


  if(pinned_notice == false) {
    document.getElementById("pinned").remove();
  } else {
    if(pinned_read_more == false) {
      document.getElementById("pinned_readmore").remove();
    }
  }
  var r = getRandomNumber(1, 10);
  if(r == 1) {
    document.getElementById("about-us").innerHTML = "Among Us";
  }
  



}




function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



function staff(name, rank) {
  let staffTemplate = $("#staff-template").html()
    .replaceAll("{{ name }}", name)
    .replaceAll("{{ rank }}", rank)

  setTimeout(
    function() {
      $("#staff").append(staffTemplate)
    },500)
}

function vote(service, image, link) {
  let voteTemplate = $("#vote-template").html()
    .replaceAll("{{ service }}", service)
    .replaceAll("{{ image }}", image)
	.replaceAll("{{ link }}", link)

  setTimeout(
    function() {
      $("#vote").append(voteTemplate)
    },500)
}
