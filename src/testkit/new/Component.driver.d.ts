import { ReactTestInstance } from 'react-test-renderer';
import { RenderResult } from '@testing-library/react-native';
export interface ComponentProps {
    renderTree: RenderResult;
    testID: string;
}
export interface ComponentDriverResult<Props> {
    getElement: () => ReactTestInstance;
    exists: () => boolean;
    getProps: () => Props;
}
export declare const useComponentDriver: <Props>(props: ComponentProps) => ComponentDriverResult<Props>;
export declare const ComponentDriver: <Props>(props: ComponentProps) => ComponentDriverResult<Props>;
