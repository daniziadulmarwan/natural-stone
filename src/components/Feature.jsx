import React from "react";
import CardFeature from "../elements/CardFeature";

import IntegrityImg from "/integration.png";
import QualityImg from "/quality.png";
import CommitImg from "/commitment.png";
import InnovImg from "/project.png";

const datas = [
  {
    id: 1,
    img: IntegrityImg,
    title: "Integrity",
    body: "Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.",
  },
  {
    id: 2,
    img: QualityImg,
    title: "Quality",
    body: "Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.",
  },
  {
    id: 3,
    img: CommitImg,
    title: "Commitment",
    body: "Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.",
  },
  {
    id: 4,
    img: InnovImg,
    title: "Innovation",
    body: "Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.",
  },
];

const Feature = React.forwardRef((props, ref) => {
  return (
    <div className="mt-28 text-center container mx-auto px-5" ref={ref}>
      <div className="text-3xl font-bold">
        Our key <span className="text-[#AFA798]">features</span>
      </div>
      <div className="mt-16 grid gap-10 md:gap-20 md:grid-cols-2 md:grid-rows-2 place-content-center place-items-center">
        {datas.map((data) => {
          return <CardFeature data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
});

export default Feature;
