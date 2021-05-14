
export function checkIfDataInLocalStorage(){
    return localStorage.length>0;
}

export function getLocalStorageNotes(){
    let notes = [];
    for(let i=0;i<localStorage.length;i++){
        let n = {
            timestamp : localStorage.key(i),
            message : localStorage.getItem(localStorage.key(i))
        }

        notes.push(n);
    }

    return notes;
}

export function formatNoteMessage(message){
    return message.replaceAll("\n","<br/>");
}