import { UserDto } from "./userDto";
import { baseUrl } from "../../constants";


export class AuthApi {
    static baseUrl = baseUrl;


    static async signup(userDto: UserDto) {
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