import React, { useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton, GestureHandlerRootView } from "react-native-gesture-handler";

type Props = {
  children: React.ReactNode;
  onSwipeLeft: () => void;   
  onSwipeRight: () => void;  
};

export default function Swipe({ children, onSwipeLeft, onSwipeRight }: Props) {
  const ref = useRef<Swipeable>(null);

  const LeftActions = () => (
    <View style={[styles.action, styles.save]}>
      <Text style={styles.actionText}>Save →</Text>
    </View>
  );
  const RightActions = () => (
    <View style={[styles.action, styles.delete]}>
      <Text style={styles.actionText}>← Delete</Text>
    </View>
  );

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={ref}
        renderLeftActions={LeftActions}
        renderRightActions={RightActions}
        onSwipeableOpen={(dir) => {
          if (dir === "left")  onSwipeRight();
          if (dir === "right") onSwipeLeft();
          ref.current?.close();
        }}
      >
        <Pressable>{children}</Pressable>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  action: { justifyContent:"center", paddingHorizontal:16, flex:1 },
  save:   { backgroundColor:"#10b984" },
  delete: { backgroundColor:"#ef4444", alignItems:"flex-end" },
  actionText:{ color:"#fff", fontWeight:"600" }
});
