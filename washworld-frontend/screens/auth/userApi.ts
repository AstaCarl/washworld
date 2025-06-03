import { UserDto } from "./userDto";

// UserApi class to handle API requests related to user operations
export class UserApi {
  static baseUrl = `${process.env.EXPO_PUBLIC_API_URL}`;


// Signup method to register a new user
  static async signup(userDto: UserDto) {
    console.log("calling", UserApi.baseUrl + "/auth/signup");
    // Call the API to create a new user, POST request to /auth/signup endpoint
    const response = await fetch(UserApi.baseUrl + "/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDto),
    });
    const data = await response.json();
    return data; // returns a token if successful
  }

  // Login method to authenticate a user
  static async login(username: string, password: string) {
    console.log("calling", UserApi.baseUrl + "/auth/login");

    // Call the API to log in a user, POST request to /auth/login endpoint
    const respone = await fetch(UserApi.baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await respone.json();
    return data; // returns a token if successful
  }

  // Method to GET all memberships
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

  // Method to GET all locations
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
