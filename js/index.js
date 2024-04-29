document.querySelectorAll('.nav_link').forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    document.querySelectorAll('.nav_link').forEach(link => {
      link.classList.remove('active');
    });
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});
const toggleButton1 = document.getElementById('toggleButton1');
const toggleButton = document.getElementById('toggleButton');
const icon = toggleButton.querySelector("i");
const body = document.body;
let isOpen = false;

toggleButton.addEventListener('click', function() {
    if (isOpen) {
        // Close it
        body.classList.remove('night-mode');
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        isOpen = false;
    } else {
        // Open it
        body.classList.add('night-mode');
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        isOpen = true;
    }
});

  $(".gear-icon").on("click", () => {
    const colorBoxWidth = $(".settings").outerWidth();
    if (isOpen) {
      // * close it
      $(".settings").css({ left: `-${colorBoxWidth}px` });
      $(".gear-icon i").removeClass("fa-xmark").addClass("fa-gear fa-spin");
      isOpen = false;
    } else {
      $(".settings").css({ left: `0px` });
      $(".gear-icon i").removeClass("fa-gear fa-spin").addClass("fa-xmark");
      isOpen = true;
    }
  });
  