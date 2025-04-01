# Sử dụng Node.js phiên bản mới nhất
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn
COPY . .

# Chạy ứng dụng trên cổng 3000
EXPOSE 3000

# Lệnh khởi động server
CMD ["node", "server.js"]
