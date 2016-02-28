/**
 * Injected Code
 * MeoBeoI @ trungnm0512@gmail.com
 */
$(document).on('keypress', function(e){
  // If space is pressed
  if (e.which === 32) {
    // If lastImage => next chapter
    if (checkPosition()) {
      nextChapter()
    }
  }
})

function previousChapter () {
  $(".btnPrevious").closest("a")[0].click()
}

function nextChapter () {
  $(".btnNext").closest("a")[0].click()
}

function checkPosition (argument) {
  // Curent view position
  var current = $(window).scrollTop()
  // Last iamge position
  var lastImage = $("#divImage > div").length > 0 
    ? $("#divImage > div").last().position().top
    : $("#divImage > p").last().position().top

  return current > lastImage + 600
}

function previousChapter () {
  $(".btnPrevious").closest("a")[0].click()
}

function nextChapter () {
  if ($(".btnNext").length > 0) {
    $(".btnNext").closest("a")[0].click()  
  } else {
    alert('ヽ(≧Д≦)ノ No more to read !')
  }
}