import {LocationGeocodedAddress} from 'expo-location'

//Category
export interface Category {
  title:string,
  icon:string
}

//FoodModel
export interface FoodModel {
  _id: string,
  name: string,
  description: string,
  category:string,
  price:number,
  readyTime:number,
  image: [string]
}

//restoraunt model

export interface Restaurant {
  _id: string,
  name: string,
  foodType: string,
  address:string,
  phone:number,
  image: string,
  foods:[FoodModel]
}

//food Avalable
export interface FoodAvailability {
  categories: [Category],
  restaurant: [Restaurant],
  foodmodel: [FoodModel]
}

//UserModel modify
export interface UserModel {
  firstName: string,
  lastName: string,
  contactNumber:string,
  token: string
}

export interface UserState {
  user: UserModel,
  location: LocationGeocodedAddress,
  error: string | undefined
}