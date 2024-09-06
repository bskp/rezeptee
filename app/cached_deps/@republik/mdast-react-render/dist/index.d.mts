declare function renderMdast(mdast: any, schema: any, options?: {}): any;

declare const matchType: (type: any) => (node: any) => boolean;
declare const matchHeading: (depth: any) => (node: any) => boolean;
declare const matchZone: (identifier: any) => (node: any) => boolean;
declare const matchParagraph: (node: any) => boolean;
declare const matchImage: (node: any) => boolean;
declare const matchImageParagraph: (node: any) => boolean;
declare const imageSizeInfo: (url: any) => {
    width: string;
    height: string;
};
declare const imageResizeUrl: (url: any, size: any) => any;

export { imageResizeUrl, imageSizeInfo, matchHeading, matchImage, matchImageParagraph, matchParagraph, matchType, matchZone, renderMdast };
