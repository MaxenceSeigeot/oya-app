export enum APIMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
export default async function api({
  method = APIMethods.GET,
  route,
  body = null,
}: {
  method?: APIMethods;
  route: string;
  body?: any;
}): Promise<any> {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(`http://192.168.1.13:8080/${route}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
