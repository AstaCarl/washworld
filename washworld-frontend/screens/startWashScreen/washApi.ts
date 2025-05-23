export class WashApi {
  static baseUrl = `${process.env.EXPO_PUBLIC_API_URL}`;

  static async createWash(washObject: any) {
    console.log("calling " + WashApi.baseUrl);
    try {
      const response = await fetch(WashApi.baseUrl + "/washes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
}
