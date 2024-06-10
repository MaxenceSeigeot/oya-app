export default async function api(route:string) {
    try {
        const response = await fetch(`http://192.168.1.13:8080/${route}`);
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error)
    }     
}