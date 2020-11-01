import { MyHeroService } from "./Service";
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";
import { API_LINK } from "../App";

interface IUser {
    id?: number | undefined;
    pseudo: string | undefined;
    email: string | undefined;
    password: string | undefined;
    star?: number | undefined;
    xp?: number | undefined;
}


export default abstract class Users {
    public static Register(data: IUser, cb: any) {
        var params = {
            pseudo: data.pseudo,
            email: data.email,
            password: data.password
        }

        let req = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }
    
        fetch(`${API_LINK}/user/signup`, req)
            .then(function(res) {
                console.log(res);

                cb(res.status);
            })

            .catch(function(err) {
                console.log("errror", err)
            })
        ;
    }

    public static Login(data: IUser, cb: any) {
        let params = {
            pseudo: data.pseudo,
            email: data.email,
            password: data.password,
        }

        let req = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }
    
        fetch(`${API_LINK}/user/login`, req)
            .then(function(res) {
                console.log(res.status)

                cb(res.status);
            })

            .catch(function(err) {
                console.log("errror", err)
            })
        ;        
    }

    public static GetData(data: string, cb: any, error: any) {
        axios.get(`${API_LINK}/user/get?mail=${data}`)
            .then((response) => {
                cb(response)
            })

            .catch((err) => {
                console.log("err", err);

                if (err = "[Error: timeout of 300000ms exceeded]") {
                    error(0);
                }

                if (err = "[Error: Request failed with status code 500]") {
                   error(500);
                }
            }
        )
    } 

    public static UpdatePassword(data: { email: string, password: string }, cb: any) {
        var params = {
            email: data.email,
            password: data.password
        }

        let req = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }
    
        fetch(`${API_LINK}/user/update_password`, req)
            .then(function(res) {
                console.log(res);

                cb(res.status);
            })

            .catch(function(err) {
                console.log("errror", err)
            })
        ;
    }

    public static Disconnect() {
        const _storeData = async () => {
            try {
                await AsyncStorage.setItem('@name', '')
                await AsyncStorage.setItem('@mail', '')
            } catch (error) {
                console.log("error", error)
            }
        };
    }


}
