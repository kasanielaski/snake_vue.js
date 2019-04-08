export type Coord = {
    x: number;
    y: number;
};

export interface IRootState {}

export interface IGameState {
    score: number;
    direction: Coord;
    cellSize: number;
    field: Coord[];
    isEnable: boolean;
    intervalId: number | null;
    fieldConfig: {
        width: number;
        height: number;
    };
    snakeHead: Coord;
    snakeBody: Coord[];
    food: Coord;
    isEndGame: boolean;
}
