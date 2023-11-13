import { type Dispatch, type SetStateAction, useState } from 'react';

type TOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

type TElementType<T> = T extends Array<infer U>[] ? U : T extends object ? T[keyof T] : T;

type TAppendState<T> = (payload: TElementType<T>) => void;

type TReturnType<T> = [T, Dispatch<SetStateAction<T>>, TOnInputChange, TAppendState<TElementType<T>>];

const useAppendState = <T>(initialState: T): TReturnType<T> => {
	const [state, setState] = useState<T>(initialState);

	const onInputChange: TOnInputChange = (e) => {
		if (Array.isArray(state)) {
			setState((prev) => [...(prev as TElementType<T>[]), e.target.value] as T);
		} else if (typeof state === 'object' && state !== null) {
			setState((prev) => ({ ...prev, [e.target.name]: e.target.value }) as T);
		} else {
			setState(e.target.value as unknown as T);
		}
	};

	const appendState: TAppendState<TElementType<T>> = (payload) => {
		if (Array.isArray(state)) {
			setState((prev) => (prev ? ([...(prev as TElementType<T>[]), payload] as T) : ([payload] as T)));
		} else if (typeof state === 'object') {
			setState((prev) => (prev ? ({ ...prev, ...(payload as Partial<T>) } as T) : (payload as T)));
		}
	};

	return [state, setState, onInputChange, appendState];
};

export default useAppendState;
