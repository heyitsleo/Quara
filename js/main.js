/*!
 * Quara Theme by OllieJW (https://olliejw.me)
 * License - https://olliejw.me/tos
 */

function copyIP() {
    var before = document.getElementById("ip").innerText;
	var ip = document.getElementById("ip");
	var range = document.createRange();
	range.selectNode(ip);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	// Change Text
	ip.innerText = ip_copied;
	setTimeout(
	function() {
	  ip.innerText = before;
	},1000);
}

window.onload = function() {
  var template = document.getElementById('template').innerHTML;
  var compiled_template = Handlebars.compile(template);
  var rendered = compiled_template({
      pinned_text: pinned_text,
  });
  document.getElementById('target').innerHTML = rendered;


  if(pinned_notice == false) {
    document.getElementById("pinned").remove();
  } else {
    if(pinned_read_more == false) {
      document.getElementById("pinned_readmore").remove();
    }
  }


}

function staff(name, uuid, rank) {
  let staffTemplate = $("#staff-template").html()
    .replaceAll("{{ name }}", name)
    .replaceAll("{{ rank }}", rank)
	.replaceAll("{{ uuid }}", uuid)

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
