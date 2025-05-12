import { UserDto } from "./userDto";


export class AuthApi {
    static baseUrl = process.env.EXPO_PUBLIC_API_URL;

    static async signup(userDto: UserDto) {
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