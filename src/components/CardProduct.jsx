import shoes from "../assets/image-card.jpg";
import star from "../assets/star.svg";
import starHalf from "../assets/star-half.svg";
import car from "../assets/car.svg";

export default function CardProduct() {
  return (
    <figure className="mx-auto max-w-[34.625rem] bg-white rounded-3xl overflow-hidden shadow-2xl">
      <div>
        <img src={shoes} alt="" />
      </div>
      <figcaption className="p-8 sm:p-15">
        <div className="space-y-6">
          <h2 className="font-bold text-3xl sm:text-[2.625rem]">
            Nike air Max 90
          </h2>
          <p className="font-normal sm:font-medium text-lg sm:text-xl">
            Eleve seu estilo com o clássico reinventado. Conforto supremo
            encontra design inovador
          </p>
          <div className="flex gap-2 sm:gap-2.5 items-center">
            <img className="size-5 sm:size-auto" src={star} alt="" />
            <img className="size-5 sm:size-auto" src={star} alt="" />
            <img className="size-5 sm:size-auto" src={star} alt="" />
            <img className="size-5 sm:size-auto" src={star} alt="" />
            <img className="size-5 sm:size-auto" src={starHalf} alt="" />
            <span className="ml-3 sm:ml-0 text-sm sm:text-xl text-neutral-500">
              4.8 (42 avaliações)
            </span>
          </div>
        </div>
        <div className="my-7 flex justify-between items-center">
          <strong className="font-bold text-[1.9rem] sm:text-[2.5rem] text-sky-500">
            R$ 899,00
          </strong>
          <a
            className="group/btn rounded-full bg-linear-90 from-sky-500 to-indigo-900/47 px-4 py-2 sm:px-6 sm:py-3.5 text-white text-sm sm:font-semibold sm:text-xl transition duration-400 hover:from-indigo-900 hover:to-indigo-900 border-2 hover:border-indigo-500 hover:shadow-2xl"
            href=""
          >
            <span className="group-hover/btn:shadow-2xl transition duration-450">
              Comprar agora
            </span>
          </a>
        </div>
        <div className="text-neutral-400 text-base sm:text-xl sm:font-medium flex gap-4 items-center">
          <img className="size-5" src={car} alt="" />
          <span>Frete grátis para todo o Brasil</span>
        </div>
      </figcaption>
    </figure>
  );
}
