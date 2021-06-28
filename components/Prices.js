export default function Prices({ list, sold }) {
  let listStr = list.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let soldStr = sold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="relative flex flex-col space-y-2 tracking-wide">
      <div className="flex flex-row w-max text-center">
        <div className="bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl text-white px-3">
          List Price
        </div>
        <div className="absolute left-28">${listStr}</div>
      </div>

      <div className="flex flex-row w-max text-center">
        <div className="bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl text-white px-3">
          Sold Price
        </div>
        <div className="absolute left-28">${soldStr}</div>
      </div>
    </div>
  );
}
