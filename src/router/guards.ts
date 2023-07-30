import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const mustBeLogin = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    next();

}
