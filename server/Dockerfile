# Используем Node.js как базовый образ
FROM node:18-alpine

# Создаем директорию для приложения
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходный код приложения
COPY . .

# Экспонируем порт для API
EXPOSE 5000

# Запускаем сервер
CMD ["npm", "start"]
