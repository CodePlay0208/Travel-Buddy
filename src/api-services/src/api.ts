import { GetTrips } from "./api-invokes/get-trips"

export class Api {
  static async getTrips(payload): Promise<any> {
    return new GetTrips().invoke(payload)
  }
}