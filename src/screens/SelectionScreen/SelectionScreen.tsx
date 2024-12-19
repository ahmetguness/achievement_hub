import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SelectionScreenNavigationProp } from "../../types/Navigation";
import { updateUserType } from "../../hooks/redux_toolkit/slices/UserSlice";
import { UserType } from "../../types/SharedTypes";
import { COLORS } from "../../theme/Colors";

interface OptionButtonProps {
  userType: UserType;
  backgroundColor: string;
  textColor: string;
  onPress: (event: GestureResponderEvent) => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  userType,
  backgroundColor,
  textColor,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.innerContainer, { backgroundColor }]}
    onPress={onPress}
  >
    <Text style={[styles.text, { color: textColor }]}>
      {userType.toUpperCase()}
    </Text>
  </TouchableOpacity>
);

const SelectionScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<SelectionScreenNavigationProp>();

  const pressHandler = (userType: UserType) => {
    dispatch(updateUserType(userType));
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.root}>
      <OptionButton
        userType="parent"
        backgroundColor={COLORS.gradientLeft}
        textColor={COLORS.gradientRight}
        onPress={() => pressHandler("parent")}
      />
      <OptionButton
        userType="child"
        backgroundColor={COLORS.gradientRight}
        textColor={COLORS.gradientLeft}
        onPress={() => pressHandler("child")}
      />
    </View>
  );
};

export default SelectionScreen;
