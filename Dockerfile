FROM node:lts-alpine AS base

FROM base as deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

FROM base as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=builder /app/dist /usr/share/nginx/html
# COPY --from=builder /app/.env ./.env


# De otra manera se borra estos cmds y se escucha en el puerto 80
# RUN #sed -i 's/listen\s*80;/listen 3000;/' /etc/nginx/conf.d/default.conf
# Más preciso si el de arriba es muy general
RUN sed -i 's/\(listen\s\+\)80;/\13000;/' /etc/nginx/conf.d/default.conf
RUN sed -i 's/\(listen\s\+\)\(\[::\]\):\?80;/\1\2:3000;/' /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
