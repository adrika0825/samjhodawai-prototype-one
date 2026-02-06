const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Load environment variables
dotenv.config();

const app = express();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Ensure the uploads folder exists inside the current directory
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage setup
const upload = multer({ dest: uploadDir });

// Helper function to convert image file to Google's generative part format
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

// MAIN API ROUTE
app.post("/api/process-prescription", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image uploaded" });
        }

        const { age, weight, language } = req.body;
        console.log(`🚀 New Request - Age: ${age}, Weight: ${weight}, Lang: ${language}`);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `You are a medical assistant for SamjhoDawai. Read this handwritten prescription.
        Patient context: Age ${age}, Weight ${weight}kg.
        Target Language for the explanation: ${language}.
        
        Strict Tasks:
        1. Extract all medicine names and their specific dosages.
        2. Create a clean daily schedule (Morning, Afternoon, Evening, Night).
        3. SAFETY CHECK: Flag if any dosage seems unusual for an age of ${age} or weight of ${weight}kg.
        4. Simple explanation: Use very simple words in ${language} so a 70-year-old can understand it.
        
        IMPORTANT: Return ONLY a valid JSON object. No other text.
        Format:
        {
          "medicines": ["Pills Name - Dose"],
          "schedule": [{"time": "Morning", "medicine": "Pill A (After food)"}],
          "safetyAlerts": "Alert message regarding biometrics",
          "simpleExplanation": "Simple guide in ${language}"
        }`;

        // Prepare image
        const imagePart = fileToGenerativePart(req.file.path, req.file.mimetype);

        // Call Gemini
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        let text = response.text();

        // CLEAN JSON: Remove markdown formatting if AI adds it
        text = text.replace(/```json/g, "").replace(/```/g, "").trim();

        console.log("✅ AI Processed Image Successfully");

        // Clean up: delete the file locally after AI is done
        fs.unlinkSync(req.file.path); 

        // Send results back to frontend
        res.json(JSON.parse(text));

    } catch (error) {
        console.error("❌ ERROR PROCESSING IMAGE:", error);
        
        // Clean up file if there was an error
        if (req.file) fs.unlinkSync(req.file.path);

        res.status(500).json({ 
            error: "AI failed to read image. Please ensure the photo is clear and well-lit.",
            details: error.message 
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ SamjhoDawai Backend is running on port ${PORT}`);
    console.log(`📍 Test URL: http://localhost:${PORT}`);
});