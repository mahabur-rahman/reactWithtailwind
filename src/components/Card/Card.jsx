import React from "react";
import "./card.scss";

// data
import CardData from "../../Data/CardData";

const Card = () => {
  return (
    <>
      <section id="card">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {CardData.map((card) => {
              return (
                <div
                  className="2xl:w-4/12 xl:w-4/12 lg:w-4/12 md:w-12/12 sm:w-full w-full"
                  key={card.id}
                >
                  <div className={`${card.bg} card shadow p-12`}>
                    <div className="card_img">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="-mt-20 -ml-20"
                      />
                    </div>
                    <div className="card_content pt-12">
                      <h2 className="text-2xl font-bold text-white">
                        {card.title}
                      </h2>
                      <h3 className="text-white font-bold text-md">
                        {card.subTitle}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
