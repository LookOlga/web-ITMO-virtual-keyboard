const shiftMap = {
    backquote: {
        eng: "~",
        rus: "Ё"
    },
    digit1: {
        eng: '!',
        rus: '!',
    },
    digit2: {
        eng: '@',
        rus: '"',
    },
    digit3: {
        eng: '#',
        rus: '№',
    },
    digit4: {
        eng: '$',
        rus: ';',
    },
    digit5: {
        eng: '%',
        rus: '%',
    },
    digit6: {
        eng: '^',
        rus: ':',
    },
    digit7: {
        eng: '&',
        rus: '?',
    },
    digit8: {
        eng: '*',
        rus: '*',
    },
    digit9: {
        eng: '(',
        rus: '(',
    },
    digit0: {
        eng: ')',
        rus: ')',
    },
    minus: {
        eng: '_',
        rus: '_',
    },
    equal: {
        eng: '+',
        rus: '+',
    },
    backspace: {
        eng: "Backspace",
        rus: "Backspace",
    },
    tab: {
        eng: "Tab",
        rus: "Tab",
    },
    keyQ: {
        eng: "Q",
        rus: "Й"
    },
    keyW: {
        eng: "W",
        rus: "Ц"
    },
    keyE: {
        eng: "E",
        rus: "У"
    },
    keyR: {
        eng: "R",
        rus: "К",
    },
    keyT: {
        eng: "T",
        rus: "Е",
    },
    keyY: {
        eng: "Y",
        rus: "Н",
    },
    keyU: {
        eng: "U",
        rus: "Г",
    },
    keyI: {
        eng: "I",
        rus: "Ш",
    },
    keyO: {
        eng: "O",
        rus: "Щ",
    },
    keyP: {
        eng: "P",
        rus: "З",
    },
    bracketLeft: {
        eng: "{",
        rus: "Х",
    },
    bracketRight: {
        eng: "}",
        rus: "Ъ",
    },
    backslash: {
        eng: "|",
        rus: "/",
    },
    delete: {
        eng: "Del",
        rus: "Del",
    },
    capsLock: {
        eng: "Capslock",
        rus: "Capslock",
    },
    keyA: {
        eng: "A",
        rus: "Ф",
    },
    keyS: {
        eng: "S",
        rus: "Ы",
    },
    keyD: {
        eng: "D",
        rus: "В",
    },
    keyF: {
        eng: "F",
        rus: "А",
    },
    keyG: {
        eng: "G",
        rus: "П",
    },
    keyH: {
        eng: "H",
        rus: "Р",
    },
    keyJ: {
        eng: "J",
        rus: "О",
    },
    keyK: {
        eng: "K",
        rus: "Л",
    },
    keyL: {
        eng: "L",
        rus: "Д",
    },
    semicolon: {
        eng: ":",
        rus: "Ж",
    },
    quote: {
        eng: "\"",
        rus: "Э",
    },
    enter: {
        eng: "Enter",
        rus: "Enter",
    },
    shiftLeft: {
        eng: "Shift",
        rus: "Shift",
    },
    keyZ: {
        eng: "Z",
        rus: "Я",
    },
    keyX: {
        eng: "X",
        rus: "Ч",
    },
    keyC: {
        eng: "C",
        rus: "С",
    },
    keyV: {
        eng: "V",
        rus: "М",
    },
    keyB: {
        eng: "B",
        rus: "И",
    },
    keyN: {
        eng: "N",
        rus: "Т",
    },
    keyM: {
        eng: "M",
        rus: "Ь",
    },
    comma: {
        eng: "<",
        rus: "Б",
    },
    period: {
        eng: ">",
        rus: "Ю",
    },
    slash: {
        eng: "?",
        rus: ",",
    },
    arrowUp: {
        eng: "▲",
        rus: "▲",
    },
    shiftRight: {
        eng: "Shift",
        rus: "Shift",
    },
    controlLeft: {
        eng: "Ctrl",
        rus: "Ctrl",
    },
    metaLeft: {
        eng: "Win",
        rus: "Win",
    },
    altLeft: {
        eng: "Alt",
        rus: "Alt",
    },
    space: {
        eng: "Space",
        rus: "Space",
    },
    altRight: {
        eng: "Alt",
        rus: "Alt",
    },
    arrowLeft: {
        eng: "◄",
        rus: "◄",
    },
    arrowDown: {
        eng: "▼",
        rus: "▼",
    },
    arrowRight: {
        eng: "►",
        rus: "►",
    },
    controlRight: {
        eng: "Ctrl",
        rus: "Ctrl",
    },
}


const keysMap = {
    backquote: {
        eng: "`",
        rus: "ё",
        dataKey: "Backquote"
    },
    digit1: {
        eng: '1',
        rus: '1',
        dataKey: "Digit1"
    },
    digit2: {
        eng: '2',
        rus: '2',
        dataKey: "Digit2"
    },
    digit3: {
        eng: '3',
        rus: '3',
        dataKey: "Digit3"
    },
    digit4: {
        eng: '4',
        rus: '4',
        dataKey: "Digit4"
    },
    digit5: {
        eng: '5',
        rus: '5',
        dataKey: "Digit5"
    },
    digit6: {
        eng: '6',
        rus: '6',
        dataKey: "Digit6"
    },
    digit7: {
        eng: '7',
        rus: '7',
        dataKey: "Digit7"
    },
    digit8: {
        eng: '8',
        rus: '8',
        dataKey: "Digit8"
    },
    digit9: {
        eng: '8',
        rus: '8',
        dataKey: "Digit8"
    },
    digit9: {
        eng: '9',
        rus: '9',
        dataKey: "Digit9"
    },
    digit0: {
        eng: '0',
        rus: '0',
        dataKey: "Digit0"
    },
    minus: {
        eng: '-',
        rus: '-',
        dataKey: "Minus"
    },
    equal: {
        eng: '=',
        rus: '=',
        dataKey: "Equal"
    },
    backspace: {
        eng: "Backspace",
        rus: "Backspace",
        dataKey: "Backspace"
    },
    tab: {
        eng: "Tab",
        rus: "Tab",
        dataKey: "Tab"
    },
    keyQ: {
        eng: "q",
        rus: "й",
        dataKey: "KeyQ"
    },
    keyW: {
        eng: "w",
        rus: "ц",
        dataKey: "KeyW"
    },
    keyE: {
        eng: "e",
        rus: "у",
        dataKey: "KeyE"
    },
    keyR: {
        eng: "r",
        rus: "к",
        dataKey: "KeyR"
    },
    keyT: {
        eng: "t",
        rus: "е",
        dataKey: "KeyT"
    },
    keyY: {
        eng: "y",
        rus: "н",
        dataKey: "KeyY"
    },
    keyU: {
        eng: "u",
        rus: "г",
        dataKey: "KeyU"
    },
    keyI: {
        eng: "i",
        rus: "ш",
        dataKey: "KeyI"
    },
    keyO: {
        eng: "o",
        rus: "щ",
        dataKey: "KeyO"
    },
    keyP: {
        eng: "p",
        rus: "з",
        dataKey: "KeyP"
    },
    bracketLeft: {
        eng: "[",
        rus: "х",
        dataKey: "BracketLeft"
    },
    bracketRight: {
        eng: "]",
        rus: "ъ",
        dataKey: "BracketRight"
    },
    backslash: {
        eng: "\\",
        rus: "\\",
        dataKey: "Backslash"
    },
    delete: {
        eng: "Del",
        rus: "Del",
        dataKey: "Delete"
    },
    capsLock: {
        eng: "Capslock",
        rus: "Capslock",
        dataKey: "CapsLock"
    },
    keyA: {
        eng: "a",
        rus: "ф",
        dataKey: "KeyA"
    },
    keyS: {
        eng: "s",
        rus: "ы",
        dataKey: "KeyS"
    },
    keyD: {
        eng: "d",
        rus: "в",
        dataKey: "KeyD"
    },
    keyF: {
        eng: "f",
        rus: "а",
        dataKey: "KeyF"
    },
    keyG: {
        eng: "g",
        rus: "п",
        dataKey: "KeyG"
    },
    keyH: {
        eng: "h",
        rus: "р",
        dataKey: "KeyH"
    },
    keyJ: {
        eng: "j",
        rus: "о",
        dataKey: "KeyJ"
    },
    keyK: {
        eng: "k",
        rus: "л",
        dataKey: "KeyK"
    },
    keyL: {
        eng: "l",
        rus: "д",
        dataKey: "KeyL"
    },
    semicolon: {
        eng: ";",
        rus: "ж",
        dataKey: "Semicolon"
    },
    quote: {
        eng: "'",
        rus: "э",
        dataKey: "Quote"
    },
    enter: {
        eng: "Enter",
        rus: "Enter",
        dataKey: "Enter"
    },
    shiftLeft: {
        eng: "Shift",
        rus: "Shift",
        dataKey: "ShiftLeft"
    },
    keyZ: {
        eng: "z",
        rus: "я",
        dataKey: "KeyZ"
    },
    keyX: {
        eng: "x",
        rus: "ч",
        dataKey: "KeyX"
    },
    keyC: {
        eng: "c",
        rus: "с",
        dataKey: "KeyC"
    },
    keyV: {
        eng: "v",
        rus: "м",
        dataKey: "KeyV"
    },
    keyB: {
        eng: "b",
        rus: "и",
        dataKey: "KeyB"
    },
    keyN: {
        eng: "n",
        rus: "т",
        dataKey: "KeyN"
    },
    keyM: {
        eng: "m",
        rus: "ь",
        dataKey: "KeyM"
    },
    comma: {
        eng: ",",
        rus: "б",
        dataKey: 'Comma'
    },
    period: {
        eng: ".",
        rus: "ю",
        dataKey: 'Period'
    },
    slash: {
        eng: "/",
        rus: ".",
        dataKey: "Slash"
    },
    arrowUp: {
        eng: "▲",
        rus: "▲",
        dataKey: "ArrowUp"

    },
    shiftRight: {
        eng: "Shift",
        rus: "Shift",
        dataKey: "ShiftRight"
    },
    controlLeft: {
        eng: "Ctrl",
        rus: "Ctrl",
        dataKey: "ControlLeft"
    },
    metaLeft: {
        eng: "Win",
        rus: "Win",
        dataKey: "MetaLeft"
    },
    altLeft: {
        eng: "Alt",
        rus: "Alt",
        dataKey: "AltLeft"
    },
    space: {
        eng: "Space",
        rus: "Space",
        dataKey: "Space"
    },
    altRight: {
        eng: "Alt",
        rus: "Alt",
        dataKey: "AltRight"
    },
    arrowLeft: {
        eng: "◄",
        rus: "◄",
        dataKey: "ArrowLeft"
    },
    arrowDown: {
        eng: "▼",
        rus: "▼",
        dataKey: "ArrowDown"
    },
    arrowRight: {
        eng: "►",
        rus: "►",
        dataKey: "ArrowRight"
    },
    controlRight: {
        eng: "Ctrl",
        rus: "Ctrl",
        dataKey: "ControlRight"
    },
}


class VirtualKeyboard {
    constructor(firstLang, secondLang) {
        this.currentLocal = firstLang
        this.firstLang = firstLang
        this.secondLang = secondLang
        this.value = ''
        this.capslock = false
        this.shift = false
        this.mouseDown = false
        this.cursorPosition = null
        this.keybord = null
        this.keysContainer = null
        this.keys = []
        this.textarea = null
        this.langKeys = null
    }

    init() {
        this.keyboard = document.createElement('div')
        this.keyboard.classList.add('keyboard')

        this.keysContainer = document.createElement('div')
        this.keysContainer.classList.add('keys-container')

        this.keysContainer.appendChild(this.createKeys())
        this.keyboard.appendChild(this.keysContainer)

        this.textarea = document.createElement('textarea')
        this.textarea.classList.add('textarea')
        document.body.append(this.textarea)

        document.body.append(this.keyboard)

        this.cursorPosition = this.textarea.selectionStart = this.textarea.selectionEnd

        this.keysContainer.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.classList.contains('lang-key')) {
                this.value += target.textContent
                this.textarea.value = this.value
                this.textarea.focus()
            }

            if (target && target.classList.contains('key')) {
                target.classList.add('animate')
                target.addEventListener('animationend', () => {
                    target.classList.remove('animate')
                })
            }
        })

        document.addEventListener('keydown', (e) => {
            e.preventDefault()
            if (e.key === 'Alt' && e.ctrlKey || e.key === 'Control' && e.altKey) {
                if (this.currentLocal === this.firstLang) {
                    this.currentLocal = this.secondLang
                } else {
                    this.currentLocal = this.firstLang
                }
                this.keysContainer.innerHTML = ''
                this.keysContainer.appendChild(this.createKeys())
                if (this.capsLock) {
                    this.changeKyesForCapslock()
                }
            }

            this.enterText(e)
        })
    }

    addKey(element, value) {
        element.classList.add(value);
        element.textContent = keysMap[value][this.currentLocal];
    }

    addValueToTextarea() {
        this.textarea.value = this.value
        this.textarea.focus()
    }

    createKeys() {
        const fragment = document.createDocumentFragment();

        for (let key in keysMap) {
            const insertLineBreak = ['backspace', 'delete', 'enter', 'shiftRight'].includes(key)

            const keyElement = document.createElement('button')
            keyElement.classList.add('key')
            keyElement.setAttribute('type', 'button')
            keyElement.setAttribute('data-key', keysMap[key]["dataKey"])

            switch (key) {
                case 'arrowRight':
                    this.addKey(keyElement, key)

                    keyElement.addEventListener('click', () => {
                        this.moveCursorToTheRight()
                        this.textarea.focus()
                    })
                    break
                case 'arrowLeft':
                    this.addKey(keyElement, key)

                    keyElement.addEventListener('click', () => {
                        this.moveCursorToTheLeft()
                        this.textarea.focus()
                    })
                    break
                case 'arrowDown':
                    this.addKey(keyElement, key)
                    break
                case 'arrowUp':
                    this.addKey(keyElement, key)
                    break
                case 'backspace':
                    this.addKey(keyElement, key)

                    keyElement.addEventListener('click', () => {
                        this.value = this.value.substring(0, this.value.length - 1)
                        this.addValueToTextarea()
                    })
                    break
                case 'tab':
                    this.addKey(keyElement, key)

                    keyElement.addEventListener('click', () => {
                        this.value += '\t'
                        this.addValueToTextarea()
                    })
                    break
                case 'delete':
                    this.addKey(keyElement, key)

                    keyElement.addEventListener('click', () => {
                        this.delete()
                        this.addValueToTextarea()
                    })
                    break
                case 'capsLock':
                    this.addKey(keyElement, key)

                    keyElement.addEventListener('click', () => {
                        this.capsLock(keyElement);
                    })
                    break
                case 'enter':
                    this.addKey(keyElement, key)
                    keyElement.addEventListener('click', () => {
                        this.value += '\n'
                        this.addValueToTextarea()
                    })
                    break
                case 'shiftLeft':
                    this.addKey(keyElement, key)
                    keyElement.addEventListener('mousedown', () => {
                        this.shift = true
                        this.mouseDown = true
                        this.toggleKeys()
                    })
                    keyElement.addEventListener('mouseup', () => {
                        this.shift = false
                        this.mouseDown = false
                        this.toggleKeys()
                    })

                    keyElement.addEventListener('mouseout', (e) => {
                        this.animateShiftButton(e.target, this.shift)
                    })
                    break
                case 'shiftRight':
                    this.addKey(keyElement, key)
                    break
                case 'controlLeft':
                    this.addKey(keyElement, key)
                    break
                case 'controlRight':
                    this.addKey(keyElement, key)
                    break
                case 'altLeft':
                    this.addKey(keyElement, key)
                    break
                case 'altRight':
                    this.addKey(keyElement, key)
                    break
                case 'space':
                    this.addKey(keyElement, key)
                    keyElement.addEventListener('click', () => {
                        this.value += ' '
                        this.addValueToTextarea
                    })
                    break
                case 'metaLeft':
                    this.addKey(keyElement, key)
                    break
                default:
                    keyElement.textContent = keysMap[key][this.currentLocal]
                    keyElement.classList.add('lang-key')
            }

            fragment.appendChild(keyElement)

            if (insertLineBreak) {
                fragment.appendChild(document.createElement('br'))
            }
        }
        return fragment
    }

    changeKyesForCapslock() {
        const keysValues = document.querySelectorAll('.lang-key')
        const capslockKey = document.querySelector('.capsLock')

        keysValues.forEach((item) => {
            if (this.capslock) {
                capslockKey.classList.add('capslock-on')
                item.textContent = item.textContent.toUpperCase()
            } else {
                capslockKey.classList.remove('capslock-on')
                item.textContent = item.textContent.toLowerCase()
            }
        })
    }

    capsLock() {
        this.capslock = !this.capslock
        this.changeKyesForCapslock()
    }

    delete() {
        const currentPos = this.textarea.selectionStart
        this.value = this.value.slice(0, currentPos) + this.value.slice(currentPos + 1)
        this.addValueToTextarea()
        this.textarea.setSelectionRange(currentPos, currentPos)
    }

    toggleKeys() {
        const keys = document.querySelectorAll('.key')

        for (let key of keys) {
            let attrKey = key.getAttribute('data-key')
            attrKey = attrKey[0].toLowerCase() + attrKey.slice(1)
            if (this.shift) {
                key.textContent = shiftMap[attrKey][this.currentLocal]
            } else {
                key.textContent = keysMap[attrKey][this.currentLocal]
            }

        }
    }

    getCurrentLinePosition() {
        let currentPos = this.textarea.selectionStart
        while (true) {
            let symbol = this.textarea.value[currentPos]
            if (symbol === '\n') {
                currentPos++
                break
            }

            currentPos--

            if (currentPos === 0) {
                break
            }
        }
        return this.textarea.selectionStart - currentPos
    }

    getNextLinePosition() {
        let currentPos = this.textarea.selectionStart
        while (currentPos < this.textarea.value.length) {
            let symbol = this.textarea.value[currentPos]
            if (symbol === '\n') break
            currentPos++
        }
        return currentPos
    }

    getLineLength(start) {
        let temp = start
        while (start < this.textarea.value.length) {
            let symbol = this.textarea.value[start]
            if (symbol === '\n') break
            start++
        }

        return start - temp
    }

    getNextLineLength() {
        const pos = this.getNextLinePosition() + 1
        return this.getLineLength(pos)
    }

    enterText(e) {
        const dataKey = document.querySelector(`[data-key=${e.code}]`);
        if(!dataKey) return
        dataKey.classList.add('animate');
        dataKey.addEventListener('animationend', () => {
            dataKey.classList.remove('animate');
        })
        if (dataKey.classList.contains('lang-key')) {
            this.value += dataKey.textContent;
        }

        if (dataKey.classList.contains('backspace')) {
            this.value = this.value.substring(0, this.value.length - 1);
        }

        if (dataKey.classList.contains('delete')) {
           this.delete()
           return
        }

        if (dataKey.classList.contains('tab')) {
            this.value += '\t'
        }

        if (dataKey.classList.contains('enter')) {
            this.value += '\n'
        }

        if (dataKey.classList.contains('space')) {
            this.value += ' '
        }

        if (dataKey.classList.contains('capsLock')) {
            this.capsLock()
        }

        if (dataKey.classList.contains('shiftLeft')) {
            this.shift = !this.shift
            this.toggleKeys()
            this.animateShiftButton(dataKey, this.shift)
        }


        if (dataKey.classList.contains('arrowLeft')) {
            this.moveCursorToTheLeft()
        }

        if (dataKey.classList.contains('arrowRight')) {
            this.moveCursorToTheRight()
        }


        
        this.textarea.value = this.value
        this.textarea.focus()
    }

    animateShiftButton(key, shiftState) {
        if (shiftState) {
            key.classList.add('shift-on')
        } else {
            key.classList.remove('shift-on')
        }
    }

    moveCursorToTheLeft() {
        this.cursorPosition = this.textarea.selectionStart - 1
        if (this.textarea.selectionStart === 0) {
            return
        }
        this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition, "backward")
    }

    moveCursorToTheRight() {
        this.cursorPosition = this.textarea.selectionStart + 1
        this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition, "forward")
    }
}

new VirtualKeyboard('eng', 'rus').init()