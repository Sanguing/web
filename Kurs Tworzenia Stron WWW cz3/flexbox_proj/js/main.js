const nav = document.querySelector(".nav")
const navBtn = document.querySelector(".burger-btn")
const allNavItems = document.querySelectorAll(".nav__item")

const handleNav = () => {
	const isOpening = !nav.classList.contains("nav--active")
	nav.classList.toggle("nav--active")

	handleNavItemsAnimations()
}

navBtn.addEventListener("click", handleNav)

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
