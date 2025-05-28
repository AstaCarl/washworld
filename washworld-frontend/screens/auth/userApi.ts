import { UserDto } from "./userDto";

export class UserApi {
  static baseUrl = `${process.env.EXPO_PUBLIC_API_URL}`;

  static async signup(userDto: UserDto) {
    console.log("calling", UserApi.baseUrl + "/auth/signup");
    console.log("request payload", userDto);
    const response = await fetch(UserApi.baseUrl + "/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDto),
    });
    const data = await response.json();
    return data;
  }

  static async login(username: string, password: string) {
    console.log("calling", UserApi.baseUrl + "/auth/login");
    const respone = await fetch(UserApi.baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await respone.json();
    return data;
  }

  static async getMemberships() {
    const response = await fetch(UserApi.baseUrl + "/memberships", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }

  static async getLocations() {
    const response = await fetch(UserApi.baseUrl + "/locations", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
}
