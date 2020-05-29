const KeyCode = {
    ESC: 27,
};

const isEscEvent = (evt, action) => {
    if (evt.keyCode === KeyCode.ESC) {
        action();
    }
};