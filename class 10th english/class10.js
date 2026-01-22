/* ===========================
   Q&A TOGGLE SCRIPT
   =========================== */

document.addEventListener("DOMContentLoaded", function () {

  const questions = document.querySelectorAll(".qa-question-10");

  questions.forEach((question) => {
    question.addEventListener("click", function () {

      const answer = this.nextElementSibling;

      // Close all other answers
      document.querySelectorAll(".qa-answer-10").forEach((item) => {
        if (item !== answer) {
          item.style.display = "none";
        }
      });

      // Toggle current answer
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });

});


/* ===========================
   CHAPTER BUTTON ACTIVE STATE
   =========================== */

const chapterButtons = document.querySelectorAll(".chapter-buttons-10 button");

chapterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {

    chapterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Placeholder for chapter change logic
    alert("Chapter content will load here");
  });
});


/* ===========================
   BUY PDF BUTTON
   =========================== */

const buyBtn = document.querySelector(".btn-buy-10");

if (buyBtn) {
  buyBtn.addEventListener("click", () => {
    alert("Redirecting to payment page...");
    // window.location.href = "payment.html";
  });
}


/* ===========================
   MCQ TEST BUTTON
   =========================== */

const testBtn = document.querySelector(".btn-test-10");

if (testBtn) {
  testBtn.addEventListener("click", () => {
    alert("Starting MCQ Test...");
    // window.location.href = "firstflight-ch1-test.html";
  });
}


// ====================== FINAL YAHA TK SAHI HAI JS ===================================