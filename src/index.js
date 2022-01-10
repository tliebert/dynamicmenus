import './styles.css';

let listcontainer = document.querySelector("#menucontainer")

function addPositionToChildren (container) {

    function returnArrayOfChildren(parentEl) {
        return Array.from(parentEl.children)
    }

    let arrayChildren = returnArrayOfChildren(container)
    
    function addInitialClasses(element, index) {
        // console.log(typeof element, element);
        element.setAttribute("data-position", index)
        element.classList.add("option")
        element.classList.add("optionHidden")
    }
    
    function addDataAttributes(arr) {
        arr.forEach(addInitialClasses);
    }

    addDataAttributes(arrayChildren)

}

//  addVariableTransitionDelay(element, index)

addPositionToChildren(listcontainer)

function addVariableTransitionDelay(node, indexInList) {
    node.style.transitionDelay = `${indexInList}s`
}

function toggleMenuItems(event) {
    let nodes = document.querySelectorAll(".option");
    nodes.forEach(node => {
        let index = node.getAttribute("data-position")
        addVariableTransitionDelay(node, index)
        node.classList.toggle("optionHidden")
    })
}

const optionsButton = document.querySelector('#optionsButton')
optionsButton.addEventListener("click", toggleMenuItems)

