import MIT from "../assets/MIT.svg";
import KhanAcademy from "../assets/KhanAcademy.svg";
import Harvard from "../assets/Harvard.svg";
import Princeton from "../assets/Princeton.svg";

export default function Logos() {
  return (
    <section className="bg-gray-5 bg-slate-300 dark:bg-gray-800">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-slate-600 dark:text-white md:text-4xl">
          You&apos;re in good hands
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 bg-slate-200 dark:bg-slate-500 p-10 lg:p-0 items-center justify-center rounded-full">
          <a href="#" className="flex justify-center items-center">
            <img src={MIT} className="h-9   " />
          </a>
          <a href="#" className="flex justify-center items-center">
            <img src={KhanAcademy} className="h-9" />
          </a>
          <a href="#" className="flex justify-center items-center">
            <img src={Harvard} className="h-9" />
          </a>
          <a href="#" className="flex justify-center items-center">
            <img src={Princeton} className="" />
          </a>
        </div>
      </div>
    </section>
  );
}
