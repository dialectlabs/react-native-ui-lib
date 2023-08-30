import React from 'react';
import { TabControllerItemProps } from './TabBarItem';
import { TabControllerImperativeMethods } from './useImperativeTabControllerHandle';
export { TabControllerItemProps, TabControllerImperativeMethods };
export interface TabControllerProps {
    /**
     * The list of tab bar items
     */
    items: TabControllerItemProps[];
    /**
     * Initial selected index
     */
    initialIndex?: number;
    /**
     * callback for when index has change (will not be called on ignored items)
     */
    onChangeIndex?: (index: number, prevIndex: number | null) => void;
    /**
     * When using TabController.PageCarousel this should be turned on
     */
    asCarousel?: boolean;
    /**
     * Pass for custom carousel page width
     */
    carouselPageWidth?: number;
    /**
     * Send if a SafeView is used in the context of the TabController.
     */
    useSafeArea?: boolean;
    children?: React.ReactNode;
}
declare const _default: any;
export default _default;
