import {createContext} from "react";
import {RezeptParsed} from "/imports/api/models/rezept";

/** Das gerade angezeigte Rezept. Wird von ContentWrapper bereitgestellt. */
export const RezeptContext = createContext<RezeptParsed | undefined>(undefined);
