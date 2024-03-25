import React from "react";

function AvatarCard({img, name, handle, gradient}) {
  return (
    <div>
      <div className=" w-full md:w-52 rounded-lg overflow-hidden border border-slate-500/10 pb-6 hover:shadow-xl duration-500  ease-in-out hover:shadow-white/5">
        <div className={` h-124 ${gradient}`}>
          <div className=" self-start flex justify-center p-3">
            <img
              className=" rounded-full bg-center object-cover w-24 h-24 overflow-hidden "
              src={img}
              alt=""
            />
          </div>
          <div className="text-center text-sm mb-6 mb:mb-2">
            <h3 className=" text-sm">{name}</h3>
            <p className=" text-slate-400">{handle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
