import React from "react";
function Content() {
  return (
    <>
      <div className="flex items-center justify-between bg-gray-100 py-2 px-4">
        <div className="flex items-center ">
          <div className="mr-4">Filtre</div>
          <div className="relative">
            <button
              type="button"
              className="flex items-center focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 16a1 1 0 0 1-.71-.29l-5-5a1 1 0 0 1 1.42-1.42L10 13.59l4.29-4.3a1 1 0 0 1 1.42 1.42l-5 5A1 1 0 0 1 10 16z"
                />
              </svg>
            </button>
            <div className="absolute bg-white rounded-md shadow-md mt-2 py-2 w-48">
              <div className="ml-3 font-medium mb-2">Başlık 1</div>
              <label className="flex items-center ml-3 mb-2">
                <input type="checkbox" className="form-checkbox mr-2" checked />
                <span>Option 1</span>
              </label>
              <label className="flex items-center ml-3 mb-2">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span>Option 1</span>
              </label>
              <label className="flex items-center ml-3 mb-2">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span>Option 1</span>
              </label>
              <div className="ml-3 font-medium mb-2">Başlık 2</div>
              <label className="flex items-center ml-3">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span>Option 2</span>
              </label>
              <label className="flex items-center ml-3">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span>Option 2</span>
              </label>
              <label className="flex items-center ml-3">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span>Option 2</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 fill-current text-gray-800"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M14 2h2a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h2V1a1 1 0 012 0v1h6V1a1 1 0 012 0v1zm-1 3H7a1 1 0 010-2h6a1 1 0 010 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-800">Takvimi Göster</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-full max-w-4xl p-6 rounded-lg shadow-lg bg-white">
            <div className="mr-6 flex-shrink-0">
              <img
                src="https://picsum.photos/500"
                alt="resim"
                className="w-64 h-64 object-cover rounded-lg"
              />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-2">Başlık</h2>
              <h3 className="text-lg font-medium mb-1">Alt Başlık</h3>
              <p className="text-sm text-gray-600 mb-4">Yer ve Tarih</p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                hendrerit facilisis vestibulum. Donec sollicitudin rhoncus
                turpis, in malesuada mauris pellentesque eu. Nunc pretium, dolor
                id facilisis cursus, mauris odio porttitor libero, ac semper
                velit nibh auctor magna.
              </p>
              <div className="flex justify-end">
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-4">
                  Takvime Ekle
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  Detayli Bilgi
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-full max-w-4xl p-6 rounded-lg shadow-lg bg-white">
            <div className="mr-6 flex-shrink-0">
              <img
                src="https://picsum.photos/500"
                alt="resim"
                className="w-64 h-64 object-cover rounded-lg"
              />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-2">Başlık</h2>
              <h3 className="text-lg font-medium mb-1">Alt Başlık</h3>
              <p className="text-sm text-gray-600 mb-4">Yer ve Tarih</p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                hendrerit facilisis vestibulum. Donec sollicitudin rhoncus
                turpis, in malesuada mauris pellentesque eu. Nunc pretium, dolor
                id facilisis cursus, mauris odio porttitor libero, ac semper
                velit nibh auctor magna.
              </p>
              <div className="flex justify-end">
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                  Takvime Ekle
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  Detayli Bilgi
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-full max-w-4xl p-6 rounded-lg shadow-lg bg-white">
            <div className="mr-6 flex-shrink-0">
              <img
                src="https://picsum.photos/500"
                alt="resim"
                className="w-64 h-64 object-cover rounded-lg"
              />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-2">Başlık</h2>
              <h3 className="text-lg font-medium mb-1">Alt Başlık</h3>
              <p className="text-sm text-gray-600 mb-4">Yer ve Tarih</p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                hendrerit facilisis vestibulum. Donec sollicitudin rhoncus
                turpis, in malesuada mauris pellentesque eu. Nunc pretium, dolor
                id facilisis cursus, mauris odio porttitor libero, ac semper
                velit nibh auctor magna.
              </p>
              <div className="flex justify-end">
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                  Takvime Ekle
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  Detayli Bilgi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
