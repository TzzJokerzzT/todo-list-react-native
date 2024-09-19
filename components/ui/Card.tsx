import { Card, Text, Title } from "react-native-paper";
import { CardProps } from "@/types/types.env";
import { cardStyles } from "../styles/Styles";

const Cards = ({ children, type, title, description }: CardProps) => {
  //Styles
  const { card, text } = cardStyles;

  return (
    <Card mode="contained" style={card}>
      <Card.Title title={`Type: ${type}`} />
      <Card.Content>
        <Text style={text} variant="titleLarge">
          Task: {title}
        </Text>
        <Text style={text} variant="bodyMedium">
          Description: {description}
        </Text>
      </Card.Content>
      <Card.Actions>{children}</Card.Actions>
    </Card>
  );
};

export default Cards;
