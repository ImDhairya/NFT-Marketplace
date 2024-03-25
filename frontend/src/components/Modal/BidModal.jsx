import React from "react";
import Modal from "./Modal";
function BidModal({
  isOpen,
  onClose,
  onBidSubmit,
  fullName,
  setFullName,
  email,
  setEamil,
  bidAmount,
  setBidAmount,
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onBidSubmit()
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className=" p-5 ">
        <h1 className=" capitalize text-2xl font-bold mb-4  text-gray-500">
          Place your bit
        </h1>
        <form onSubmit={handleSubmit} action="">
          <input
            className="border p-2 mb-4 w-full text-gray-500 "
            required
            type="text"
            placeholder=" Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="border  p-2 mb-4 w-full text-gray-500 "
            required
            type="email"
            placeholder=" Your Email"
            value={email}
            onChange={(e) => setEamil(e.target.value)}
          />

          <input
            className="border  p-2 mb-4 w-full text-gray-500"
            required
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />

          <button
            type="submit"
            className=" bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Submit Bid
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default BidModal;
