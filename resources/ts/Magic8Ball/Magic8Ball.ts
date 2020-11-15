

const positiveAnswers = new Map([
    [9, "It is certain."],
    [8, "It is decidedly so."],
    [7, "Without a doubt."],
    [6, "Yes – definitely."],
    [5, "You may rely on it."],
    [4, "As I see it, yes."],
    [3, "Most likely."],
    [2, "Outlook good."],
    [1, "Yes."],
    [0, "Signs point to yes."],

]);

const negativeAnswers = new Map([
    [0, "Don't count on it."],
    [1, "My reply is no."],
    [2, "My sources say no."],
    [3, "Outlook not so good."],
    [4, " Very doubtful."]
]);

const nonCommitalAnswers = new Map([
    [4, "Reply hazy, try again."],
    [3, "Ask again later."],
    [2, "Better not tell you now."],
    [1, "Cannot predict now."],
    [0, "Concentrate and ask again."]
]);

const answerGroups = new Map ([
    [0, negativeAnswers],
    [1, nonCommitalAnswers],
    [2, positiveAnswers]
]);
function getRandomInt(maxNum:number) {
    return Math.floor(Math.random() * Math.floor(maxNum));
}
function getAnswer(){

    let key:number = getRandomInt(answerGroups.size);
    let answerList: Map<any, any> = answerGroups.get(key);
    key = getRandomInt(answerList.size);
    return "<strong>"+answerList.get(key)+"</strong>";
}

function setAnswer(){
    let resultElem = (document.getElementById("result") as HTMLInputElement);
    resultElem.innerHTML = getAnswer();
}
