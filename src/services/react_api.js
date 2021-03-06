const url= "http://localhost:3000/"
export const getHeroNames=(data,cb)=>{
    const apiUrl =url+"getHeroName"
    const requestData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({code:data})
    };
    fetch(apiUrl,requestData)
    .then(response=> response.json())
    .then(output=>cb(output))

}