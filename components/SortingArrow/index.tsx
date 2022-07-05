import { useEffect, useState } from "react";
import { Text } from "react-native";
import { ArrowDown } from "../../assets/icons/ArrowDown";
import { Container, ContentTextWrapper } from "./styles";

export enum SortingType {
  Alpha = 'alphabetic',
  SerialNumber = 'serial-number'
}

type SortingArrowType = {
  onSortingChange?: (value: SortingType) => void;
}

export const SortingArrow: React.FC<SortingArrowType> = ({ onSortingChange }) => {
  const [currentState, setCurrentState] = useState<SortingType>(SortingType.SerialNumber);

  useEffect(() => {
    onSortingChange?.(currentState);
  }, [currentState]);

  const toggleState = () => {
    setCurrentState(previousState => 
      previousState === SortingType.Alpha
        ? SortingType.SerialNumber
        : SortingType.Alpha
    );
  }

  return (
    <Container onPress={toggleState}>
      <ContentTextWrapper>
        {currentState === SortingType.Alpha ? (
          <>
            <Text style={{ fontSize: 8 }}>A</Text>
            <Text style={{ fontSize: 8 }}>Z</Text>
          </>
        ) : (
          <Text style={{ fontSize: 10 }}>#</Text>
        )}
      </ContentTextWrapper>
      <ArrowDown />
    </Container>
  );
}