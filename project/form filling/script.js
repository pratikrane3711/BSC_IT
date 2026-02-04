document.getElementById("upscForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const exam = document.getElementById("exam").value;

  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  const result = document.getElementById("result");
  result.style.color = "green";
  result.innerHTML = `
    ✅ Application Submitted Successfully! <br>
    <strong>Name:</strong> ${name} <br>
    <strong>Email:</strong> ${email} <br>
    <strong>Exam:</strong> ${exam}
  `;

  document.getElementById("upscForm").reset();
});
