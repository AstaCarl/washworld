// Create class MapApi to handle API calls related to map locations
export class MapApi {
  static baseUrl = `${process.env.EXPO_PUBLIC_API_URL}`;

  static async getLocations() {
    console.log("Fetching locations from API...", MapApi.baseUrl);
    
    // Fetch locations from the API, GET request to /locations endpoint
    const response = await fetch(MapApi.baseUrl + "/locations", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
}
