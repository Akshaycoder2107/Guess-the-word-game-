player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML ="Answer Turn- "+ player2_name;
question_turn="player1";
answer_turn="player2";
function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in Lower Case" + word);
    char1 = word.charAt(1);
    char2 = word.charAt(Math.floor(word.length / 2));
    char3 = word.charAt(word.length - 1);
    remove_char1 = word.replace(char1, "_");
    remove_char2 = remove_char1.replace(char2, "_");
    remove_char3 = remove_char2.replace(char3, "_");
    question_row = "<h3 id='word_display'>Question : " + remove_char3 + "</h3>";
    input_box = "<br> Answer: <input type='text' id='input_check_box'>";
    check_btn = "<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";
    row = question_row + input_box + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("word in Lower Case" + answer); 
    if(answer==word) {
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    } 
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Question Turn- "+player2_name;
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
    }
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}