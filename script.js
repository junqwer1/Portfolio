const navbarMenu = document.querySelector(".navbar_menu")
navbarMenu.addEventListener('click',(event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) return;
  let targetTop = target.getBoundingClientRect().top;
  console.log(targetTop)
  scrollIntoView(link)
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior:'smooth'})
  }