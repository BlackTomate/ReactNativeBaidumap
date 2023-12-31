import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from "react-native";
import Marker from "../marker";
import { ClusterParams } from ".";

const style = StyleSheet.create({
  cluster: {
    borderWidth: 4,
    borderColor: "rgba(245,83,61,0.5)",
    backgroundColor: "rgba(245,83,61,0.9)",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontWeight: "600"
  }
});

type Props = {
  cluster: ClusterParams;
  style?: ViewStyle;
  textStyle?: ViewStyle;
  onPress?: (params: ClusterParams) => void;
};

export default class ClusterView extends React.PureComponent<Props> {
  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress(this.props.cluster);
    }
  };

  renderClusterView = () => {
    const { count } = this.props.cluster;
    const size = 36 + Math.log2(count);
    const clusterStyle = {
      width: size,
      height: size,
      borderRadius: size / 2
    };
    return (
      <TouchableWithoutFeedback>
        <View style={[style.cluster, clusterStyle, this.props.style]}>
          <Text style={[style.text, this.props.textStyle]}>{count}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <Marker
        flat
        onPress={this.onPress}
        coordinate={this.props.cluster.coordinate}
        view={this.renderClusterView}
      />
    );
  }
}
