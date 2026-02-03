SamjhoDawai (समझो दवाई) 💊
Bridging the "Prescription Gap" for the Elderly.
SamjhoDawai is a healthcare accessibility platform designed to convert illegible handwritten doctor's notes into clear, actionable digital schedules. Targeted at elderly citizens (50+) and rural populations, the platform focuses on safety and comprehension, turning medical jargon into a time-based daily schedule in regional languages.

🚀 The Problem
Handwritten prescriptions and complex medical terminology are major barriers to healthcare accessibility. For the elderly, "scribbled" notes often lead to confusion, missed doses, or incorrect medication—creating a significant safety risk.

✨ Our Solution
A fully functional prototype where users upload a photo of a prescription and receive:
Handwriting OCR: AI-driven extraction of medicine names and dosages.
Safety Check: A logic layer that flags potential dosage issues based on patient age and weight.
Regional Simplification: Translation and simplification of instructions into Hindi and English.
Actionable Schedule: A clear Morning/Afternoon/Evening/Night breakdown.

🛠️ Tech Stack
Frontend
React.js: For a responsive, accessible user interface.
Tailwind CSS: Modern, high-contrast styling for elderly users.
Lucide Icons: Intuitive visual cues for schedule times and safety alerts.
Backend
Node.js & Express: Handling image uploads and API coordination.
Multer: Managing multipart image data for processing.
AI Engine
Google Gemini 1.5 Flash: A state-of-the-art multimodal model used for simultaneous OCR (Handwriting Recognition), Medical Interpretation, and Regional Translation.

🧩 Key Features (Functional Prototype)
Vision-AI Integration: Real-time processing of user-uploaded prescription images.
Biometric Logic: Input fields for Age and Weight that feed into the AI's safety assessment.
Schedule Generator: Automatically parses "1-0-1" or "twice a day" into a daily calendar view.
Language Switcher: Instant toggle between English and Hindi for rural accessibility.


This is a much more professional, structured, and "winning" version of your README. It highlights the functional nature of your prototype (which is better than just a mock!) and makes it easy for judges to understand your hard work.
Copy and paste the block below to replace your entire README.md file:
SamjhoDawai (समझो दवाई) 💊
Bridging the "Prescription Gap" for the Elderly.
SamjhoDawai is a healthcare accessibility platform designed to convert illegible handwritten doctor's notes into clear, actionable digital schedules. Targeted at elderly citizens (50+) and rural populations, the platform focuses on safety and comprehension, turning medical jargon into a time-based daily schedule in regional languages.
🚀 The Problem
Handwritten prescriptions and complex medical terminology are major barriers to healthcare accessibility. For the elderly, "scribbled" notes often lead to confusion, missed doses, or incorrect medication—creating a significant safety risk.
✨ Our Solution
A fully functional prototype where users upload a photo of a prescription and receive:
Handwriting OCR: AI-driven extraction of medicine names and dosages.
Safety Check: A logic layer that flags potential dosage issues based on patient age and weight.
Regional Simplification: Translation and simplification of instructions into Hindi and English.
Actionable Schedule: A clear Morning/Afternoon/Evening/Night breakdown.
🛠️ Tech Stack
Frontend
React.js: For a responsive, accessible user interface.
Tailwind CSS: Modern, high-contrast styling for elderly users.
Lucide Icons: Intuitive visual cues for schedule times and safety alerts.
Backend
Node.js & Express: Handling image uploads and API coordination.
Multer: Managing multipart image data for processing.
AI Engine
Google Gemini 1.5 Flash: A state-of-the-art multimodal model used for simultaneous OCR (Handwriting Recognition), Medical Interpretation, and Regional Translation.
🧩 Key Features (Functional Prototype)
Vision-AI Integration: Real-time processing of user-uploaded prescription images.
Biometric Logic: Input fields for Age and Weight that feed into the AI's safety assessment.
Schedule Generator: Automatically parses "1-0-1" or "twice a day" into a daily calendar view.
Language Switcher: Instant toggle between English and Hindi for rural accessibility.
📁 Project Structure
code
Text
├── backend/
│   ├── index.js       # Express server & Gemini AI logic
│   ├── uploads/       # Temporary storage for image processing
│   └── package.json   # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx    # Main UI & API connection
│   │   └── index.css  # Tailwind styles
│   └── package.json   # Frontend dependencies
└── README.md          # Project documentation
Built for CodeZen 2.0. This prototype moves beyond a static mock to a functional end-to-end workflow, demonstrating how modern Vision-LLMs can be applied to solve real-world healthcare accessibility challenges in the Indian context.
