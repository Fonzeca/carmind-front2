import ApiClient from './api.client'

export class VehiculosApi extends ApiClient {
  private static INSTANCE: VehiculosApi

  private static BASE_URL = 'http://localhost:3001'

  private constructor() {
    super(VehiculosApi.BASE_URL)
  }

  static GET(): VehiculosApi {
    if (!VehiculosApi.INSTANCE) {
      VehiculosApi.INSTANCE = new VehiculosApi()
    }
    return VehiculosApi.INSTANCE
  }

  getVehiculos() {
    return this.client.get<VehiculoApiType[]>('/vehiculo')
  }

  // getVehiculoById(id: string) {
  //   return this.client.get(`/vehiculos/${id}`)
  // }

  createVehiculo(data: VehiculoApiType) {
    return this.client.post('/vehiculo', data)
  }

  // updateVehiculo(id: string, data: VehiculoApiType) {
  //   return this.client.put(`/vehiculos/${id}`, data)
  // }

  deleteVehiculo(id: string) {
    return this.client.delete(`/vehiculo?id=${id}`)
  }
}


export enum VehiculoTipo {
	"Auto" = "Auto",
	"Camioneta" = "Camioneta",
	"Camion" = "Camion",
	"Montacargas" = "Montacargas",
	"Otro" = "Otro",
}

export interface VehiculoApiType {
  _id?: string;
  nombre: string;
  patente: string;
  marca?: string;
  modelo?: string;
  anio?: number;
  tipo: string;
  activo?: boolean;
}