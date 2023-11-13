/* eslint-disable no-promise-executor-return */
/* eslint-disable react/destructuring-assignment */
import { createContext, useRef } from 'react';
import type { ModalContextProps, ModalProps, ModalProviderProps, ModalResponse, ModalWrapper } from './types';
import Modals from './Modals';

const ModalContext = createContext<Omit<ModalContextProps, 'modals'>>({} as ModalContextProps);

const ModalProvider = ({ children }: ModalProviderProps) => {
	const modalsRef = useRef<ModalWrapper>(null);

	const showModal = (props: ModalProps): ModalResponse => {
		const modalId = modalsRef.current?.getModalId() ?? 0;

		modalsRef?.current?.show({ ...props, isShow: true, modalId });

		return { modalId };
	};

	const showAsyncModal = async (props: ModalProps): Promise<boolean | undefined> => {
		const modalId = modalsRef.current?.getModalId() ?? 0;

		modalsRef.current?.show({ ...props, isShow: true, modalId });

		await new Promise((res) => setTimeout(res, 50));

		return modalsRef.current ? modalsRef.current?.getModals()[modalId]?.getResolver() : true;
	};

	const removeModal = (modalId: number) => {
		modalsRef.current?.remove(modalId);
	};

	const hideModal = (modalId: number) => {
		modalsRef.current?.hide(modalId);
	};

	const displayModal = (modalId: number) => {
		modalsRef.current?.display(modalId);
	};

	const clearModals = () => {
		modalsRef.current?.clearModals();
	};

	const removeCurrentModal = () => {
		modalsRef.current?.removeCurrentModal();
	};

	return (
		<ModalContext.Provider value={{ showModal, showAsyncModal, removeModal, hideModal, displayModal, clearModals, removeCurrentModal }}>
			<Modals ref={modalsRef} />
			{children}
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalProvider };
