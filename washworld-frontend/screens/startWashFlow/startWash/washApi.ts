export class WashApi {
  static baseUrl = `${process.env.EXPO_PUBLIC_API_URL}`;

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
      console.log("Response from createWash:", data);
      return data;
    } catch (error) {
      console.error("Fetch error in createWash:", error);
      throw error;
    }
  }

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
      console.log("Response from getWashById:", data);
      return data;
    }
    catch (error) {
      console.error("Fetch error in getWashById:", error);
      throw error;
    }
  }
}
