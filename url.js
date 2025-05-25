let url="https://catfact.ninja/fact";

fetch(url)
.then((response)=>{
  console.log(response);
  response.json().then((data)=>{
    console.log("Data fetched successfully:", data);
    
  })
})
.catch((error)=>{
  console.log("Error fetching data:", error);
  
})