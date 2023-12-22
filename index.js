const sb = document.querySelectorAll(".control__switch-btn");
const conv = document.querySelectorAll(".svga-transp");

console.log(sb);
console.log(conv);
function PlayStateAnimation (i) {i.classList.remove('svga-transp-stop')};
function StopStateAnimation (i) {i.classList.add('svga-transp-stop')};

sb.forEach((Elem) => {
  Elem.addEventListener("click", function (event) {
    const targ = event.target;
    targ.classList.toggle("control__switch-btn_state_on");
    console.log(targ);
    let targId = targ.getAttribute('id');
    console.log(targId);
    conv.forEach.call(conv, function(item) {
      let findAnimateId = item.getAttribute('id');
    console.log(findAnimateId);
    const stateBtn = targ.classList.contains('control__switch-btn_state_on');
    console.log(stateBtn);
    if (targId === findAnimateId && stateBtn === true) {
          PlayStateAnimation(item);
        }  else if(targId === findAnimateId && stateBtn === false) {
          StopStateAnimation (item); 
      } 
    });
    
      
      
  });
});



//sb.addEventListener("click", sbtoggle);
//function sbtoggle() {
//  sb.classList.toggle("switch-on");
//}
/*function btn() {
  ".switch-btn".click(function () {
    this.toggleClass("switch-on");
    if (this.hasClass("switch-on")) {
      this.trigger("on.switch");
    } else {
      this.trigger("off.switch");
    }
  });
  ".switch-btn".on("on.switch", function () {
    this.attr("data-id").removeClass("bl-hide");
  });
  ".switch-btn".on("off.switch", function () {
    this.attr("data-id").addClass("bl-hide");
  });
}*/
