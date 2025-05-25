

let btn =document.querySelector("button");
btn.addEventListener("click", async ()=>{
  let fact = await getFacts();
  console.log(fact);
  let p= document.querySelector("#result");
  p.innerText= fact;
  p.style.display="block";
  p.style.color="blue";
  p.style.fontSize="20px";
  p.style.fontWeight="bold";
  p.style.textAlign="center";
})

let url="https://catfact.ninja/fact";

async function getFacts(){
  try{
  let res=  await axios.get(url);
  return res.data.fact;
  }catch(error){
    console.log("Error fetching data:", error);
    return "No fact found"
  }
  
}