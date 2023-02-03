let elForm = document.querySelector('.form')
let elList = document.querySelector('.list')
let elInp1 = document.querySelector('.inp1')
let elInp2 = document.querySelector('.inp2')
let elInp3 = document.querySelector('.inp3')
let elInp4 = document.querySelector('.inp4')
let elBtn = document.querySelector('.btn')
let elEdit = document.querySelector('.edit')
let elDel = document.querySelector('del')

mapper()
function mapper() {
    fetch('https://63da4b612af48a60a7c9fee0.mockapi.io/usura')
        .then((res) => res.json())
        .then((data) => {
            data.map((item) => {
                let newLi = document.createElement('li')
                newLi.classList.add('item')
                newLi.innerHTML = `
                <div class="name">
                <h2 class="title-1">${item.lastName}</h2>
                    <h2 class="title-2">${item.firstName}k</h2>
            </div>
            <div class="phone">
            <a class="tel" href="#">${item.phone}</a>
        </div>
                    <div class="photo">
                    <button class="edit"><img src="./img/edit.png" alt=""></button>
                    <button class="del"><img src="./img/del.png" alt=""></button>
                    </div>
                `
                elList.appendChild(newLi)
            })
        })
}
elForm.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch('https://63da4b612af48a60a7c9fee0.mockapi.io/usura', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lastName: elInp1.value,
            firstName: elInp2.value,
            phone: elInp3.value,
        })
    })
        .then((res) => console.log(res))
        setTimeout(() => {
            mapper()
        },2000)
})


function mapper() {
    fetch('https://63da4b612af48a60a7c9fee0.mockapi.io/usura')
        .then((res) => res.json())
        .then((data) => {
            data.map((item) => {
                let newLi = document.createElement('li')
                newLi.classList.add('item')
                newLi.innerHTML = `
                <div class="name">
                <h2 class="title-1">${item.lastName}</h2>
                    <h2 class="title-2">${item.firstName}k</h2>
            </div>
            <div class="phone">
            <a class="tel" href="#">${item.phone}</a>
        </div>
                    <div class="photo">
                    <button class="edit"><img src="./img/edit.png" alt=""></button>
                    <button class="del"><img src="./img/del.png" alt=""></button>
                    </div>
                `
                elList.appendChild(newLi)
            })
        })
}
elForm.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch(`https://63da4b612af48a60a7c9fee0.mockapi.io/usura/${elInp4.value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lastName: elInp1.value,
            firstName: elInp2.value,
            phone: elInp3.value,
        })
    })
        .then((res) => console.log(res))
})


function mapper() {
    fetch('https://63da4b612af48a60a7c9fee0.mockapi.io/usura')
        .then((res) => res.json())
        .then((data) => {
            data.map((item) => {
                let newLi = document.createElement('li')
                newLi.classList.add('item')
                newLi.innerHTML = `
                <div class="name">
                <h2 class="title-1">${item.lastName}</h2>
                    <h2 class="title-2">${item.firstName}k</h2>
            </div>
            <div class="phone">
            <a class="tel" href="#">${item.phone}</a>
        </div>
                    <div class="photo">
                    <button class="edit"><img src="./img/edit.png" alt=""></button>
                    <button class="del"><img src="./img/del.png" alt=""></button>
                    </div>
                `
                elList.appendChild(newLi)
            })
        })
}
elForm.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch(`https://63da4b612af48a60a7c9fee0.mockapi.io/usura/${elInp4.value}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((res) => console.log(res))
})