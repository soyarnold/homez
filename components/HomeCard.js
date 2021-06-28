import HomeAddress from "./HomeAddress";
import HomeDetails from "./HomeDetails";
import Prices from "./Prices";

export default function HomeCard({ homeData }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-16">
        {/* Iterate through every home. */}
        {homeData.map((home) => (
          <div
            key={home.property_id}
            className="flex flex-col space-y-2 rounded-xl overflow-hidden"
          >
            {/* Display primary listing photo. */}
            <div>
              <img
                src={
                  home.primary_photo == null
                    ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                    : home.primary_photo.href
                }
                className="rounded-xl overflow-hidden"
              />
            </div>
            {/* Display the full address of the home. */}
            <div>
              <HomeAddress
                address={home.location.address.line}
                city={home.location.address.city}
                state={home.location.address.state_code}
                zipcode={home.location.address.postal_code}
              />
            </div>
            {/* Display beds, baths, sqft, and sqft lot */}
            <div>
              <HomeDetails
                beds={home.description.beds}
                baths={home.description.baths}
                sqft={home.description.sqft}
                lot_sqft={home.description.lot_sqft}
              />
            </div>
            {/* Display the list and sold price. */}
            <div>
              <Prices
                list={home.list_price}
                sold={home.description.sold_price}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
