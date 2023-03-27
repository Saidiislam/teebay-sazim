import React, { useState } from "react";
import { ProfileCard } from "../Components/Cards/ProfileCard.jsx";
import {
  Box,
  Flex,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { TopBar } from "./Misc/TopBar.jsx";
import { useQuery } from "@apollo/client";
import {
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_USER,
} from "../Api/Public.jsx";
import { ErrorPage } from "./Misc/ErrorPage.jsx";
import { LoadingSkele } from "./Misc/LoadingSkele.jsx";
import { ProductCard } from "../Components/Cards/ProductCard.jsx";
import { NonNavProductCard } from "../Components/Cards/NonNavProductCard.jsx";
import { FaBible } from "react-icons/all.js";
import { CustomModal } from "../Components/Cards/CustomModal.jsx";

export const ProfilePage = () => {
  const [value, setValue] = useState("UNSOLD");
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      filter: {
        filterBy: "status",
        filterValue: value,
      },
    },
    pollInterval: 500,
  });

  const ProductData = error ? (
    <ErrorPage message={error.message} />
  ) : loading || data.products.length === 0 ? (
    <ErrorPage />
  ) : (
    data.products.map((item) => (
      <NonNavProductCard
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        category={item.categories}
        createdAt={item.updatedAt}
        switchTo={`/product/${item.id}`}
      />
    ))
  );
  return (
    <>
      <Box w={"100%"}>
        {/*Navigation Bar*/}
        <TopBar />
        {/*Profile Card to fetch and show data, static for now*/}
        <ProfileCard
          firstName={"Walter"}
          lastName={"Hartwell White"}
          address={"308 Negra Arroyo Lane, Albuquerque, New Mexico. 87104"}
          email={"fullmethal@lchemist.com"}
          phone={18002255324}
        />

        {/*Creating Tabs Section*/}
        <Tabs marginTop={4} isFitted variant="enclosed">
          {/*5 tabs, that reduces the need of making an extra component to see own my stuff*/}
          <TabList mb="1em">
            <Tab onClick={() => setValue("UNSOLD")}>Unsold</Tab>
            <Tab onClick={() => setValue("BROUGHT")}>Brought</Tab>
            <Tab onClick={() => setValue("SOLD")}>Sold</Tab>
            <Tab onClick={() => setValue("BORROWED")}>Borrowed</Tab>
            <Tab onClick={() => setValue("LENT")}>Lent</Tab>
          </TabList>
          {/*Passing the query inside the TabPanels*/}
          <TabPanels>
            <TabPanel>{ProductData}</TabPanel>
            <TabPanel>{ProductData}</TabPanel>
            <TabPanel>{ProductData}</TabPanel>
            <TabPanel>{ProductData}</TabPanel>
            <TabPanel>{ProductData}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};
