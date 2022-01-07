import './styles.css';

function addPositionToChildren (container) {

    function returnArrayOfChildren(parentEl) {
        return Array.from(parentEl.children)
    }

    let arrayChildren = returnArrayOfChildren(container)
    
    function addDatakeyByIndex(element, index) {
        // console.log(typeof element, element);
        element.setAttribute("data-position", index)
    }
    
    function addDataAttributes(arr) {
        console.log(typeof arr, arr)
        arr.forEach(addDatakeyByIndex);
    }

    addDataAttributes(arrayChildren)

}

let listcontainer = document.querySelector("#menucontainer")

addPositionToChildren(listcontainer)

