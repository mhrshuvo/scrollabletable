document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".scrollable").addEventListener("scroll", function() {
      var translate = "translate(0,"+this.scrollTop+"px)";
      this.querySelector("thead").style.transform = translate;
    });
  });