import { UserDto } from "./userDto";


export class AuthApi {
    static baseUrl = "http://10.59.137.70:3000";


    static async signup(userDto: UserDto) {
        console.log("calling", AuthApi.baseUrl + "/auth/signup");
        console.log("request payload", userDto);
        const response = await fetch(AuthApi.baseUrl + "/auth/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            }, body: JSON.stringify(userDto),
        });
        const data = await response.json();
        return data;
    }

    static async login(username: string, password: string) {
        const respone = await fetch(AuthApi.baseUrl + "/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await respone.json();
        return data;
    }
}