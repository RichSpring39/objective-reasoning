// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

//user
function isAdmin(user){
    if(user.userRole === `ADMIN`){
        return true;
    }else {
        return false;
    }
    // return user.userRole === "ADMIN";
}
let user1 = {
    firstName: `Eileen`,
    lastName: `smith`,
    userRole: `Regular_User`
};

let user2 = {
    firstName: `George`,
    lastName: `Agens`,
    userRole: `ADMIN`
};

console.log(isAdmin(user1));
console.log(isAdmin(user2));

//Email
function getEmail(user){
    emailAddress = String(user.firstName + "." + user.lastName + "@codeimmersives.com");
    return emailAddress.toLowerCase();
}
let U1 = {
    firstName: 'Richard',
    lastName: 'Springer',
}
console.log(getEmail(U1));


function getPlaylistLength(playlist){
    let length = playlist.songs.length
    return length;
}
let Playlist = {
    Name: `Def`,
    songs: [`Rock of Ages`, `Women`]
}
console.log(getPlaylistLength(Playlist));


//Homwork
function createHomework(name, averageScore){
    const homework = {
        name:name,
        averageScore: averageScore
    }
    return homework;
}

function getHardestHomework(homeworkArray){
    let scores = [];
    let hardestHomework;
    if(homeworkArray.length === 0){
        return "";
    }
    else{
        for(let i = 0; i < homeworkArray.length; i++){

            scores[i] = homeworkArray[i].averageScore
        }
        highestScore = Math.min(...scores);
        for(let i = 0; i < homeworkArray.length; i++){
            if(homeworkArray[i].averageScore === highestScore){
                hardestHomework =  homeworkArray[i].name;
            }
        }  
        return hardestHomework;
    }
}
let testHardHomework = [
    { name: 'homework 1',
    averageScore: 99 },
    { name: 'homework 2',
    averageScore: 1 }
]

console.log(getHardestHomework(testHardHomework));

//PhoneBook
function createPhonebook(namesArray, numbersArray){
    let arr1 = namesArray;
    let arr2 = numbersArray;
    let phonebook = new Object();  
    for(let i = 0; i < namesArray.length; i++){
        phonebook[arr1[i]] = arr2[i];
    }
    return phonebook;

}

console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']));

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};