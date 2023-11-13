type SessionStorageValue = string | number | boolean | null | undefined | object;

const useSessionStorage = () => {
	const getSessionStorageValue = (key: string) => {
		const sessionStorageValue = sessionStorage.getItem(key);

		if (sessionStorageValue) {
			return JSON.parse(sessionStorageValue);
		}
	};

	const setSessionStorageValue = (key: string, value: SessionStorageValue) => {
		const sessionStorageValue = JSON.stringify(value);

		sessionStorage.setItem(key, sessionStorageValue);
	};

	return { getSessionStorageValue, setSessionStorageValue };
};

export default useSessionStorage;
