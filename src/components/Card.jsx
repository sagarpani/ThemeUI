export default function Card() {
  return (
    <div className="max-w-3xl w-full mb-5">

      <div className="rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-900 
        border border-gray-100 dark:border-gray-800">

        {/* Image */}
        <div className="flex justify-center sm:p-10 p-5">
          <img
            className=" md:h-64 object-contain transition-transform duration-500 hover:scale-105"
            src="image.png"
            alt="product"
          />
        </div>

        {/* Content */}
        <div className="text-center px-6 pb-10">

          <h3 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            Above Without Wings,<br/> Finding Another Way
          </h3>

            <div className="mt-2 text-gray-500 dark:text-gray-400">

                <a  href="https://www.coenraadtorlage.co.za/">Coenraad Torlage</a>
            </div>
          


        </div>
      </div>

    </div>
  );
}
