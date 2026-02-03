# SamjhoDawai (समझो दवाई) 💊 

### *Bridging the "Prescription Gap" with AI-Powered Accessibility*

---

## 🌟 Overview
**SamjhoDawai** is a healthcare accessibility platform designed to convert illegible handwritten doctor's notes into clear, actionable digital schedules. Targeted at elderly citizens (50+) and rural populations, the platform focuses on safety and comprehension, turning medical jargon into a time-based daily schedule in regional languages.

---

## 🚀 The Problem
Handwritten prescriptions and complex medical terminology are major barriers to healthcare accessibility. For the elderly, "scribbled" notes often lead to confusion, missed doses, or incorrect medication—creating a significant safety risk and loss of independence.

---

## ✨ Our Solution
A fully functional prototype where users upload a photo of a prescription and receive:

*   **Handwriting OCR:** AI-driven extraction of medicine names and dosages from messy handwriting.
*   **Safety Check:** A logic layer that flags potential dosage issues based on patient age and weight.
*   **Regional Simplification:** Translation and simplification of instructions into **Hindi** and **English**.
*   **Actionable Schedule:** A clear Morning, Afternoon, Evening, and Night breakdown.

---

## 🛠️ Tech Stack

### **Frontend**
*   **React.js**: For a responsive, accessible user interface.
*   **Tailwind CSS**: Modern, high-contrast styling designed for elderly users.
*   **Lucide Icons**: Intuitive visual cues for schedule times and safety alerts.

### **Backend**
*   **Node.js & Express**: Handling image uploads and API coordination.
*   **Multer**: Managing multipart image data for processing.

### **AI Engine**
*   **Google Gemini 1.5 Flash**: A state-of-the-art multimodal model used for simultaneous OCR (Handwriting Recognition), Medical Interpretation, and Regional Translation.

---

## 🧩 Key Features (Functional Prototype)

*   **Vision-AI Integration:** Real-time processing of user-uploaded prescription images.
*   **Biometric Logic:** Input fields for Age and Weight that feed into the AI's safety assessment.
*   **Schedule Generator:** Automatically parses complex instructions (e.g., "1-0-1") into a clean daily calendar view.
*   **Language Switcher:** Instant toggle between English and Hindi for rural accessibility.

---

## 📁 Project Structure

```text
├── backend/
│   ├── index.js       # Express server & Gemini AI logic
│   ├── uploads/       # Temporary storage for image processing
│   └── package.json   # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx    # Main UI & API connection
│   │   └── index.css  # Tailwind & Global styles
│   └── package.json   # Frontend dependencies
└── README.md          # Project documentation
