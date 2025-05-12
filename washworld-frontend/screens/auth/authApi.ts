import { UserDto } from "./userDto";


export class AuthApi {
    static baseUrl = "http://192.168.0.19:3000";


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
}