let toggleThemeIcon = document.querySelector(".toggle");
let theme = localStorage.getItem("theme");
if (theme == "dark") {
    document.documentElement.classList.add("dark");
    toggleThemeIcon.setAttribute("checked", true);
}



toggleThemeIcon.addEventListener("change", function () {
    if (theme == "light") {
        theme = "dark";
        localStorage.setItem("theme", theme);
        document.documentElement.classList.add("dark");
    }
    else {
        theme = "light";
        localStorage.setItem("theme", theme);
        document.documentElement.classList.remove("dark");
    }
});