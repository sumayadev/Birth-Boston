let section = document.getElementById("resource")

let data = [
  {
    "name": "Resilient Sisterhood Project",
    "type": "education",
    "contact": "(617) 590-4003"
  },
  {
    "name": "Birth Sister Program at Boston Medical Center",
    "type": "doula",
    "contact": "(617)414-7333"
  },
  {
    "name": "Accompany Doula Care",
    "type": "doula",
    "contact": "info@accompanydoulacare.com"
  },
  {
    "name": "Planned Parenthood Boston",
    "type": "medical",
    "contact": "(800) 258-4448"
  },
  {
    "name": "Betsy Lehman Center",
    "type": "medical",
    "contact": "(617) 701-8271"
  },
  {
    "name": "Tufts Medical Center Maternal Fetal Medicine Program",
    "type": "medical",
    "contact": "(617) 636-4549"
  },
  {
    "name": "Maternal & Child Health Center of Excellence",
    "type": "education",
    "contact": "617-358-1342"
  },
  {
    "name": "Women's Foundation of Boston",
    "type": "education",
    "contact": "https://wfboston.org/about/"
  },
  {
    "name": "Ibis Reproductive Health",
    "type": "education",
    "contact": "(617) 349-0040"
  },
]



document.addEventListener('DOMContentLoaded', function() {
  for (obj of data) {
    let div = document.createElement("div")
    div.className = "card"
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    h1.innerText = obj["name"]
    p.innerText = obj["contact"]
    div.classList = "card"
    div.appendChild(h1)
    div.appendChild(p)
    section.appendChild(div)
  }
});




let doula = document.getElementById('doula')
let medical = document.getElementById('medical')
let education = document.getElementById('education')


doula.addEventListener('click', function() {
  console.log("clicked doula")
  section.innerHTML = ""
  for (obj of data) {
    if (obj["type"] == "doula") {
      let div = document.createElement("div")
      div.className = "card"
      let h1 = document.createElement('h1')
      let p = document.createElement('p')
      h1.innerText = obj["name"]
      p.innerText = obj["contact"]
      div.appendChild(h1)
      div.appendChild(p)
      section.appendChild(div)
    }
  }
})

medical.addEventListener('click', function() {
  console.log("clicked medical")
  section.innerHTML = ""
  for (obj of data) {
    if (obj["type"] == "medical") {
      let div = document.createElement("div")
      div.className = "card"
      let h1 = document.createElement('h1')
      let p = document.createElement('p')
      h1.innerText = obj["name"]
      p.innerText = obj["contact"]
      div.appendChild(h1)
      div.appendChild(p)
      section.appendChild(div)
    }
  }
})

education.addEventListener('click', function() {
  console.log("clicked education")
  section.innerHTML = ""
  for (obj of data) {
    if (obj["type"] == "education") {
      let div = document.createElement("div")
      div.className = "card"
      let h1 = document.createElement('h1')
      let p = document.createElement('p')
      h1.innerText = obj["name"]
      p.innerText = obj["contact"]
      div.appendChild(h1)
      div.appendChild(p)
      section.appendChild(div)
    }
  }
})