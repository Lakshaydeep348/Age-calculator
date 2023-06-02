const buttonEl=document.getElementById("cal");
const valueEl=document.getElementById("date");
const textEl=document.getElementById("value");


function getDob()
{
  const birthdayValue=valueEl.value;
  if(birthdayValue==="")
  {
    alert("Please Enter The DOB")
  }
  else
  {
      getValueDob(birthdayValue);
  }

}


function getValueDob(birthdayValue)
{
    const current=new Date();
    const currentYear=current.getFullYear();
    const dob=new Date(birthdayValue);
    const year=dob.getFullYear();
    const answer=currentYear-year;
    textEl.innerText=answer;

}







buttonEl.addEventListener("click",()=>{
    getDob();
})