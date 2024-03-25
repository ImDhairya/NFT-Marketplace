import React, {Suspense, useState} from "react";
import {AiFillClockCircle, AiFillHeart} from "react-icons/ai";
import {FaEthereum} from "react-icons/fa";
import BidModal from "../../components/Modal/BidModal";
function Card({item}) {
  const {img, title, price, likes, sale} = item;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState(price);
  const [fullName, setFullName] = useState("");
  const [email, setEamil] = useState(" ");

  const handleSubmit = () => {
    console.log("Btn Clicked!!!");
    const data = {
      fullName: fullName,
      email: email,
      amount: bidAmount,
    };
    try {
      fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network wna ");
          }
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          window.location.href = data.invoice.result.url
        });
    } catch (error) {
      console.log(error);
      throw error;
    }
    toggleModal();
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className=" flex group items-center flex-col space-y-10 rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white relative">
        <div className=" flex flex-col items-start relative">
          <img
            src={img}
            alt=""
            className=" object-cover"
          />
          {sale && (
            <div className=" felx space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-red-400 via-fuchsia-500 to-indigo-500 rounded-xl absolute bottom-5 left-5">
              <AiFillClockCircle />
              <p>43 : 34 : 34 : 53</p>
            </div>
          )}
        </div>
        {/* content */}
        <div className=" px-6 flex flex-col space-y-3">
          <h3>{title}</h3>
          <div className="">
            {/* price */}
            <div className=" flex justify-between">
              <div className=" flex space-x-2 text-indigo-600 items-center">
                <FaEthereum />
                <p className=" text-sm font-semibold">{price} ETH</p>
              </div>
              <div className=" flex space-x-2 text-indigo-600 items-center">
                <AiFillHeart
                  size={18}
                  className=" text-red-600"
                />
                <p className=" text-sm text-slate-400 font-semibold">
                  {likes} ETH
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hover */}
        <div className=" md:right-1/4 absolute hidden top-1/4 left-1/3 md:left-1/4 group-hover:flex animate-bounce transition-all ease-in-out duration-1000">
          <button
            onClick={toggleModal}
            className=" text-sm px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 duration-200 "
          >
            Place BIT
          </button>
        </div>
      </div>
      {/* Modal */}
      <BidModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onBidSubmit={handleSubmit}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEamil={setEamil}
        bidAmount={bidAmount}
        setBidAmount={setBidAmount}
      />
    </>
    // Images and counter
  );
}

export default Card;
