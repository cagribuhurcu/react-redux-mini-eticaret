import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCardTotal } from "../redux/cardSlice";
import CardComp from "../components/card/CardComp";

const Card = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cards, totalAmount, itemCount } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);

  return (
    <div>
      {cards?.length > 0 ? (
        <div>
          {cards?.map((card, i) => (
            <CardComp key={i} card={card} />
          ))}
          <div className="flex items-center justify-end text-2xl">Toplam Tutar : <span className="font-bold text-3xl ml-2">{totalAmount} TL</span></div>
        </div>
      ) : (
        <div>Kartınız Boş...</div>
      )}
    </div>
  );
};

export default Card;
