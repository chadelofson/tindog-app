// Create the Dog class here

export class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHtml() {
        const profileInfo = `
            <div class="profile-info">
                <div class="profile-bio">
                    <h2 class="profile-header">${ this.name }, ${ this.age }</h2>
                    <p class="profile-text">${ this.bio }</p>
                </div>
                <img src="${this.avatar}" alt="${this.bio}" class="dog-img">
            </div>`
        return profileInfo
    }
}