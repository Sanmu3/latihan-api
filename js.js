let users = {
    results: [{
        gender: "male",
        name: {
            title: "Mr",
            first: "Nathan",
            last: "Williams"
        },
        location: {
            street: {
                number: 8047,
                name: "9th St"
            },
            city: "Stratford",
            state: "Yukon",
            country: "Canada",
            postcode: "H3R 2M1",
            coordinates: {
                latitude: "-61.1510",
                longitude: "-40.0899"
            },
            timezone: {
                offset: "+2:00",
                description: "Kaliningrad, South Africa"
            },
        },
        email: "nathan.williams@example.com",
        login: {
            uuid: "af8c1df8-f635-4053-a47f-0791377fadec",
            username: "heavyzebra124",
            password: "darkman",
            salt: "0xmwaupP",
            md5: "8a11bea7c78ec0061f172053d2818855",
            sha1: "d14986f92268ad0c6c278ffda6c62bc551a9119d",
            sha256: "76da34f50315eeb88d91024c632895f7ab95d5ff84f327ee4bae020f54b48543",
        },
        dob: {
            date: "1968-06-15T12:25:17.009Z",
            age: 52
        },
        registered: {
            date: "2013-01-10T16:02:16.641Z",
            age: 7
        },
        phone: "244-968-8771",
        cell: "208-729-4764",
        id: {
            name: "",
            value: null
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/8.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
        },
        nat: "CA",
    }, ],
    info: {
        seed: "07f61d9f916309ad",
        results: 1,
        page: 1,
        version: "1.3"
    },
};
console.log(users);
console.log(users.results[0]);
document.write('<h4>username : @' + users.results[0].login.username + '</h4>' +
    '<h4>Name : ' + users.results[0].name.title + ". " + users.results[0].name.first + ' ' + users.results[0].name.last + '</h4>' +
    '<h4>Gender : ' + users.results[0].gender + '</h4>' +
    '<h4>Cell Phone : ' + users.results[0].cell + '</h4>' +
    '<h4>Email : ' + users.results[0].email + '</h4>' +
    '<h4>Age : ' + users.results[0].dob.age + '</h4>' +
    '<h4>Address : ' + users.results[0].location.street.name + ' ' + users.results[0].location.street.number + ', ' +
    users.results[0].location.city + ', ' + users.results[0].location.state + ' - ' + users.results[0].location.country + '</h4>')