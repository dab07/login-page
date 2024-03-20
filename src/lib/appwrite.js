import {Client, Account} from "appwrite";
export const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65d4d06e10589962e0ed')

export const account = new Account(client);
export {ID} from 'appwrite';
