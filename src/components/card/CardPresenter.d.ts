export declare function extractPositionValues(position: string[] | undefined): {
    top: any;
    left: any;
    right: any;
    bottom: any;
};
export declare function generateBorderRadiusStyle({ position, borderRadius }: {
    position: string[] | undefined;
    borderRadius: number | undefined;
}): {
    [key: string]: number | undefined;
};
