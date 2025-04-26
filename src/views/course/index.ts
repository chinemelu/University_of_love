import "../../styles/css-reset.scss"
import './style.scss'
import '../../partials/navdefault'
import '../../partials/footer'
import '../../partials/testimonialCard.ts'
import '../../partials/NextSteps'



document.addEventListener('DOMContentLoaded', () => {
    const selectEl = document.querySelector('.course__select-course')
    const optionsArray = [
        'All',
        'Love',
        'Breakup',
        'Marriage',
        'Depression',
        'Individual'
    ]
    for (let i = 0; i < optionsArray.length; i++) {
        const el = optionsArray[i]
        const option = document.createElement('option')
        option.textContent = el
        selectEl.appendChild(option)
    }


    const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>

    Array.from(buttons).forEach(btn => {
        (btn as HTMLButtonElement).addEventListener('click', () => {
          window.location.href = 'course_content.html'
        })
    })
})