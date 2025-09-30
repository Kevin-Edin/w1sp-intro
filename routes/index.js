import express from "express"
import fs from "fs"
const router = express.Router()

router.get("/", (request, response) => {
  response.render("index.njk")
})

router.get("/my_images", (request, response) => {
  const {my_images} = JSON.parse(fs.readFileSync("./data/my_images.json"))
  response.json(my_images)
})

export default router