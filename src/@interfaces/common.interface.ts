export type CounterType = {
  id: number;
  value: number;
};

export interface TotalCountProps {
  totalCount: number;
}

export interface ICounterPops {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
