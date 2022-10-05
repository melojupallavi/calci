let firstvalue="";

let secondvalue="";

let actualfirst="";

let sign=""

let div1=document.createElement("div");

div1.setAttribute("id","div1");

div1.setAttribute("class","divclass");

document.body.appendChild(div1);

 

let inp=document.createElement("input");

inp.setAttribute("type", "text");

inp.setAttribute("id", "inp");

console.log(inp);

document.getElementById("div1").appendChild(inp);

 

function clickhandler(e)

{

  //console.log(e.target.innerText);

  if(e.target.innerText==='+')

  {

    actualfirst=firstvalue;

    document.getElementById("inp").value='+';

    firstvalue=""

    sign='+';

 

  }

  else if(e.target.innerText==='-')

  {

    actualfirst=firstvalue;

    document.getElementById("inp").value='-';

    sign='-';

    firstvalue="";

  }

  else if(e.target.innerText==='*')

  {

    actualfirst=firstvalue;

    document.getElementById("inp").value='*';

    sign='*';

    firstvalue="";

  }

  else if(e.target.innerText==='/')

  {

    actualfirst=firstvalue;

    document.getElementById("inp").value='/';

    sign='/';

    firstvalue="";

  }

  else

  {

  firstvalue+=e.target.innerText;

  document.getElementById("inp").value=firstvalue;

  }

}

function clickhandlerofequal()

{

    secondvalue=firstvalue;

    if(sign=='+')

    document.getElementById("inp").value=parseInt(actualfirst)+parseInt(secondvalue);

    else if(sign=='*')

    document.getElementById("inp").value=parseInt(actualfirst)*parseInt(secondvalue);

    else if(sign=='/')

    {

      if(parseInt(actualfirst)===0 && parseInt(secondvalue)===0)

       alert("zero by zero");

      else if(parseInt(secondvalue)===0)

      alert("infinite");

      else

     document.getElementById("inp").value=parseInt(actualfirst)/parseInt(secondvalue);

    }

    else

    {

        console.log(actualfirst);

        console.log(secondvalue);

    document.getElementById("inp").value=parseInt(actualfirst)-parseInt(secondvalue);

    }

    firstvalue="";

    secondvalue="";

    actualfirst="";

    sign="";

}

function clickhandlerofclear()

{

    document.getElementById("inp").value="";

    firstvalue="";

    secondvalue="";

    actualfirst="";

    sign="";

}

let b=document.createElement("br");

document.getElementById("div1").appendChild(b);

 

let b1=document.createElement("button");

b1.setAttribute("type","submit");

b1.setAttribute("class","firstrow");

b1.innerText=1;

b1.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b1);

 

let b2=document.createElement("button");

b2.setAttribute("type","submit");

b2.setAttribute("class","firstrow");

b2.innerText=2;

b2.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b2);

 

let b3=document.createElement("button");

b3.setAttribute("type","submit");

b3.setAttribute("class","firstrow");

b3.innerText=3;

b3.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b3);

 

let br2=document.createElement("br");

document.getElementById("div1").appendChild(br2);

 

let b4=document.createElement("button");

b4.setAttribute("type","submit");

b4.setAttribute("class","firstrow");

b4.innerText=4;

b4.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b4);

 

let b5=document.createElement("button");

b5.setAttribute("type","submit");

b5.setAttribute("class","firstrow");

b5.innerText=5;

b5.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b5);

 

let b6=document.createElement("button");

b6.setAttribute("type","submit");

b6.setAttribute("class","firstrow");

b6.innerText=6;

b6.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b6);

 

let br3=document.createElement("br");

document.getElementById("div1").appendChild(br3);

 

let b7=document.createElement("button");

b7.setAttribute("type","submit");

b7.setAttribute("class","firstrow");

b7.innerText=7;

b7.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b7);

 

let b8=document.createElement("button");

b8.setAttribute("type","submit");

b8.setAttribute("class","firstrow");

b8.innerText=8;

b8.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b8);

 

let b9=document.createElement("button");

b9.setAttribute("type","submit");

b9.setAttribute("class","firstrow");

b9.innerText=9;

b9.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b9);

 

let br4=document.createElement("br");

document.getElementById("div1").appendChild(br4);

 

let b10=document.createElement("button");

b10.setAttribute("type","submit");

b10.setAttribute("class","firstrow");

b10.innerText='+';

b10.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b10);

 

let b11=document.createElement("button");

b11.setAttribute("type","submit");

b11.setAttribute("class","firstrow");

b11.innerText=0;

b11.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b11);

 

let b12=document.createElement("button");

b12.setAttribute("type","submit");

b12.setAttribute("class","firstrow");

b12.innerText='-';

b12.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b12);

 

let br6=document.createElement("br");

document.getElementById("div1").appendChild(br6);

 

let b15=document.createElement("button");

b15.setAttribute("type","submit");

b15.setAttribute("class","firstrow");

b15.innerText='*';

b15.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b15);

 

let b16=document.createElement("button");

b16.setAttribute("type","submit");

b16.setAttribute("class","firstrow");

b16.innerText='/';

b16.addEventListener("click",clickhandler);

document.getElementById("div1").appendChild(b16);

 

let b13=document.createElement("button");

b13.setAttribute("type","submit");

b13.setAttribute("class","firstrow");

b13.innerText='=';

b13.addEventListener("click",clickhandlerofequal);

document.getElementById("div1").appendChild(b13);

 

let br7=document.createElement("br");

document.getElementById("div1").appendChild(br7);

 

let b14=document.createElement("button");

b14.setAttribute("type","submit");

b14.setAttribute("class","firstrow");

b14.innerText='clear';

b14.addEventListener("click",clickhandlerofclear);

document.getElementById("div1").appendChild(b14);