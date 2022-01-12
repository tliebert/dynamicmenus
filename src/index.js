import './styles.css';
import menuOptions from "./option.js"

function menuify(menuContainer, buttonID, optionsObject) {

    const optionsObjectButton = document.querySelector(`#${buttonID}`)
    optionsObjectButton.addEventListener("click", toggleMenuItems)

    addPositionToChildren(menuContainer)

    function addPositionToChildren (container) {

        function returnArrayOfChildren(parentEl) {
            return Array.from(parentEl.children)
        }
    
        let arrayChildren = returnArrayOfChildren(container)
        
        function addInitialClasses(element, index) {
            // console.log(typeof element, element);
            element.setAttribute("data-position", index)
            optionsObject.getInitialClasses().forEach(initClass => {
                element.classList.add(`${initClass}`)
            })
        }
        
        function addDataAttributes(arr) {
            arr.forEach(addInitialClasses);
        }
    
        addDataAttributes(arrayChildren)
    
    }
    
    function addVariableTransitionDelay(node, indexInList) {
        node.style.transitionDelay = `${indexInList}s`
    }
    
    function toggleMenuItems(event) {
        event.target.classList.toggle(`${optionsObject.buttonTransitionClass}`)
        let nodes = menuContainer.querySelectorAll(`.${optionsObject.mainOptionClass}`);
        nodes.forEach(node => {
            let index = node.getAttribute("data-position")
            addVariableTransitionDelay(node, index)
            node.classList.toggle(`${optionsObject.hiddenOptionClass}`)
            node.classList.add(`${optionsObject.transitionStyleClass}`)
        })
    }
}

let firstContainer = document.querySelector("#menucontainer")
let buttonID = "optionsButton"

menuify(firstContainer, buttonID, menuOptions)

let secondContainer = document.querySelector("#secondContainer")
let buttonID2 = "secondButton"

menuify(secondContainer, buttonID2, menuOptions)