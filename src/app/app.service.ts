import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService{

    data = [
        {
            "name":"Arjun",
            "marks":{
            "Maths":"43",
            "English":"30",
            "Science":"37"
            },
            "rollNumber":"KV2017-5A1"
            },
            {
                "name":"Akhil",
                "marks":{
                "Maths":"20",
                "English":"24",
                "Science":"45"
                },
                "rollNumber":"KV2017-5A2"
                },
        {
        "name":"Raju",
        "marks":{
        "Maths":"18",
        "English":"21",
        "Science":"45"
        },
        "rollNumber":"KV2017-5A3"
        },
        {
            "name":"Saipranay",
            "marks":{
            "Maths":"43",
            "English":"50",
            "Science":"45"
            },
            "rollNumber":"KV2017-5A4,"

            },
            {
                "name":"Shiva",
                "marks":{
                "Maths":"15",
                "English":"19",
                "Science":"23"
                },
                "rollNumber":"KV2017-5A5"
                },
            {
                "name":"Teju",
                "marks":{
                "Maths":"43",
                "English":"38",
                "Science":"40"
                },
                "rollNumber":"KV2017-5A6"
                },
        
        {
        "name":"rajesh",
        "marks":{
        "Maths":"42",
        "English":"31",
        "Science":"50"
        },
        "rollNumber":"KV2017-5A7"
        }];
}