function sumValues() {
    var num1;
    var num2;
    var answer;

    num1=Number(document.formcalc.num1.value);
    num2=Number(document.formcalc.num2.value);
    ans= num1 + num2;
    document.formcalc.answer.value=ans;

}
