import { SectionTextProp } from "./types";

export const normalizeSectionText = (
    prop?: SectionTextProp | string
): SectionTextProp | undefined => {
    if (!prop) return undefined;
    if (typeof prop === "string") {
        return { text: prop, className: undefined, style: {} };
    }
    return prop;
};
