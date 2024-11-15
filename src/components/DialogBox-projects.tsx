
import {  Project } from "@/constants/types";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from "aos";
import { useEffect, useState } from "react";



const imgLoader = (src: string) => {
  return src
}

export default function DialogBox({
  name,
  description,
  coverImage,
  abstract,
  gallery,
  setOpen,
  isOpen
}: Project & { setOpen: (isOpen: Project | null) => void; isOpen: boolean }) {
  useEffect(() => {
    AOS.init({
      duration: 150,
      once: false,
    });
  }, []);
  return (
    <div className="dialog-box text-white bg-black/50 backdrop-blur-2xl overflow-y-scroll w-full h-full grid place-items-center no-scrollbar">
      <div className=" no-scrollbar grid gap-2 w-full h-full lg:w-5/6 py-2 px-4 border-y-0 rounded-3xl shadow-red shadow-2xl overflow-y-scroll">
        <div className="grid place-items-end">
          <button className="close-button bg-red p-2 rounded-lg"
            onClick={() => {
              setOpen(null);
            }}
          >
            Close
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-2xl p-2 font-bold underline">{name}</h2>
        </div>
        <div className="grid place-items-center gap-2 lg:flex">
          <div className="grid place-items-center h-96">
            <Image
              src={coverImage}
              alt={name}
              width={500}
              height={400}
              className="rounded-xl h-96 hover:scale-105 duration-500"
            />
          </div>
          <div className="bg-red rounded-lg p-4 w-fit h-96 overflow-y-auto grid place-items-center">
            <p className="text-justify">{abstract}</p>
          </div>
        </div>
        <div>
          <p className="p-2 text-justify">{description}</p>
        </div>
        
          <div className="grid grid-cols-3 gap-1">
            {gallery.map((image, i) => {
              return (
                <Image
                  key={i}
                  src={image}
                  style={{ width: "100%", display: "block" }}
                  alt=""
                  className="rounded-lg"
                  width={600}
                  height={600}
                  loader={() => imgLoader(image)}
                />
              )
            })}
          </div>
         
          
        <div className="py-4 grid place-items-center">
          <button className="close-button bg-red p-2 rounded-lg w-1/4"
            onClick={() => {
              setOpen(null);
            }}

          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
