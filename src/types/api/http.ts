export type THttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export type TRefreshTokenRoute = {
	readonly method: THttpMethod;
	readonly path: string;
};
