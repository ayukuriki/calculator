$(function(){
    let total = "";
    calcflag = false
    let num1 = ""
    calc = "+";
    
    $(".number").click(function(){
      let buttoncontent = $(this).text()
      console.log(buttoncontent)
      let num1 = buttoncontent
      calcflag = true
      total = total + num1
      console.log(total)
      $('.screen').text(total);

    })

    $(".calc").click(function(){
      if(calcflag === true){
        let calc = $(this).text()
        total = total + String(calc)
        $('.screen').text(total);
        calcflag = false
      }
    })

   $(".reset").click(function(){
      total = ""
      $('.screen').text(total);
      calcflag = false
      let num1 = ""
      calc = "+";
   })

   $(".result").click(function(){ 
      let result = eval(total);
      $('.screen').text(result);
   })
   
});



