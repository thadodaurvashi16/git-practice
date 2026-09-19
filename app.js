document.getElementById('clickBtn').addEventListener('click', function() {
  const desc = document.getElementById('description');
  desc.textContent = "Great job! Git tracking is working properly.";
  desc.style.color = "green";
  console.log("Git demo button clicked!");
});