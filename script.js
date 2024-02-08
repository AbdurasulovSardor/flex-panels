const panels = document.querySelectorAll(".panel")

function toggleOpen() {
  if (!this.className.includes('open')) {
    panels.forEach(panel => panel.classList.remove("open"))
    this.classList.add('open')
    return
  }
  this.classList.remove('open')
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    if (!this.className.includes('open-active')) {
      panels.forEach(panel => panel.classList.remove("open-active"))
      this.classList.add('open-active')
      return
    }
    this.classList.remove("open-active")
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen))
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive))