import React from "react";
import Popcorn from "../components/Popcorn";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/AuthContext";

const Homepage = () => {
  const { user } = UserAuth();

  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="z-10 h-[800px] md:h-[780px] w-[100%] md:w-[1700px] flex items-end">
          <div className="bg-gradient-to-r from-[#060f2f] via-[#601439] to-[#060f2f] w-[1700px] h-[150px] flex justify-center items-center text-white rounded gap-4">
            <div>
              <Popcorn />
            </div>
            <div>
              <p className="text-[20px]">
                Tutto ciò che ami di Netflix a soli 5,49 €.
              </p>
              <p className="text-[15px]">
                Scegli il piano Standard con pubblicità.
              </p>
              <div className="text-blue-500 font-bold mt-1">
                <p>
                  Scopri di più{" "}
                  <FontAwesomeIcon className="ml-2" icon={faChevronRight} />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute w-[100%] h-[700px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

        <div className="absolute w-[65%] top-[20%] p-4 md:p-8 text-white text-center z-[10]">
          <p className="text-3xl md:text-5xl font-bold">
            I più grandi titoli italiani e internazionali sono su Netflix, a
            partire da 5,49 €.
          </p>
          <p className="text-2xl md:text-2xl mt-10">
            Abbonati subito. Disdici quando vuoi.
          </p>
          <p className="text-2xl md:text-xl mt-10">
            Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
            riattivare il tuo abbonamento.
          </p>

          <div className="gap-4 flex items-center justify-center">
            <input
              className="p-3 my-2 bg-black/60 rouded w-4/12 border rounded border-green-600"
              type="email"
              placeholder="Inserisci la tua email"
              autoComplete="current-password"
            />
            <Link to="/home">
              <button className="bg-red-600 py-3 my-6 rounded font-bold ms-5 w-36 text-2xl">
                Inizia
                <FontAwesomeIcon className="ml-2" icon={faChevronRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
