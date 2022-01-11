import './styles.css';
import OPTIONS from "./option.js"

function addPositionToChildren (container) {

    function returnArrayOfChildren(parentEl) {
        return Array.from(parentEl.children)
    }

    let arrayChildren = returnArrayOfChildren(container)
    
    function addInitialClasses(element, index) {
        // console.log(typeof element, element);
        element.setAttribute("data-position", index)
        OPTIONS.getInitialClasses().forEach(initClass => {
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
    let nodes = document.querySelectorAll(`.${OPTIONS.mainOptionClass}`);
    nodes.forEach(node => {
        let index = node.getAttribute("data-position")
        addVariableTransitionDelay(node, index)
        node.classList.toggle(`${OPTIONS.hiddenOptionClass}`)
        node.classList.add(`${OPTIONS.transitionStyleClass}`)
    })
}

const optionsButton = document.querySelector(`#${OPTIONS.buttonID}`)
optionsButton.addEventListener("click", toggleMenuItems)

let listcontainer = document.querySelector("#menucontainer")
addPositionToChildren(listcontainer)

const secondButton = document.querySelector("#secondButton")
secondButton.addEventListener("click", toggleMenuItems)

let secondContainer = document.querySelector("#secondContainer");
addPositionToChildren(secondContainer)

