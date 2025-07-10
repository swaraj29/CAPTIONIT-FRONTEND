import React, { useEffect, useState } from 'react';
import { getAllVideos } from '../../api/videoApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VideoTable = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('All');

  const fetchVideos = async (showToast = false) => {
    try {
      const response = await getAllVideos();
      setVideos(response.data);
      if (showToast) toast.success('Video list refreshed!');
    } catch (error) {
      console.error('Failed to fetch videos:', error);
      toast.error('Failed to fetch videos!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();

    const interval = setInterval(() => {
      fetchVideos(true); // Show toast every 10s auto-refresh
      console.log('Auto-refreshing video list');
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  const filteredVideos =
    filterStatus === 'All'
      ? videos
      : videos.filter(
          (video) => video.status.toLowerCase() === filterStatus.toLowerCase()
        );

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white';
      case 'processing':
        return 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white';
      case 'pending':
        return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white';
      case 'failed':
        return 'bg-gradient-to-r from-red-500 to-pink-600 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return '✅';
      case 'processing':
        return '⏳';
      case 'pending':
        return '⏸️';
      case 'failed':
        return '❌';
      default:
        return '❓';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-700">Loading your videos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 md:p-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Your Captioned Videos
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Manage and view all your AI-captioned videos
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Filter Dropdown */}
              <select
                className="bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg text-sm font-medium text-gray-700 border border-gray-200 focus:outline-none"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Completed">Completed</option>
                <option value="Processing">Processing</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>

              {/* Refresh Indicator */}
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Auto-refresh every 10s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video List */}
        <div className="space-y-4 md:hidden">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white/20">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-800 text-sm pr-2 line-clamp-2">{video.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(video.status)}`}>
                  {getStatusIcon(video.status)} {video.status}
                </span>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Created:</span>
                  <span>{video.createdAt}</span>
                </div>
                {video.completedAt && (
                  <div className="flex justify-between">
                    <span className="font-medium">Completed:</span>
                    <span>{video.completedAt}</span>
                  </div>
                )}
              </div>
              {video.status === 'Completed' && (
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <a
                    href={video.captionedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <span>🎬</span>
                    <span>View Video</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Video Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Created</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Completed</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredVideos.map((video, index) => (
                    <tr
                      key={video.id}
                      className={`hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200 ${
                        index % 2 === 0 ? 'bg-white/50' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 truncate max-w-xs">{video.title}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(video.status)}`}>
                          <span>{getStatusIcon(video.status)}</span>
                          <span>{video.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{video.createdAt}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {video.completedAt || <span className="italic text-gray-400">Pending</span>}
                      </td>
                      <td className="px-6 py-4">
                        {video.status === 'Completed' ? (
                          <a
                            href={video.captionedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <span>🎬</span>
                            <span>View Video</span>
                          </a>
                        ) : (
                          <span className="text-gray-400 italic text-sm">Not available</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎬</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No videos yet</h3>
            <p className="text-gray-600 mb-6">Try uploading your first video!</p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
              Create New Caption
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoTable;
