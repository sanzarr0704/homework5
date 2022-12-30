const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")

const tabImgs = document.querySelectorAll('.tabcontent img')
console.log(tabImgs)

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
    tabImgs.forEach((item) => {
        item.style.opacity = 0.5
    })
}

const showTabContent = (i = 3) => {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
    setTimeout(() => {
        tabImgs[i].style.opacity = 1
    }, 0)
}

hideTabContent()
showTabContent()

hideTabContent()
showTabContent()

tabsParent.addEventListener("click", (event) => {
    const target = event.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item){
                currSlide = i
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})
let currSlide = 0
setInterval(() => {
    if (currSlide < tabContent.length - 1){
        currSlide++
        hideTabContent()
        showTabContent(currSlide)
    } else {
        currSlide = 0
        hideTabContent()
        showTabContent(currSlide)
    }
}, 1000)




const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")
let isModalOpened = false

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalTrigger.addEventListener('click',openModal)
closeModalBtn.addEventListener('click',closeModal)

window.onscroll =() => {
    if (document.documentElement.scrollTop >= 3270 && isModalOpened === false) {
        isModalOpened = true
        openModal()
    }
}
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('show')) {
      closeModal()
  }
})

const  message = {
    loading: "Идет загруска...",
    success: "Спасибо скоро свяжимся!!!"

}

const form = document.querySelector("form")

const postData = (url,data) => {
    const res = fetch(url, {
        method: "POST",
        headers:{"Content-type": "application/json"},
        body: data
    })
    return res
}

const  binPostData = (form) => {
    form.addEventListener("sumbit", (e) => {
        e.preventDefault()


        const formData = new FormData(form)
        const object = {}

        formData.forEach((item) => {
            obj[i] = item
        })

        const json = JSON.stringify(object)


        forms.forEach((item) => {
            binPostData(item)
        })


        postData("server.php", json)
            .then((data) => console.log(data.status))
            .catch((e) => console.error(e))
            .finally(() => console.warn("finally"))

        fetch('http://jsonplaceholder.typicode.com/todos/89')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(() => console.error("error"))
            .finally(() => console.warn("finally"))
    })
}







const modal2 = document.querySelector(".modal")
const modalTrigger2 = document.querySelector(".btn_dark")
const closeModalBtn2 = document.querySelector(".modal__close")
let isModalOpened2 = false

const openModal2 = () => {
    modal2.classList.add("show")
    modal2.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger2.addEventListener("click", openModal2)

const closeModal2 = () => {
    modal2.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalTrigger2.addEventListener('click',openModal2)
closeModalBtn2.addEventListener('click',closeModal2)

window.onscroll =() => {
    if (document.documentElement.scrollTop >= 3270 && isModalOpened === false) {
        isModalOpened = true
        openModal2()
    }
}
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('show')) {
      closeModal2()
  }
})

const  message2 = {
    loading: "Идет загруска...",
    success: "Спасибо скоро свяжимся!!!"

}

const form2 = document.querySelector("form")

const postData2 = (url,data) => {
    const res2 = fetch(url, {
        method: "POST",
        headers:{"Content-type": "application/json"},
        body: data
    })
    return res2
}

const  binPostData2 = (form) => {
    form.addEventListener("sumbit", (e) => {
        e.preventDefault()


        const formData2 = new FormData(form)
        const object = {}

        formData2.forEach((item) => {
            obj[i] = item
        })

        const json = JSON.stringify(object)


        forms.forEach((item) => {
            binPostData2(item)
        })


        postData2("server.php", json)
            .then((data) => console.log(data.status))
            .catch((e) => console.error(e))
            .finally(() => console.warn("finally"))

        fetch('http://jsonplaceholder.typicode.com/todos/89')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(() => console.error("error"))
            .finally(() => console.warn("finally"))
    })
}




