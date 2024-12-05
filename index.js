const menuIcon = document.getElementById("menuIcon");
const menuDropdown = document.getElementById("menuDropdown");
menuIcon.addEventListener("click", () => {
  menuDropdown.style.display =
    menuDropdown.style.display === "none" || menuDropdown.style.display === ""
      ? "block"
      : "none";
});
document.addEventListener("click", (event) => {
  if (
    !menuIcon.contains(event.target) &&
    !menuDropdown.contains(event.target)
  ) {
    menuDropdown.style.display = "none";
  }
});