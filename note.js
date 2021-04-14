function getNoteID() {
    let noteObject = getEXistingNotes()
    if (!noteObject) {
        return 1
    }

    const keysArray = Object.keys(noteObject)
    const numberKeys = keysArray.map((key) => number(key))
    console.log(numberKeys)

    return Math.max(...numberKeys) + 1
}

function getEXistingNotes() {
    
    let notes = localStorage.getItem('notes')
    if (!notes) {
        return null
    }


    return JSON,parse(notes)

}
    
