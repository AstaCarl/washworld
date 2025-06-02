
// Create a class to handle API requests for additional programmes
export class AdditionalProgrammeApi {
  static baseUrl = `${process.env.EXPO_PUBLIC_API_URL}`;

  static async getAdditionalProgrammes() {
    console.log(
      "Fetching additional programmes from API...",
      AdditionalProgrammeApi.baseUrl
    );
    const response = await fetch(
      AdditionalProgrammeApi.baseUrl + "/additional-programmes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
}
