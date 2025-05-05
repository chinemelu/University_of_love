import "../../styles/css-reset.scss"
import './style.scss'
import '../../partials/navdefault'
import '../../partials/footer'
import '../../partials/testimonialCard'
import '../../partials/NextSteps'



document.addEventListener('DOMContentLoaded', () => {
    const courseTemplate = document.getElementById("course-template") as HTMLTemplateElement
    const courseTemplateContent = <DocumentFragment>courseTemplate.content.cloneNode(true);
    const courseSection = courseTemplateContent.firstElementChild
    const backdropImageSection = document.getElementById('backdrop-image-section')
    backdropImageSection.insertAdjacentElement('afterend', courseSection)

    const courseDetailsTemplate = document.getElementById('course-details-template') as HTMLTemplateElement
    const courseDetailsTemplateContent = courseDetailsTemplate.content.cloneNode(true)
    const courseDetailsElement = (courseDetailsTemplateContent as DocumentFragment).firstElementChild

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
            courseSection.remove()
            backdropImageSection.insertAdjacentElement('afterend', courseDetailsElement)

            const tabs = document.querySelector('.course__details__tabs') 
            const tabChildren = tabs.children as HTMLCollectionOf<HTMLLIElement>
            if (tabs) {
                // add active to the first tab
                // console.log('tabs children', tabs.children[0])
                tabChildren[0].classList.add('active')
                const defaultTabSuffix = tabChildren[0].dataset.tab
                const defaultTabTemplateId = `tab-content__${defaultTabSuffix}`
                const defaultTabTemplate = document.getElementById(defaultTabTemplateId) as HTMLTemplateElement
                const defaultTabTemplateContent = <DocumentFragment>defaultTabTemplate.content.cloneNode(true)
                const defaultTabTemplateElement = defaultTabTemplateContent.firstElementChild
                tabs.insertAdjacentElement('afterend', defaultTabTemplateElement)
                let tabTemplateElement = defaultTabTemplateElement

                Array.from(tabChildren).forEach(tab => {
                    tab.addEventListener('click', () => {
                        Array.from(tabChildren).forEach(tab => {
                            tabTemplateElement.remove()
                            tab.classList.remove('active')
                        })
                        const tabSuffix = tab.dataset.tab
                        const tabTemplateId = `tab-content__${tabSuffix}`
                        console.log('tabTemplateId', tabTemplateId)
                        const tabTemplate = document.getElementById(tabTemplateId) as HTMLTemplateElement
                        const tabTemplateContent = <DocumentFragment>tabTemplate.content.cloneNode(true)
                        tabTemplateElement = tabTemplateContent.firstElementChild
                        tab.classList.add('active')
                        tabs.insertAdjacentElement('afterend', tabTemplateElement)
                    })
                })
            }
        })
    })
    
})