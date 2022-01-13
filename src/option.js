//this options page can be modified based on the name of the classes 
// attached to each of the items in the menu. 
// main and hidden option classes are the initial state and they start off screen
// transitionStyleClass will dictate how they enter and leave after the intial
// click

const options = {
    buttonID: "optionsButton",
    mainOptionClass: "option",
    hiddenOptionClass: "optionHidden",
    transitionStyleClass: "transition", 
    buttonTransitionClass: "showHideOptionsTransition",
    mainButtonClass: "showHideOptions",
    largestContainerClass: "questionContainer",
    optionsContainer: "optionsContainer",
    getInitialClasses: function() {
        return [this.mainOptionClass, this.hiddenOptionClass]
    }
}

export default options; 