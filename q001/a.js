/*
    제어문
        조건문
            if      <<< 얘 이야기
            switch
*/

/*
    rule.

    if(조건식){

    }
*/
var x = Math.floor(Math.random()*100)+1;
//if , else
document.write(x);
document.write("<hr>");

if(x > 60){
    document.write("60보다 큼");
} else if(x >= 50 && x <= 60) {   
    document.write("50~60 나왔네요 당첨!");
} else {
    document.write("50보다 작음");
}


document.write("<hr>");
//switch-case 문
switch(x)
{
    case 1:
        document.write("1임");
        break;
    case 2:
        document.write("2임");
        break;
    case 3:
        document.write("3임");
        break;
    case 4:
        document.write("4임");
        break;        
}

