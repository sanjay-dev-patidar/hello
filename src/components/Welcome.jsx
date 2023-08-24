import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const CardContainer = styled(motion.div)`
  background: linear-gradient(135deg, #007c91, #00a3a6);
  color: white;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const CardIcon = styled.div`
  background: linear-gradient(135deg, #ffcc29, #ff9900);
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Text)`
  margin-top: 1.5rem;
  font-size: 1.1rem;
`;

const Welcome = ({ hideWelcome }) => {
  const { selectedField } = useParams();

  const cardData = [
    {
      title: "Embark on an Enchanted Odyssey of Knowledge and Wonder!",
      content: (
        <>
          <StyledText>
            <FaRocket style={{ marginRight: "0.5rem" }} />
            Immerse yourself in the fusion of imagination and cutting-edge technology. Navigate, explore, and innovate!
          </StyledText>
        </>
      ),
    },
    {
      title: "Enhancements:",
      content: (
        <>
          <StyledText>Endless Exploration: Unfold Insights Seamlessly - Swipe Through Infinite Data!</StyledText>
          <StyledText>Search Magic: Unleash the Power of Search - Discover Fields Easily!</StyledText>
          <StyledText>ExpandVue: Unlock a World of Possibilities – Effortlessly Reveal Deeper Insights!</StyledText>
          <StyledText>Magnify Search: Enter Keywords to Spotlight Fields!</StyledText>
          <StyledText>Words Unleashed: Words Have No Limits!</StyledText>
        </>
      ),
    },
    {
      title: "Ignite the Flames of Curiosity!",

      content: (
        <>
          <StyledText>
            <FaRocket style={{ marginRight: "0.5rem" }} />
            Uncover the hidden stories within the data. Navigate effortlessly and explore every insight using futuristic interfaces.
          </StyledText>
        </>
      ),
    },
  ];

  if (selectedField) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ display: hideWelcome ? "none" : "block" }}
      >
        <Box p={4} bg="white" color="black" boxShadow="md" rounded="md">
          <Text fontSize="xl" fontWeight="bold" color="#FFB300">
            Displaying Content for Field: {selectedField}
          </Text>
          {cardData.map((card, index) => (
            <CardContainer
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CardIcon>
                <FaRocket />
              </CardIcon>
              <Text fontSize="xl" fontWeight="bold" color="#FFB300">
                {card.title}
              </Text>
              {card.content}
            </CardContainer>
          ))}
        </Box>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ display: hideWelcome ? "none" : "block" }}
    >
      {cardData.map((card, index) => (
        <CardContainer
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <CardIcon>
            <FaRocket />
          </CardIcon>
          <Text fontSize="xl" fontWeight="bold" color="#FFB300">
            {card.title}
          </Text>
          {card.content}
        </CardContainer>
      ))}
    </motion.div>
  );
};

export default Welcome;
