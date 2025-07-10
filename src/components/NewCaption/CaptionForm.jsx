import React, { useState } from 'react';
import { createVideo } from '../../api/videoApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CaptionForm = ({ addNewVideo }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [fontType, setFontType] = useState('Arial');
  const [fontSize, setFontSize] = useState(24);
  const [fontColor, setFontColor] = useState('#ffffff');
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [padding, setPadding] = useState(10);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setVideoFile(files[0]);
      toast.success(`File "${files[0].name}" selected`);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoFile && !videoUrl) {
      toast.warn('Please upload a video file or provide a video URL');
      return;
    }

    setLoading(true);

    const newVideo = {
      title: title || videoFile?.name || 'New Captioned Video',
      status: 'Processing',
      createdAt: new Date().toISOString().split('T')[0],
      completedAt: null,
      captionedUrl: null,
      fontType,
      fontSize,
      fontColor,
      strokeColor,
      strokeWidth,
      padding,
    };

    try {
      const response = await createVideo(newVideo);
      addNewVideo(response.data);

      window.scrollTo({ top: 0, behavior: 'smooth' });

      toast.success('Caption request submitted successfully ✅');

      // Reset form
      setVideoFile(null);
      setVideoUrl('');
      setTitle('');
      setFontType('Arial');
      setFontSize(24);
      setFontColor('#ffffff');
      setStrokeColor('#000000');
      setStrokeWidth(2);
      setPadding(10);
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error('Failed to submit caption request ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 md:p-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Create New Caption
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your video and customize your captions with our AI-powered tool
          </p>
        </div>

        <div className="space-y-8">
          {/* Video Upload Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-3">📹</span>
              Video Upload
            </h3>

            {/* Title Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Video Title
              </label>
              <input
                type="text"
                placeholder="Enter a title for your video..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Drag & Drop Area */}
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 sm:p-12 text-center transition-all duration-300 ${
                dragActive
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-300 hover:border-purple-400 hover:bg-purple-25'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {videoFile ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-white">✓</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{videoFile.name}</p>
                    <p className="text-sm text-gray-600">
                      {(videoFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setVideoFile(null)}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Remove file
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-white">📁</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Drag & drop your video here
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      or click to browse files
                    </p>
                    <label className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer">
                      <span className="mr-2">🎬</span>
                      Choose Video File
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleFileInput}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    Supported formats: MP4, AVI, MOV, MKV (Max 100MB)
                  </p>
                </div>
              )}
            </div>

            {/* URL Input */}
            <div className="mt-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm font-medium">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              
              <div className="relative">
                <input
                  type="url"
                  placeholder="Paste your public video URL here..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🌐
                </div>
              </div>
            </div>
          </div>

          {/* Caption Styling Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-3">🎨</span>
              Caption Styling
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Font Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Font Family
                </label>
                <select
                  value={fontType}
                  onChange={(e) => setFontType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="Arial">Arial</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Helvetica">Helvetica</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier New">Courier New</option>
                  <option value="Impact">Impact</option>
                  <option value="Comic Sans MS">Comic Sans MS</option>
                </select>
              </div>

              {/* Font Size */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Font Size (px)</label>
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  min={12}
                  max={72}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Font Color */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Font Color</label>
                <div className="flex items-center space-x-3">
                  <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="w-16 h-12 border border-gray-300 rounded-lg" />
                  <input type="text" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="flex-1 px-4 py-3 border border-gray-300 rounded-xl" />
                </div>
              </div>

              {/* Stroke Color */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Stroke Color</label>
                <div className="flex items-center space-x-3">
                  <input type="color" value={strokeColor} onChange={(e) => setStrokeColor(e.target.value)} className="w-16 h-12 border border-gray-300 rounded-lg" />
                  <input type="text" value={strokeColor} onChange={(e) => setStrokeColor(e.target.value)} className="flex-1 px-4 py-3 border border-gray-300 rounded-xl" />
                </div>
              </div>

              {/* Stroke Width */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Stroke Width</label>
                <input type="number" value={strokeWidth} onChange={(e) => setStrokeWidth(Number(e.target.value))} min={0} max={10} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
              </div>

              {/* Padding */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Padding</label>
                <input type="number" value={padding} onChange={(e) => setPadding(Number(e.target.value))} min={0} max={50} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
              </div>
            </div>

            {/* Preview */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">Caption Preview</h4>
              <div className="bg-black rounded-lg p-8 flex items-center justify-center min-h-[120px]">
              <div
  style={{
    fontFamily: fontType,
    fontSize: `${fontSize}px`,
    color: fontColor,
    WebkitTextStroke: `${strokeWidth}px ${strokeColor}`, // Use -webkit-text-stroke
    textStroke: `${strokeWidth}px ${strokeColor}`, // Future-proof with standard property
    padding: `${padding}px`,
    textAlign: 'center',
  }}
  className="font-semibold"
>
  Sample Caption Text
</div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 transform ${
                loading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:from-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-2xl'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Processing...
                </>
              ) : (
                <>
                  <span className="text-xl mr-3">🚀</span>
                  Create Caption
                </>
              )}
            </button>

            {!loading && (
              <p className="text-sm text-gray-600 mt-4">
                Processing typically takes 2-5 minutes depending on video length
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptionForm;