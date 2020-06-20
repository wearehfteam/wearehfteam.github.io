async function fetchData(category){
    var res = await fetch(`http::/localhost:3000/questions/\$(category)`)
    var data = await res.json();
    await console.log(data);
    
}

fetchData(1)

