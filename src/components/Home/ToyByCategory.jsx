import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";
import AnimatedSection from "../AOS-Animate/AnimatedSection";
import { Slide } from "react-awesome-reveal";

const ToyByCategory = () => {

  // Getting all the toys data using fetch
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch("https://doll-fairyworld-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);

  // extract the unique category names from the "toysData" array
  const uniqueCategories = [...new Set(toysData.map((toy) => toy.category))];
  // console.log(uniqueCategories);

  return (
    <div className="my-32">
      <Slide>
        <h2 className="text-2xl lg:text-3xl font-bold text-center mt-16 mb-8">
          Shop by <span className="text-gradient">Category</span>
        </h2>
        <p className="py-6 text-center">
          Here you can find most lovely toys of your dream. The toy dolls are
          organized here by their category.
          <br /> <br /> You can find them easily just by clicking onto the
          catogory tabs below.
        </p>
      </Slide>

      <Tabs className="my-5">
        <TabList className="font-bold text-xl text-center">
          <Tab>{uniqueCategories[0]}</Tab>
          <Tab>{uniqueCategories[1]}</Tab>
          <Tab>{uniqueCategories[2]}</Tab>
          <Tab>{uniqueCategories[3]}</Tab>
        </TabList>

        <TabPanel>
          <AnimatedSection>
            <ToyCard category={uniqueCategories[0]}></ToyCard>
          </AnimatedSection>
        </TabPanel>
        <TabPanel>
          <AnimatedSection>
            <ToyCard category={uniqueCategories[1]}></ToyCard>
          </AnimatedSection>
        </TabPanel>
        <TabPanel>
          <AnimatedSection>
            <ToyCard category={uniqueCategories[2]}></ToyCard>
          </AnimatedSection>
        </TabPanel>
        <TabPanel>
          <AnimatedSection>
            <ToyCard category={uniqueCategories[3]}></ToyCard>
          </AnimatedSection>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyByCategory;
