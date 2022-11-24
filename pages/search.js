import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const search = ({ searchResult }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");

  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  useEffect(() => {
    if (router.isReady) {
    }
  }, [router.isReady]);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guest`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {noOfGuest} number of sguests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map(
              (
                { img, location, title, description, star, price, total },
                index
              ) => (
                <InfoCard
                  key={index}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
