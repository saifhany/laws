$(function() {  
  $("body").niceScroll();
});
$('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
    })
    $('#myList a[href="#profile"]').tab('show') // Select tab by name
$('#myList a:first-child').tab('show') // Select first tab
$('#myList a:last-child').tab('show') // Select last tab
$('#myList a:nth-child(3)').tab('show') // Select third tab

$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });
  
  /* 
  var goupButton = document.getElementById('goupButton');

  window.onscroll = function () { 
      'usestrict';
     if (window.pageYOffset >= 1200) { 
           goupButton.style.display = 'block';
      }
      else { 
        goupButton.style.display = 'none';
      }
  };
  goupButton.onclick = function() { 
    'usestrict';
    window.scrollTo(0,0);
  }
*/
$(function () {  
    var scrollButton = $('#scroll-top');
    $(window).scroll(function() {
      $(this).scrollTop() >= 400 &&  $(this).scrollTop() <= 41920
      ? scrollButton.show() : scrollButton.hide();
    });
    scrollButton.click(function() {
      $('html,body').animate({ 
        scrollTop : 0 
      }, 600);
    });
  });
 
  window.onscroll = function () { 
    'usestrict';
   console.log( window.pageYOffset);
  }
  var itemsPerSlide = (document.body.clientWidth > 992) ? 4 : 3;

$(window).resize(function(){
  itemsPerSlide = (document.body.clientWidth > 992) ? 4 : 3;
});

$('.multi_item_carousel .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  for (var i=0;i<itemsPerSlide;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "340px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// Select all links with hashes

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
