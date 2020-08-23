console.log("First is there an element with a 'body' class", $(".body").length);
// <!-- Is JS Script running check -->

$(window).scroll(function () {
  //back to top function
  var height = $(window).scrollTop();
  if (height > 350) {
    $("#back2Top").slideDown();
  } else {
    $("#back2Top").slideUp();
  }
});

$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
// <!-- Scroll to top when arrow up clicked END -->

function toggleFunctionNav() {
  //this is triggered when mobile nav button is clicked
  toggleMe.classList.toggle("tada"); //toggles tada function
}
// make nav menu appear and disappear on button/image click

$(document).on("click", function (event) {
  //targets document. when clicking on the document, triggers function
  var trigger = $(".navdropdown");
  if (trigger !== event.target && !trigger.has(event.target).length) {
    //if dropdown class is not present on the clicked element
    toggleMe.classList.remove("tada"); //remove the tada class
  }
});

// make nav menu disappear when clicking outside of it

//Attempted but failed, at the time, to get it to work properly
// genTextHeight();

// window.addEventListener('resize', function () {
//     genTextHeight();
// });

// function genTextHeight() {
//     let gen7text = document.getElementById('gen7-text');
//     let height = 0;
//     height = gen7text.scrollHeight;
//     console.log(height+'px');

//     let genText = document.querySelectorAll(genText);
//     genText.style.marginTop = "-"+(height/2)+"px";

// }

function toggleRestOfTog(idHere) {
  let targElemnt = document.getElementById(idHere); //sets targElemnt to the element id passed in

  let getHeight = function () {
    //gets the height of the targeted element

    targElemnt.style.height = "100px"; //this is set to px value so animation can be used to make it open smoothly
    let height = targElemnt.scrollHeight + "px";
    targElemnt.style.height = "0px";
    return height;
  };

  let height = getHeight();
  targElemnt.style.height = height;

  targElemnt.classList.toggle("togMe"); //toggles the togMe function in the classList of the targeted element in targElemnt

  if (targElemnt.classList.contains("unTog")) {
    //if the classList of the target element contains unTog class, then remove unTog class

    targElemnt.classList.remove("unTog");
  } else {
    //otherwise, add in unTog class and set target element height to 0px

    targElemnt.classList.add("unTog");
    targElemnt.style.height = "0px";
  }
}

console.log("Last is there an element with a 'body' class", $(".body").length);
// <!-- Is JS Script running check -->
