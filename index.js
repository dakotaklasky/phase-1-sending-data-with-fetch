// Add your code here

function submitData(userName, userEmail){

    const formData ={
        name: userName,
        email: userEmail
    }

    const configurationObject = {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
        }

    
    const response = fetch("http://localhost:3000/users",configurationObject)
    
    const divElement = document.createElement('div')
    document.body.appendChild(divElement)

    response.then((r) => r.json())
    .then((j) => divElement.append(j.id))
    .catch((error) => divElement.append(error.message))

    return response
}


