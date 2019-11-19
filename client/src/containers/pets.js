import React from "react";
import { drizzleConnect } from "@drizzle/react-plugin";
import Grid from "@material-ui/core/Grid";
import PetCard from "components/petCard";
import PropTypes from "prop-types";

const data = [
  {
    id: 0,
    name: "Frieda",
    picture: "images/scottish-terrier.jpeg",
    age: 3,
    breed: "Scottish Terrier",
    location: "Lisco, Alabama"
  },
  {
    id: 1,
    name: "Gina",
    picture: "images/scottish-terrier.jpeg",
    age: 3,
    breed: "Scottish Terrier",
    location: "Tooleville, West Virginia"
  },
  {
    id: 2,
    name: "Collins",
    picture: "images/french-bulldog.jpeg",
    age: 2,
    breed: "French Bulldog",
    location: "Freeburn, Idaho"
  },
  {
    id: 3,
    name: "Melissa",
    picture: "images/boxer.jpeg",
    age: 2,
    breed: "Boxer",
    location: "Camas, Pennsylvania"
  },
  {
    id: 4,
    name: "Jeanine",
    picture: "images/french-bulldog.jpeg",
    age: 2,
    breed: "French Bulldog",
    location: "Gerber, South Dakota"
  },
  {
    id: 5,
    name: "Elvia",
    picture: "images/french-bulldog.jpeg",
    age: 3,
    breed: "French Bulldog",
    location: "Innsbrook, Illinois"
  },
  {
    id: 6,
    name: "Latisha",
    picture: "images/golden-retriever.jpeg",
    age: 3,
    breed: "Golden Retriever",
    location: "Soudan, Louisiana"
  },
  {
    id: 7,
    name: "Coleman",
    picture: "images/golden-retriever.jpeg",
    age: 3,
    breed: "Golden Retriever",
    location: "Jacksonwald, Palau"
  },
  {
    id: 8,
    name: "Nichole",
    picture: "images/french-bulldog.jpeg",
    age: 2,
    breed: "French Bulldog",
    location: "Honolulu, Hawaii"
  },
  {
    id: 9,
    name: "Fran",
    picture: "images/boxer.jpeg",
    age: 3,
    breed: "Boxer",
    location: "Matheny, Utah"
  },
  {
    id: 10,
    name: "Leonor",
    picture: "images/boxer.jpeg",
    age: 2,
    breed: "Boxer",
    location: "Tyhee, Indiana"
  },
  {
    id: 11,
    name: "Dean",
    picture: "images/scottish-terrier.jpeg",
    age: 3,
    breed: "Scottish Terrier",
    location: "Windsor, Montana"
  },
  {
    id: 12,
    name: "Stevenson",
    picture: "images/french-bulldog.jpeg",
    age: 3,
    breed: "French Bulldog",
    location: "Kingstowne, Nevada"
  },
  {
    id: 13,
    name: "Kristina",
    picture: "images/golden-retriever.jpeg",
    age: 4,
    breed: "Golden Retriever",
    location: "Sultana, Massachusetts"
  },
  {
    id: 14,
    name: "Ethel",
    picture: "images/golden-retriever.jpeg",
    age: 2,
    breed: "Golden Retriever",
    location: "Broadlands, Oregon"
  },
  {
    id: 15,
    name: "Terry",
    picture: "images/golden-retriever.jpeg",
    age: 2,
    breed: "Golden Retriever",
    location: "Dawn, Wisconsin"
  }
];

const Pets = (
  { accounts, contracts: { Adoption } },
  { drizzle: { contracts } }
) => {
  // Get all adopters
  const dataKey = contracts.Adoption.methods.getAdopters.cacheCall();

  // Contract is not yet intialized.
  if (!Adoption.initialized) {
    return <span>Initializing...</span>;
  }

  // If the cache key we received earlier isn't in the store yet; the initial value is still being fetched.
  if (!(dataKey in Adoption.getAdopters)) {
    return <span>Fetching...</span>;
  }

  const adopters = Adoption.getAdopters[dataKey].value;

  const adopt = e => {
    // Retrieve the pet's id
    const id = e.currentTarget.value;

    // Declare this transaction to be observed. We'll receive the stackId for reference.
    const stackId = contracts.Adoption.methods.adopt.cacheSend(id, {
      from: accounts[0]
    });

    // .. track the transaction status ..
  };

  const renderPets = () => {
    return data.map(pet => (
      <Grid item xs={12} sm={3} key={pet.id}>
        <PetCard
          {...pet}
          adopted={
            adopters[pet.id] !== "0x0000000000000000000000000000000000000000"
          }
          onClick={adopt}
        />
      </Grid>
    ));
  };

  return (
    <Grid container spacing={3}>
      {renderPets()}
    </Grid>
  );
};

Pets.propTypes = {
  contracts: PropTypes.object.isRequired
};

Pets.contextTypes = {
  drizzle: PropTypes.object
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    contracts: state.contracts
  };
};

export default drizzleConnect(Pets, mapStateToProps);
