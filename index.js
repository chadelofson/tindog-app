import { dogs } from './data'
import { Dog } from './dog'

function getNewDog() {
    const newDogData = dogs.shift()
    return newDogData ? new Dog(newDogData) : {}
}

const profileContainer = document.getElementById("profileContainer")
const likeBtn = document.getElementById("like")
const dislikeBtn = document.getElementById("dislike")

let hasClicked

likeBtn.addEventListener("click", e => {
    dislikeBtn.disabled = true
    hasClicked = true
    dog.setMatchStatus(true)
    profileContainer.appendChild(createBadge("images/badge-like.png", "Like Badge image"))
    render()
})

dislikeBtn.addEventListener("click", e => {
    likeBtn.disabled = true
    dog.setMatchStatus(false)
    hasClicked = true
    profileContainer.appendChild(createBadge('images/badge-nope.png', 'Dislike Badge Image'))
    render()
})

function createBadge(src, alt) {
    const badgeEl = document.createElement('img')
    badgeEl.classList.add('badge')
    badgeEl.src = src
    badgeEl.alt = alt
    
    return badgeEl    
}

function render() {
    if (dog && !hasClicked) {
        document.getElementById("profileContainer").innerHTML = dog.getDogHtml()
    }
    if (hasClicked) {
        hasClicked = false
        setTimeout(() => {
            if (dogs.length > 0) {
                likeBtn.disabled = false
                dislikeBtn.disabled = false
                likeBtn.blur()
                dislikeBtn.blur()
                dog = getNewDog()
                render()
            }
            
        }, 2000)
    }
}

let dog = getNewDog()
render()