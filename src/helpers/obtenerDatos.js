const obtenerDatos = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        
    }
}

export {
    obtenerDatos
}