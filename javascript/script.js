function  animBurger() {
        console.log("hello")
        const burger = document.querySelector(".burger");
        const navigation = document.querySelector(".navigation");
        let buttonState = 0    
        burger.addEventListener("click", (e) => {
            if (buttonState == 0) {
                navigation.style.display = "block"
                buttonState = 1
            }
            else {
                navigation.style.display = "none"
                buttonState = 0
            }
    })
} 
animBurger()


function animOffre() {
    const cards = document.querySelectorAll(".card")
    cards.forEach((card, index) => {
        card.id = `card ${index}`
        let isOpen = false
        card.addEventListener('click', (e) => {
            const specificCard = document.getElementById(`card ${index}`);
            const textElement = specificCard.querySelector('.card_text')
            const arrow = specificCard.querySelector('.card_header_arrow')
            if ( isOpen == false) {
                isOpen = true
                textElement.style.display = 'block'
                arrow.style.rotate = '0deg'
                specificCard.style.opacity = '1' 

            } else {
                isOpen = false
                textElement.style.display = 'none'
                arrow.style.rotate = '180deg'
                specificCard.style.opacity = '0.5' 
            }
            
        })
    
    })
}
animOffre()

function openModal () {
    buttonModal = document.querySelector('.open_fascicule')
    modal = document.querySelector('.modal')
    form = document.querySelector('form')
    buttonModal.addEventListener('click', () => {
        modal.style.display = 'flex'

    })

}

openModal ()

function closeModal () {
    buttonModal = document.querySelector('.open_fascicule')
    modal = document.querySelector('.modal')
    form = document.querySelector('form')

    modal.addEventListener('click', (e) => {
        if (e.target == modal && e.target !== form ) {
            modal.style.display = 'none'
        }
       
    })

}

closeModal ()

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function submitDownloadForm () {

    const email = document.getElementById('email')
    const popForm = document.querySelector('.form')
    const emailError = document.querySelector(".emailError")
    const telechargerButton = document.querySelector('.submit_telecharger')

    popForm.addEventListener('submit', (e) => {

        e.preventDefault()
        if (validateEmail(email.value)) {
            console.log("appel api airtable")
            emailError.style.display = "none"
            telechargerButton.setAttribute("download", "test")
            telechargerButton.click()
            telechargerButton.removeAttribute("download")

        } else {
            console.log("ce n'est pas un email")
            emailError.style.display = "block"
        }
    })
}
submitDownloadForm ()