import React, { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen p-4 font-sans">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 bg-gray-700 rounded-full mr-4"></div>
        <div>
          <h2 className="text-xl font-bold">gulomqod1rovvv</h2>
          <div className="flex gap-4 text-sm mt-2">
            <span><b>8</b> posts</span>
            <span><b>91</b> followers</span>
            <span><b>18</b> following</span>
          </div>
          <p className="mt-2 text-sm leading-5">
            🚗 BMW & 🌍 Ronaldo fan <br />
            📱 Daily videos & reels <br />
            🌐 Uzbekistan
          </p>
          <div className="flex gap-2 mt-3">
            <button className="bg-gray-800 px-3 py-1 rounded">Редактировать профиль</button>
            <button className="bg-gray-800 px-3 py-1 rounded">Посмотреть архив</button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="w-10 h-10 rounded-full bg-gray-700 text-lg"
        >
          +
        </button>
        <span className="text-sm">Добавить</span>
      </div>

      <div className="flex justify-around border-t border-gray-700">
        <button
          onClick={() => setActiveTab("posts")}
          className={`flex-1 py-2 ${activeTab === "posts" ? "border-t-2 border-white" : ""}`}
        >
          Публикации
        </button>
        <button
          onClick={() => setActiveTab("reels")}
          className={`flex-1 py-2 ${activeTab === "reels" ? "border-t-2 border-white" : ""}`}
        >
          Reels
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-80 text-center">
            <input type="text" placeholder="Название Актуального" className="text-lg font-bold mb-4 text-center" />
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-gray-700 px-4 py-2 rounded"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;