

export class allfriends {
    inr: number;
    date: string;
    streetaddress: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
    phonenumber: number;
    email: string;
    firstname: string;
    lastname: string;
    age: number;
    trainerpreference: string;
    physiotherapist: string;
    packages: string;
    id: number;

    constructor(id, firstname, lastname, packages, physiotherapist, trainerpreference, age, email, phonenumber,
        pincode, country, state, city, streetaddress, date, inr) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.packages = packages;
        this.phonenumber = phonenumber;
        this.physiotherapist = physiotherapist;
        this.trainerpreference = trainerpreference;
        this.age = age;
        this.email = email;
        this.pincode = pincode;
        this.country = country;
        this.state = state;
        this.city = city;
        this.streetaddress = streetaddress;
        this.date = date;
        this.inr = inr;
    }
}