player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML=player1_name;
document.getElementById("player_answer").innerHTML=player2_name;
function send(){
 get_word=document.getElementById("word").value;
 word=get_word.toLowerCase() ;
 console.log("word in Lower Case"+word) ;
 char1=word.charAt(1);
 char2=word.charAt(Math.floor(word.length/2));
 char3=word.charAt(word.length-1);
 remove_char1=word.replace(char1,"_");
 remove_char2=remove_char1.replace(char2,"_");
 remove_char3=remove_char2.replace(char3,"_");
 question_row="<h3 id='word_display'>Question : "+remove_char3+"</h3>";
 input_box="<br> Answer: <input type='text' id='input_check_box'>";
 check_btn="<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";
 row=question_row+input_box+check_btn;
 document.getElementById("output").innerHTML=row;
 document.getElementById ("word").innerHTML="";
}