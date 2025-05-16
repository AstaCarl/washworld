
export class MapApi {
  static baseUrl = `${process.env.EXPO_PUBLIC_API_URL}`;

  static async getLocations() {
    console.log("Fetching locations from API...", MapApi.baseUrl);
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
