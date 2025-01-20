import PineconeLogoLeft from "../icons/Pinecone-logo-left";
import PineconeLogoRight from "../icons/Pinecone-logo-right";

const CenterCircle = (props) => {
  const {} = props;
  return (
    <>
      <div className="w-[50%] aspect-square  rounded-full bg-none border border-slate-400 absolute inset-0 m-auto"></div>
      <div className="w-[40%] aspect-square rounded-full bg-none border border-slate-400 absolute inset-0 m-auto"></div>
      <div className="w-[30%] aspect-square rounded-full bg-none border border-slate-400 absolute inset-0 m-auto"></div>
      <div className="w-[20%] aspect-square rounded-full bg-none border border-slate-400 absolute inset-0 m-auto"></div>
      <div className=" flex justify-center items-center w-[10%] rounded-full aspect-square bg-gray-200 border-slate-400 border absolute inset-0 m-auto">
        <div className="flex justify-center items-center gap-[20px] w-[150px] aspect-square rounded-full">
          <PineconeLogoRight />
          <PineconeLogoLeft />
        </div>
        <div></div>
      </div>
    </>
  );
};
export default CenterCircle;
