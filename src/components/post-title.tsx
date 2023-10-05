import { ReactNode } from "react";

type Params = {
	children?: ReactNode;
};

export default function PostTitle(params: Params): JSX.Element {
	return <h1>{params.children}</h1>;
}
