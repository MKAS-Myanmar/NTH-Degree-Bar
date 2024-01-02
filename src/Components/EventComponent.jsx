import React from "react";

const EventComponent = ({ event }) => {
  
  return (
    <div className="flex items-start justify-center gap-12 relative">
      <div className="">
        <img
          src={event.image}
          className="w-[24rem]  h-[20rem] object-cover  relative rounded-md cursor-pointer"
          alt=""
        />
      </div>
      <div className="">
        <p>{event.numberOfDay} days events</p>
        <div className="">
          <p>Start from - {event.fromDate}</p>
          <p>End up - {event.toDate}</p>
        </div>
        <h4>{event.name}</h4>
        <p>{event.about}</p>
      </div>

      <div className="absolute top-0 left-28 z-50 w-[15rem]  h-5/6 bg-[#0000009f]">
        <h4>{event.title}</h4>

        <p>{event.fromDate}</p>
        <p>{event.location}</p>

        <button>Event Calendar</button>

      </div>
    </div>
  );
};

export default EventComponent;
