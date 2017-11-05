import "phoenix_html"
import { exists, getId } from "./helpers"

// Launch initalizations after DOM is loaded
window.addEventListener("DOMContentLoaded", () => {

  // Common initializations
  initSidebar()
})

// Initialize sidebar and burger menu
let initSidebar = () => {
  getId("sidebar-button").addEventListener("click", switchMenu)
}

// Switch sidebar status
let switchMenu = (event) => {

  // Fetch button
  const btn = event.target.tagName === "IMG"
    ? event.target.parentNode
    : event.target

  // Toggle sidebar class
  const sidebar = getId("sidebar")
  sidebar.classList.toggle("opened")
}
