"use client";

import React from "react";
import {CardContent, CardHeader, CardTitle } from "../ui/card";
import AICard from "../common/AICard";

import { CardDetails } from "@/frontend/interfaces/dashboard";

interface Props {
  cards: CardDetails[];
}

const Cards: React.FC<Props> = (props) => {
  const { cards } = props;
  return (
    <div className="flex justify-start gap-14 flex-wrap mb-9">
      {cards.length &&
        cards.map(({ name, count }, index) => (
          <AICard key={index} className="min-w-52 hover:primary transition-colors duration-300">
            <CardHeader className="pt-4 pb-4">
              <CardTitle className="text-lg font-bold">{name}</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="">{count}</p>
            </CardContent>
          </AICard>
        ))}
    </div>
  );
};

export default Cards;
