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

export let AvisUsers = []


export default abstract class Users {

    public static GetRate(user: string) {
        axios.get(`${API_LINK}/user/get_rate/?user=${user}`)
            .then((response) => {
                const data = response.data

                AvisUsers = data

                console.log(data);
            })

            .catch((err) => {
                console.log("err", err);
            }
        )
    }

    public static async Load(succes: any, errorFunc: any, newUser: any) {
        let AMail = await AsyncStorage.getItem('@mail') || '';
        console.log(typeof AMail)

        try {
            if (AMail !== "") {
                this.GetData(AMail, (e: any) => {
                    const data = JSON.stringify(e.data[0])
                    const status: number = e.status
                    const pseudo = e.data[0].pseudo
                    const rate = parseFloat(JSON.stringify(e.data[0].rate))
                    const xp = parseFloat(JSON.stringify(e.data[0].xp))
                    const img = e.data[0].img

                    if (status == 200) {
                        let d = {
                            mail: AMail,
                            data: data,
                            pseudo: pseudo,
                            rate: rate,
                            xp: xp,
                            img: img
                        }

                        this.GetRate(pseudo)
                        succes(d);
                        console.log("200")
                    } else {
                        newUser()
                        console.log("else200")
                    }
                }, (error: number) => {
                    if (error == 500) {
                        newUser()
                        console.log("e500")
                    } else if (error == 0) {
                        errorFunc()
                    }
                })
            } else {
              newUser();
            }  
        } catch (error) {
            newUser();
        }
    }

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

    public static UpdatePseudo(data: { email: any; pseudo: any; }, cb: any) {
        var params = {
            email: data.email,
            pseudo: data.pseudo
        }
        
        let req = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }

        fetch(`${API_LINK}/user/update_pseudo`, req)
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
                await AsyncStorage.removeItem('@mail')
            } catch (error) {
                console.log("error", error)
            }
        };

        _storeData();
    }
}

