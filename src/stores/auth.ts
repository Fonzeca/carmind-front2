import { UserHubApi } from '@/services/user-hub.api';
import { defineStore } from 'pinia';

// Definir el estado de la tienda
type Authentication = {
  username?: string;
}

export const authStore = defineStore({
  id: 'auth',
  state: (): Authentication => ({
    username: undefined,
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        return await UserHubApi.GET().login({ username, password })
      } catch (error) {
        console.error(error);
        throw new Error('Error al iniciar sesión');
      }
    },
    async logout() {
      try {
        return await UserHubApi.GET().logout();
      } catch (error) {
        console.error(error);
        throw new Error('Error al cerrar sesión');
      }
    },
    async forgotPassword(email: string) {
      try {
        return await UserHubApi.GET().sendRecoverPassword(email);
      } catch (error) {
        console.error(error);
        throw new Error('Error al recuperar contraseña');
      }
    },
    async validateResetPasswordCode(code: string, email: string) {
      try {
        return await UserHubApi.GET().validateResetPasswordCode(code, email);
      } catch (error) {
        console.error(error);
        throw new Error('Error al validar código');
      }
    },
    async resetPassword(code: string, email: string, newPassword: string) {
      try {
        return await UserHubApi.GET().resetPassword(code, email, newPassword);
      } catch (error) {
        console.error(error);
        throw new Error('Error al cambiar contraseña');
      }
    },
  },
});