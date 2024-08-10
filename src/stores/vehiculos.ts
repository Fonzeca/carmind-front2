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
      return [
        { id: "1", name: 'Vehículo 1', patente: 'ABC123' },
        { id: "2", name: 'Vehículo 2', patente: 'DEF456' },
      ]
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
      // Implementar la lógica para eliminar un vehículo
      return id
    }

  },
});