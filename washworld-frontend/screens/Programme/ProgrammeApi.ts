export class ProgrammeApi {
  static baseUrl = `${process.env.EXPO_PUBLIC_API_URL}`;

  static async getProgrammes() {
    console.log("Fetching programmes from API...", ProgrammeApi.baseUrl);
    const response = await fetch(ProgrammeApi.baseUrl + "/programmes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
}
