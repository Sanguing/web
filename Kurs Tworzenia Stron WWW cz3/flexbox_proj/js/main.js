const nav = document.querySelector(".nav")
const navBtn = document.querySelector(".burger-btn")
const allNavItems = document.querySelectorAll(".nav__item")

const navBtnBars = document.querySelector(".burger-btn__bars")
const allSections = document.querySelectorAll(".section")
const footerYear = document.querySelector(".footer__year")

const handleNav = () => {
	const isOpening = !nav.classList.contains("nav--active")
	nav.classList.toggle("nav--active")
	navBtnBars.classList.remove("black-bars-color")

	handleNavItemsAnimations()
}

allNavItems.forEach((item) => {
	item.addEventListener("click", () => {
		nav.classList.remove("nav--active")
	})
})

const handleNavItemsAnimations = () => {
	let delayTime = 0

	allNavItems.forEach((item) => {
		item.classList.remove("nav-items-animation")
		void item.offsetWidth // force reflow so the animation restarts reliably
		item.classList.add("nav-items-animation")
		item.style.animationDelay = delayTime + "s"
		delayTime += 0.1
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add("black-bars-color")
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove("black-bars-color")
		}
	})
}

handleCurrentYear()
window.addEventListener("scroll", handleObserver)
navBtn.addEventListener("click", handleNav)
