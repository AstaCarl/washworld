
// Create class WashApi to handle API calls related to washes
export class WashApi {
  static baseUrl = `${process.env.EXPO_PUBLIC_API_URL}`;


  // method to create a wash, POST request to /washes endpoint
  static async createWash(washObject: any, token?: string) {
    console.log("calling " + WashApi.baseUrl);

    try {
      const response = await fetch(WashApi.baseUrl + "/washes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(washObject),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error in createWash:", error);
      throw error;
    }
  }

  // method to get a wash by its ID, GET request to /washes/:washId endpoint
  static async getWashById(washId: number) {
    console.log("calling " + WashApi.baseUrl);
    try {
      const response = await fetch(`${WashApi.baseUrl}/washes/${washId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error fetching wash with id ${washId}: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error("Fetch error in getWashById:", error);
      throw error;
    }
  }
}
