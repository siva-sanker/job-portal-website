import React, { useState } from "react";
import { X, Upload } from "lucide-react";

const ResumeModal = ({ isOpen, onClose, onSubmit }) => {
  const [resume, setResume] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!resume) return alert("Please upload your resume");
    onSubmit(resume);
    onClose();
    setResume(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-lg font-semibold mb-4">Upload Resume</h2>

        <label className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center cursor-pointer hover:border-blue-500 transition">
          <Upload className="w-8 h-8 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">
            {resume ? resume.name : "Click to upload resume"}
          </span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </label>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 font-medium"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ResumeModal;
