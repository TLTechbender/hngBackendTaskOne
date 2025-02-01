import express from "express";
import cors from "cors";

const app = express();


app.use(cors());


app.get("/", (req, res) => {
  const response = {
    email: "myjoyhasarrived2004@gmail.com",
    current_datetime: new Date().toISOString(), 
    github_url: "https://github.com/TLTechbender/hngbackendTaskOne", 
  };

  res.status(200).json(response);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});