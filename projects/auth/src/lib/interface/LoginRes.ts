export interface LoginRes {
 message: string;
 user: User;
 token: string;
}

interface User {
 _id: string;
 firstName: string;
 lastName: string;
 email: string;
 gender: string;
 phone: string;
 photo: string;
 role: string;
 wishlist: any[];
 addresses: any[];
 createdAt: string;
}

export interface loginResAdaptor {
 message: string;
 myToken: string;
 email: string
}