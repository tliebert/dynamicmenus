import './styles.css';

let listcontainer = document.querySelector("#menucontainer")

function addPositionToChildren (container) {

    function returnArrayOfChildren(parentEl) {
        return Array.from(parentEl.children)
    }

    let arrayChildren = returnArrayOfChildren(container)
    
    function addDatakeyByIndex(element, index) {
        // console.log(typeof element, element);
        element.setAttribute("data-position", index)
        element.classList.add("optionHidden")
        addVariableTransitionDelay(element, index)
    }
    
    function addDataAttributes(arr) {
        arr.forEach(addDatakeyByIndex);
    }

    addDataAttributes(arrayChildren)

}

addPositionToChildren(listcontainer)

function addVariableTransitionDelay(node, indexInList) {
    node.style.transitionDelay = `${indexInList}s`
}

function toggleMenuItems(event) {
    let nodes = document.querySelectorAll(".option");
    nodes.forEach(node => node.classList.toggle("optionHidden"))
}

const optionsButton = document.querySelector('#optionsButton')
optionsButton.addEventListener("click", toggleMenuItems)