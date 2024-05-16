const express = require("express");
const app = express();
const port = 5000;

// CORS 설정
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Body-Parser 설정
app.use(express.json());

app.post("/like", (req, res) => {
  if (req.body.isLike) {
    res.send({ isLike: false });
  } else {
    res.send({ isLike: true });
  }
});

app.listen(port, () => {
  console.log(`서버 실행. http://localhost:${port}`);
});
