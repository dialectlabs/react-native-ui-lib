import { Component } from 'react';
export declare enum PanningDirectionsEnum {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}
export type PanningDirectionsUnion = 'up' | 'down' | 'left' | 'right';
export type PanningDirections = PanningDirectionsEnum | PanningDirectionsUnion;
export interface PanLocationProps {
    left?: number;
    top?: number;
}
export interface PanDirectionsProps {
    x?: PanningDirections;
    y?: PanningDirections;
}
export interface PanAmountsProps {
    x?: number;
    y?: number;
}
interface State {
    isPanning: boolean;
    wasTerminated: boolean;
    dragDirections: PanDirectionsProps;
    dragDeltas: PanAmountsProps;
    swipeDirections: PanDirectionsProps;
    swipeVelocities: PanAmountsProps;
    panLocation: PanLocationProps;
}
/**
 * @description: Wraps the panResponderView and panListenerView to provide a shared context
 */
export default class PanningProvider extends Component<any, State> {
    static displayName: string;
    static Directions: typeof PanningDirectionsEnum;
    constructor(props: any);
    getProviderContextValue: () => {
        onPanStart: () => void;
        onPanRelease: () => void;
        onPanTerminated: () => void;
        isPanning: any;
        wasTerminated: any;
        onDrag: ({ directions, deltas }: {
            directions: PanDirectionsProps;
            deltas: PanAmountsProps;
        }) => void;
        dragDirections: any;
        dragDeltas: any;
        onSwipe: ({ directions, velocities }: {
            directions: PanDirectionsProps;
            velocities: PanAmountsProps;
        }) => void;
        swipeDirections: any;
        swipeVelocities: any;
        onPanLocationChanged: (location: PanLocationProps) => void;
        panLocation: any;
    };
    onPanStart: () => void;
    onPanRelease: () => void;
    onPanTerminated: () => void;
    onDrag: ({ directions, deltas }: {
        directions: PanDirectionsProps;
        deltas: PanAmountsProps;
    }) => void;
    onSwipe: ({ directions, velocities }: {
        directions: PanDirectionsProps;
        velocities: PanAmountsProps;
    }) => void;
    onPanLocationChanged: (location: PanLocationProps) => void;
    render(): any;
}
export {};
