window.addEventListener('DOMContentLoaded', (event) => {
    GetVisitCount
})

const functionAPI = '';

const GetVisitCount = () =>{
    let count = 30;
    fetch(functionAPI).then(response => {
        return response.json()
    }).then(respone => {
        console.log("Website called function API successfully");
        count = respone.count; 
        document.getElementById("coutner").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
}