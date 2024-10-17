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
export interface IInitialState {
  posts: [];
  isLoading: boolean;
  isError: boolean;
  error: any;
}
