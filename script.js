// App-like tap feedback
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.opacity = "0.6";
    setTimeout(() => btn.style.opacity = "1", 150);
  });
});
