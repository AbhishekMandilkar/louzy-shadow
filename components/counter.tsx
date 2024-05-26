"use client";

import { useState } from "react";
import {Button} from "./ui/button";

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<Button  onClick={() => setCount(count + 1)}>
			Count is {count}
		</Button>
	);
};
