import { TimelineProps, PointProps, LineProps, StateTypes, PointTypes, LineTypes } from './types';
export { TimelineProps, PointProps as TimelinePointProps, LineProps as TimelineLineProps, StateTypes as TimelineStateTypes, PointTypes as TimelinePointTypes, LineTypes as TimelineLineTypes };
declare const Timeline: {
    (props: TimelineProps): JSX.Element;
    displayName: string;
    states: typeof StateTypes;
    lineTypes: typeof LineTypes;
    pointTypes: typeof PointTypes;
};
export default Timeline;
