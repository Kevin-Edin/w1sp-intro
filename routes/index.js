import express from "express"
import fs from "fs"
const router = express.Router()

router.get("/", (request, response) => {
  response.render("index.njk")
})

const {images} = JSON.parse(fs.readFileSync("./data/images.json"))

router.get("/images", (request, response) => {
  response.render("images.njk", {
    title: "Mina Bilder",
    images
  })
})

router.get("/images/:id", (request, response) => {
  console.log(request.params)
  const image = images.find(m => m.id === +request.params.id)
  if (image) {
      response.render("image.njk", {
          title: image.title,
          image
      })
  } else {
      response.status(404).json({error: "Image not found"})
  }
})

export default router