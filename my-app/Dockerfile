# Используем Node.js как базовый образ
FROM node:18-alpine

# Создаем директорию для приложения
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходный код приложения
COPY . .

# Строим фронтенд-приложение
RUN npm run build

# Экспонируем порт для фронтенд-сервера
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]

