const Banner = ({ show, country, discount }) => {
  const isPortugal = country && country.threeLetterCode === "PRT";
  return show ? (
    <div className="relative bg-indigo-600">
      <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          {isPortugal ? (
            <p className="font-medium text-white">
              Hey! Tuga! <br />
              Eu sei bem quanto é que as empresas pagam ai. Se quiseres usa o
              código {""}
              <span className="text-white font-bold underline">
                VIVAORONALDO
              </span>{" "}
              para teres {discount}% de desconto. 🇵🇹
            </p>
          ) : (
            <p className="font-medium text-white">
              Hey! I noticed you are visiting from {country.countryName} and
              this may be a bit too much money. <br />I support Parity
              Purchasing Power and if you need it you can use the code{" "}
              <span className="text-white font-bold underline">
                ILOVE{country.countryName.split(" ").join("").toUpperCase()}
              </span>{" "}
              for a {discount}% discount.
            </p>
          )}
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150"
            aria-label="Dismiss"
          >
            <svg
              className="h-6 w-6 text-white"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Banner;
