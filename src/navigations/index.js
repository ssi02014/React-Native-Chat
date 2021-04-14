import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { Spinner } from "../components";
import { ProgressContext, UserContext } from '../contexts';
import { useContext } from "react/cjs/react.development";

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);
  const { user } = useContext(UserContext);
  return (
    <NavigationContainer>
      {user?.uid && user?.email ? <MainStack /> : <AuthStack />}
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

export default Navigation;
