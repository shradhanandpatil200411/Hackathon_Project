import Card from "./Card";
import { data } from "../utils/data";
function CardContainer() {
  return (
    <>
      <div className='mt-10'>
        <div className='text-center'>
          <h1 className='font-[clashSemibold]  tracking-widest'>
            WEAR IT LIKE VIRAT
          </h1>
        </div>
        <div className='w-full overflow-x-auto no-scrollbar'>
          <div className='flex gap-1 whitespace-nowrap'>
            {data.card.map((card, index) => {
              return (
                <Card
                  key={index}
                  heading={card.heading}
                  price={card.price}
                  bigImg={card.bigImg}
                  smImg={card.smImg}
                  off={card.off}
                  cancelPrice={card.cancelPrice}
                  topWearColor={card.topWearColor}
                  bottomWearColor={card.bottomWearColor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardContainer;
