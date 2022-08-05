import { ArrowLeftIcon } from "@heroicons/react/outline";
import { getGames, GetGamesProps } from "hooks/get-game";
import { getRounds } from "hooks/get-rounds";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Game = () => {
  return (
    <>
      <div className="w-body mx-auto grid grid-cols-2 grid-rows-2 grid-flow-rows">
        <div className="w-cart flex bg-zinc-900 h-32 items-center text-white">
          <div className="flex flex-col p-2 w-52 px-5">
            <div className="flex items-center gap-2">
              <img
                src="https://ssl.gstatic.com/onebox/media/sports/logos/gb8bo2x00XsbvsVp9nGniA_48x48.png"
                alt=""
                width="25"
              />
              <p>Goiás</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://ssl.gstatic.com/onebox/media/sports/logos/LaFlBADLmsjHfGTehCYtuA_48x48.png"
                alt=""
                width="25"
              />
              <p>Coritiba</p>
              <img
                src="https://ssl.gstatic.com/onebox/sports/soccer_timeline/red-card-right.svg"
                alt=""
                width="15"
              />
            </div>
          </div>
          <div className="flex flex-col pl-10 pr-1 border-r-2 border-gray-500 h-20 justify-center">
            <div>2</div>
            <div>1</div>
          </div>
          <div className="flex flex-col pl-5 justify-center items-center">
            <div>FIM</div>
            <div>Dom.,31/07</div>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZrhOXKFQqVVBPvgZiiY6HCortJBowcQivQMqyrc_vjd8mu_--LLul0nsm1A"
              alt="partida"
              width="70"
            />
          </div>
        </div>
        <div className="w-cart flex bg-zinc-900 h-32 items-center text-white">
          <div className="flex flex-col p-2 w-52 px-5">
            <div className="flex items-center gap-2">
              <img
                src="https://ssl.gstatic.com/onebox/media/sports/logos/mSl0cz3i2t8uv4zcprobOg_48x48.png"
                alt=""
                width="25"
              />
              <p>Ceará SC</p>
              <img
                src="https://ssl.gstatic.com/onebox/sports/soccer_timeline/red-card-right.svg"
                alt=""
                width="15"
              />
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png"
                alt=""
                width="25"
              />
              <p>Palmeiras</p>
            </div>
          </div>
          <div className="flex flex-col pl-10 pr-1 border-r-2 border-gray-500 h-20 justify-center">
            <div>1</div>
            <div>2</div>
          </div>
          <div className="flex flex-col pl-5 justify-center items-center">
            <div>FIM</div>
            <div>Dom.,31/07</div>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZrhOXKFQqVVBPvgZiiY6HCortJBowcQivQMqyrc_vjd8mu_--LLul0nsm1A"
              alt="partida"
              width="70"
            />
          </div>
        </div>
        <div className="w-cart flex bg-zinc-900 h-32 items-center text-white">
          <div className="flex flex-col p-2 w-52 px-5">
            <div className="flex items-center gap-2">
              <img
                src="https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png"
                alt=""
                width="25"
              />
              <p>Corinthians</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_48x48.png"
                alt=""
                width="25"
              />
              <p>Botafogo</p>
            </div>
          </div>
          <div className="flex flex-col pl-10 pr-1 border-r-2 border-gray-500 h-20 justify-center">
            <div>1</div>
            <div>0</div>
          </div>
          <div className="flex flex-col pl-5 justify-center items-center">
            <div>FIM</div>
            <div>Dom.,31/07</div>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZrhOXKFQqVVBPvgZiiY6HCortJBowcQivQMqyrc_vjd8mu_--LLul0nsm1A"
              alt="partida"
              width="70"
            />
          </div>
        </div>
        <div className="w-cart flex bg-zinc-900 h-32 items-center text-white">
          <div className="flex flex-col p-2 w-52 px-5">
            <div className="flex items-center gap-2">
              <img
                src="https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_48x48.png"
                alt=""
                width="25"
              />
              <p>São Paulo</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://ssl.gstatic.com/onebox/media/sports/logos/9cwCmoBXGaPJ_Q5cgUeocg_48x48.png"
                alt=""
                width="25"
              />
              <p>Avaí</p>
            </div>
          </div>
          <div className="flex flex-col pl-10 pr-1 border-r-2 border-gray-500 h-20 justify-center ml-2">
          </div>
          <div className="flex flex-col pl-8 justify-center items-center">
            <div>Amanhã</div>
            <div>19:00</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
