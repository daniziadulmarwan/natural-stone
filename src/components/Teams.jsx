import React from "react";
import CardTeam from "../elements/CardTeam";

const datas = [
  {
    id: 1,
    img: "public/avatar_01.png",
    name: "Julio",
    job: "Founder",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis itaque adipisci accusamus, ullam ipsa in est quos, nulla unde earum, aliquid iste aspernatur molestiae. Animi vero officiis nisi voluptate illum?",
  },
  {
    id: 2,
    img: "public/avatar_03.png",
    name: "Alhafiz Wijaya",
    job: "Co-Founder",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis itaque adipisci accusamus, ullam ipsa in est quos, nulla unde earum, aliquid iste aspernatur molestiae. Animi vero officiis nisi voluptate illum?",
  },
  {
    id: 3,
    img: "public/avatar_02.png",
    name: "Stella Carissa",
    job: "Bussiness Development",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis itaque adipisci accusamus, ullam ipsa in est quos, nulla unde earum, aliquid iste aspernatur molestiae. Animi vero officiis nisi voluptate illum?",
  },
];

const Teams = React.forwardRef((props, ref) => {
  return (
    <div className="mt-40" ref={ref}>
      <div className="text-center container mx-auto px-5">
        <h3 className="text-3xl font-semibold text-slate-900">Our Teams</h3>

        <div className="mt-20 flex flex-col md:flex-row gap-3">
          {datas.map((data) => {
            return <CardTeam data={data} />;
          })}
        </div>
      </div>
    </div>
  );
});

export default Teams;
