import React from "react";
import Carousel from "react-material-ui-carousel";
const items = [
  {
    name: "Abhinav Sachdeva",
    role: "VP Architectures-APJ, Cisco",
    imgURL: "",
    descripiton:
    "The learning curve was great in this event. The guidance and mentoring were pretty good; it was way more helpful than I thought. The events were made so that all the aspects of entrepreneurship were covered. My experience was wholesome, and I appreciate the team."
  },
  {
    name: "Vivek Raval\n",
    role: "Founder, Alphonso Inc.",
    imgURL: "",
    descripiton:
    "The event changed my perspective on entrepreneurship in a good way. It made me believe that I had all that one should know to run a successful firm. It also gave me insights into how entrepreneurs should tackle their issues through various programmes, and I felt so good to be a part of E-Summit."
  },
  {
    name: "Sukriti Gill\n",
    role: "Founder, KAAJ Ventures",
    imgURL: "",
    descripiton:
    "The programmes in this event are unique and were very useful to me. The information and experience from many sessions were beneficial, and the event encouraged me to take bold initiatives in my career. Thanks to the team and E-Cell, IIT BHU."
  },
];
const CarouselItem = (props) => {
  return (
    <div>
      <p className="flex items-center text-center text-gray-500 lg:mx-8">
        {props.descripiton}
      </p>

      <div className="flex flex-col items-center justify-center mt-8">
        {/* <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""> */}
        {/* <Image
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  width={100}
                  height={100}
                /> */}

        <div className="mt-4 text-center">
          <h1 className="font-semibold text-white">{props.name}</h1>
          {/*<span className="text-sm text-gray-400">{props.role}</span>*/}
        </div>
      </div>
    </div>
  );
};

export default function CarouselComponent() {
  return (
    <Carousel>
      {items.map((value, index) => {
        return (
          <CarouselItem
            key={index}
            name={value.name}
            role={value.role}
            imgURL={value.imgURL}
            descripiton={value.descripiton}
          />
        );
      })}
    </Carousel>
  );
}
