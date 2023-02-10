
function getElementByIdValue(element) {

    const elementId = document.getElementById(element);
    const elementIdString = elementId.value;
    const elementIdValue = parseFloat(elementIdString);

    return elementIdValue;

}

function setText(elementId,value) {
    
    const elementIdPositon = document.getElementById(elementId);
    elementIdPositon.innerText = value;
}

function getTextValue(textId) {
    
    const textIdPostion = document.getElementById(textId);
    const textString = textIdPostion.innerText;
    const textIdValue= parseFloat(textString);

    return textIdValue;
}