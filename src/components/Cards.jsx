import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-95 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-256.png"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl first-letter:font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full border shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-95 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-3/16/hdd-512.png"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl first-letter:font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">
            Start Trial
          </button>
        </div>
        <div className="w-full border shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-95 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src="https://cdn1.iconfinder.com/data/icons/document-edit-line/64/Document-doc-file-pc-gadget-device-computer-256.png"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl first-letter:font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
