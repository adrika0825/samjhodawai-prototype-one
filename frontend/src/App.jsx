import React, { useState } from 'react';
import axios from 'axios';
import { Upload, AlertCircle, Calendar, Pill } from 'lucide-react';

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({ age: '', weight: '', language: 'English' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please upload a prescription image.");
    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('age', data.age);
    formData.append('weight', data.weight);
    formData.append('language', data.language);

    try {
      const res = await axios.post('http://localhost:5000/api/process-prescription', formData);
      setResult(res.data);
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || "Check your backend and API key"));
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-blue-600 p-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">SamjhoDawai 💊</h1>
          <p className="opacity-90">Turning messy prescriptions into clear schedules</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
              <input type="number" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 65" onChange={e => setData({...data, age: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Weight (kg)</label>
              <input type="number" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 70" onChange={e => setData({...data, weight: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Translate To</label>
            <select className="w-full border rounded-xl p-3 bg-white outline-none" onChange={e => setData({...data, language: e.target.value})}>
              <option value="English">English</option>
              <option value="Hindi">Hindi (हिंदी)</option>
            </select>
          </div>

          <div className="border-2 border-dashed border-blue-200 rounded-2xl p-10 text-center hover:bg-blue-50 transition-colors">
            <input type="file" id="file" hidden onChange={e => setFile(e.target.files[0])} accept="image/*" />
            <label htmlFor="file" className="cursor-pointer">
              <Upload className="mx-auto text-blue-500 mb-4" size={48} />
              <p className="text-slate-600 font-medium">{file ? file.name : "Click to select prescription photo"}</p>
            </label>
          </div>

          <button onClick={handleUpload} disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 disabled:bg-slate-300 transition-all shadow-lg">
            {loading ? "AI is reading scribbles..." : "Generate Schedule"}
          </button>

          {result && (
            <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
                <h3 className="flex items-center font-bold text-amber-800 mb-2"><AlertCircle size={20} className="mr-2"/> Safety Warning</h3>
                <p className="text-amber-700">{result.safetyAlerts}</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200">
                <h3 className="flex items-center font-bold text-blue-800 mb-3"><Calendar size={20} className="mr-2"/> Your Daily Schedule</h3>
                <div className="space-y-3">
                  {result.schedule.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 font-bold text-sm min-w-[80px] text-center">{item.time}</div>
                      <div className="text-slate-700 font-medium">{item.medicine}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-2xl border border-green-200">
                <h3 className="flex items-center font-bold text-green-800 mb-2"><Pill size={20} className="mr-2"/> Explanation ({data.language})</h3>
                <p className="text-green-800 text-lg leading-relaxed">{result.simpleExplanation}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;