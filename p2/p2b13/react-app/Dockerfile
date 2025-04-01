# Bước 1: Build ứng dụng React với Vite
FROM node:16 as build

WORKDIR /app
COPY . /app

# Xóa thư mục node_modules nếu có (trong trường hợp có node_modules từ môi trường Windows)
RUN rm -rf node_modules

# Cài đặt lại phụ thuộc
RUN npm install

# Xây dựng ứng dụng
RUN npm run build

# Bước 2: Sử dụng Nginx để serve ứng dụng
FROM nginx:alpine

# Copy các tệp build vào thư mục của Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy cấu hình Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
