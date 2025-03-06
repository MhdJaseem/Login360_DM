// ----------------------------- FAQ Container ---------------------------

document.addEventListener("DOMContentLoaded", () => {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((details) => {
        details.addEventListener("toggle", () => {
            const icon = details.querySelector("summary i");
            if (icon) {
                icon.style.transform = details.open ? "rotate(180deg)" : "rotate(0deg)";
            }
        });
    });
});

// -----------------------------------------------------------------------

// --------------------------------Time claim your offer-----------------------
document.addEventListener("DOMContentLoaded", function () {
    let offerContainer = document.querySelector(".main-claim-your-offer");
    let scrollPosition = 0;

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        if (currentScroll > 100) { // Show after scrolling 100px
            offerContainer.classList.add("active");
        } else {
            offerContainer.classList.remove("active");
        }
    });
});
// ------------------------------------------------------------------------
// ---------------------------------form dialog section---------------------------
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("popupContainer");
    const openModalBtns = document.querySelectorAll("#showPopup, #open-modal, #registerBtnForm, #stickyBtnOffer, #claimOfferBtn");
    const closeModal = document.querySelector(".close-popup");

    // Open modal when either button is clicked
    openModalBtns.forEach(button => {
        button.addEventListener("click", function () {
            modal.style.display = "flex";
        });
    });

    // Close modal when close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the form
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
// ------------------------------------------------------------------------
//  --------------------------------Why choose login360------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".sub-why-login-360-left-container-text2");
    let index = 0;

    function showNextText() {
        texts.forEach(text => text.classList.remove("active")); // Hide all
        texts[index].classList.add("active"); // Show current text

        index = (index + 1) % texts.length; // Loop back after the last text

        setTimeout(showNextText, 2000); // Change text every 2 seconds
    }

    showNextText();
});
// --------------------------------------------------------------------------
// ----------------------------------Timer clock----------------------------------

function startCountdown() {
    // Select the element
    let timerElement = document.querySelector(".claim-your-offer-text-time");

    // Extract the initial time values
    let timeText = timerElement.innerText;
    let [hours, minutes, seconds] = timeText.match(/\d+/g).map(Number);

    function updateTimer() {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        timerElement.innerText = "Time's up!";
        return;
      }

      // Decrease the time
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
      }

      // Update the text content
      timerElement.innerText = `${hours} hrs ${minutes} mins ${seconds} secs`;

      // Call updateTimer again after 1 second
      setTimeout(updateTimer, 1000);
    }

    updateTimer(); // Start countdown
  }

  startCountdown(); // Run on page load


// -------------------------------------------------------------------------------
// -----------------------------------claim your offers------------------

document.addEventListener("DOMContentLoaded", () => {
    const circularProgressBars = document.querySelectorAll(".circular-progress");
  
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };
  
    const animateProgress = (progressBar) => {
      if (progressBar.dataset.animated) return; // Prevent re-running
      progressBar.dataset.animated = "true"; 
  
      const progressValue = progressBar.querySelector(".percentage");
      const innerCircle = progressBar.querySelector(".inner-circle");
      let startValue = 0;
      const endValue = Number(progressBar.getAttribute("data-percentage"));
      const speed = 50;
      const progressColor = progressBar.getAttribute("data-progress-color");
  
      const progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        progressValue.style.color = progressColor;
        innerCircle.style.backgroundColor = progressBar.getAttribute("data-inner-circle-color");
  
        progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6}deg, ${progressBar.getAttribute("data-bg-color")} 0deg)`;
  
        if (startValue === endValue) {
          clearInterval(progress);
        }
      }, speed);
    };
  
    const handleScroll = () => {
      circularProgressBars.forEach((progressBar) => {
        if (isInViewport(progressBar)) {
          animateProgress(progressBar);
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load in case it's already in view
  });
  

// -------------------------------------------------------------------------------------
