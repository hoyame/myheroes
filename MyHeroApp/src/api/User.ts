import { MyHeroService } from "./Service";
import axios from 'axios';

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
    
        fetch('http://146.59.227.90:3333/user/signup', req)
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
        var params = {
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
    
        fetch('http://146.59.227.90:3333/user/login', req)
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
        //var myHeaders = new Headers();

        //return fetch(`http://146.59.227.90:3333/user/get?mail=${data}`, { 
        //    method: 'GET',
        //    //headers: myHeaders,
        //    //mode: 'cors',
        //})

        axios.get(`http://146.59.227.90:3333/user/get?mail=${data}`)
            .then((response) => {
                //console.log(response.data);

                cb(response)
                //console.log(response.status);
                //console.log(response.statusText);
                //console.log(response.headers);
                //console.log(response.config);
            })

            .catch((err) => {
                console.log("err", err)

                if (err = "[Error: Request failed with status code 500]") {
                   error(500);
                }
                
            })


        //const resJson = yield MyHeroService.get(`user/get?mail=${data}`);
        //const Data = resJson.data;

        //console.log(Data)


    
        //.then((resp) => console.log("gcdytcc", resp)) 
        //
        //.then(function(data) {})

        //.catch(function(err) {
        //    console.log("error", err)  
        //})
    } 

    //public static setAvatar(data: any, cb: any) {
    //    fetch("http://localhost:3000/api/upload", {
    //        method: "POST",
    //        body: JSON.stringify({
    //            name: data.name,
    //            type: data.type,
    //            uri: data.uri
    //        })
    //    })
    //    .then(response => response.json())
    //    .then(response => {
    //        console.log("upload succes", response);

    //        
    //    })
    //    .catch(error => {
    //        console.log("upload error", error);

    //    });
    //}
}
