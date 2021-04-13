import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { Spinner } from "../components";
import { ProgressContext } from '../contexts';
import { useContext } from "react/cjs/react.development";

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <MainStack />
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

export default Navigation;
