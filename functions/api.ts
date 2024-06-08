export default async function api(route:string) {
    try {
        const response = await fetch(`https://mydigitalproject.farisun.fr/${route}`);
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error)
    }     
}