import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
})

export default async function handler(req, res) {
  const { userImage, characterImage } = req.body

  if (!userImage || !characterImage) {
    return res.status(400).json({ error: "Missing image(s)" })
  }
  console.log("🖼️ User image URL:", userImage)

  try {
    const prediction = await replicate.predictions.create({
      version: "d1d6ea8c8be89d664a07a457526f7128109dee7030fdac424788d762c71ed111",
      input: {
        swap_image: userImage,
        input_image: characterImage
      }
    })

    // Wait until the prediction is completed
    let finalPrediction = prediction
    while (!["succeeded", "failed", "canceled"].includes(finalPrediction.status)) {
      await new Promise(resolve => setTimeout(resolve, 1500))
      finalPrediction = await replicate.predictions.get(finalPrediction.id)
    }

    if (finalPrediction.status !== "succeeded") {
      return res.status(500).json({ error: "Face swap failed" })
    }

    const imageUrl = finalPrediction.output
    res.status(200).json({ deepfakedImage: imageUrl })
  } catch (err) {
    console.error("Replicate error:", err)
    res.status(500).json({ error: "Face swap failed" })
  }
}
