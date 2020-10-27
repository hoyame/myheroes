import { MyHeroService } from "./Service"

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
