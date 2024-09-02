import { VehiculosApi, VehiculoTipo, type VehiculoApiType } from '@/services/carmind-back2.api';
import { defineStore } from 'pinia';

export type Vehiculo = {
  id: string;
  name: string;
  patente: string;
}

// Definir el estado de la tienda
type VehiculosState = {
  username?: string;
}

export const vehiculosStore = defineStore({
  id: 'vehiculo',
  state: (): VehiculosState => ({
    username: undefined,
  }),
  actions: {
    async getAllVehiculos() {
      // Implementar la lógica para obtener los vehículos
      const response = await VehiculosApi.GET().getVehiculos();
      if(response.status === 200) {
        //map to vehiculo
        return response.data.map<Vehiculo>((vehiculo: VehiculoApiType) => {
          return {
            id: vehiculo._id,
            name: vehiculo.nombre,
            patente: vehiculo.patente
          } as Vehiculo;
        });

      } else {
        throw new Error('Error al obtener vehículos');
      }
    },
    async getVehiculo(id: string) {
      // Implementar la lógica para obtener un vehículo por ID
      throw new Error('Not implemented')
    },
    async createVehiculo(vehiculo: Vehiculo) {
      if (vehiculo.id) {
        throw new Error('No se puede crear un vehículo con un ID ya existente')
      }

      const data: VehiculoApiType = {
        nombre: vehiculo.name,
        patente: vehiculo.patente,
        tipo: VehiculoTipo.Auto
      };
      
      try {
        return await VehiculosApi.GET().createVehiculo(data);
      } catch (error: any) {
        console.error(error);
        throw new Error('Error al crear vehículo');
      } 
    },
    async updateVehiculo(vehiculo: Vehiculo) {
      // Implementar la lógica para actualizar un vehículo
      return vehiculo
    },
    async deleteVehiculo(id: string) {
      const response = await VehiculosApi.GET().deleteVehiculo(id);
      if(response.status === 200) {
        return response.data;
      } else {
        throw new Error('Error al borrar vehículo');
      }
    }

  },
});