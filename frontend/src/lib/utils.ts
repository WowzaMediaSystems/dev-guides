/*
 * This code and all components (c) Copyright 2025, Wowza Media Systems, LLC. All rights reserved.
 * This code is licensed pursuant to the Wowza Public License version 1.0, available at https://github.com/WowzaMediaSystems/dev-guides/blob/main/LICENSE.txt.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
