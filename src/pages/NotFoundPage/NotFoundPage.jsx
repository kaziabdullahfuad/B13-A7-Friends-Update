import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-300 to-base-100 px-6">
      <div className="max-w-xl w-full text-center bg-base-100/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-base-300 animate-fadeIn">
        <div className="flex justify-center mb-6">
          <div className="bg-error/20 p-4 rounded-full text-3xl">
            ⚠️
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-base-content">404</h1>
        <h2 className="text-xl font-semibold mb-2 text-base-content">Oops! Page not found</h2>
        <p className="text-base-content/70 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </button>

          <button
            className="btn btn-outline"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Simple CSS animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
        </div>
    );
};

export default NotFoundPage;