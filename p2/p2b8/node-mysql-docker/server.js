const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Kết nối đến MySQL
const db = mysql.createConnection({
  host: "mysql", // Tên dịch vụ MySQL trong Docker Compose
  user: "user",
  password: "password",
  database: "mydb",
});

db.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối MySQL:", err);
  } else {
    console.log("Đã kết nối MySQL thành công!");
  }
});

// Route kiểm tra kết nối
app.get("/", (req, res) => {
  db.query("SELECT NOW() AS time", (err, result) => {
    if (err) {
      res.send("Lỗi truy vấn MySQL");
    } else {
      res.send(`MySQL thời gian hiện tại: ${result[0].time}`);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
