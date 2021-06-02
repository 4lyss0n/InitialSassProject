document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded")



    const LoadTheme = () => {
        const Result = localStorage.getItem("USER_THEME")
        if (Result == "dark") window.DarkModeToogle(true)
    }
    LoadTheme()

})




/*
    Simple Dark Mode and save "USER_THEME" in Local Storage

    for Update use "DarkModeToogle()"
*/


window.DarkModeToogle = darkMode => {
    darkMode = (typeof (darkMode) == 'boolean') ? darkMode : null
    const HTML = document.querySelector('html')
    const ClassDark = "DarkMode"

    switch (darkMode) {
        case null:
            const active = HTML.classList.contains(ClassDark)
            return window.DarkModeToogle(!active)
        case true:
            localStorage.setItem("USER_THEME", "dark")
            HTML.classList.add(ClassDark)
            return true
        case false:
            localStorage.setItem("USER_THEME", "light")
            HTML.classList.remove(ClassDark)
            return false
    }
}