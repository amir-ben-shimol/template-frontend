/* eslint-disable @typescript-eslint/no-explicit-any */

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import type { ModalProps, ModalRef } from './types';
import Modal from './Modal';

type Props = object;

const Modals = forwardRef<any, Props>((_, forwardedRef) => {
	const [modals, setModals] = useState<ModalProps[] | [] | undefined>(undefined);

	const modalsRef = useRef<{ [key: number]: ModalRef }>({});

	const toggleDisplayModal = (modalId: number = 0, isShow: boolean) => {
		const modalIdx = modals?.findIndex((modal) => modal.modalId === modalId);

		if (!modalIdx || modalIdx === -1) return;

		setModals((prevState) =>
			prevState ? [...prevState.slice(0, modalIdx), { ...prevState[modalIdx], isShow }, ...prevState.slice(modalIdx + 1)] : undefined,
		);
	};

	const onRemoveHandler = (modalId: number = 0) => {
		setModals((modals) => modals?.filter((m) => m.modalId !== modalId));
	};

	const onSetModalRef = (modalId: number = 0, ref: ModalRef | null) => {
		if (!modalsRef.current || !ref) return;

		modalsRef.current[modalId] = ref;
	};

	useImperativeHandle(forwardedRef, () => ({
		getModalId() {
			return (modals?.length ?? 0) + 1;
		},
		remove(modalId: number) {
			onRemoveHandler(modalId);
		},
		show(modal: ModalProps) {
			setModals(modals ? [...modals, modal] : [modal]);
		},
		hide(modalId: number) {
			toggleDisplayModal(modalId, false);
		},
		display(modalId: number) {
			toggleDisplayModal(modalId, true);
		},
		clearModals() {
			setModals(undefined);
		},
		getModals() {
			return modalsRef.current;
		},
		removeCurrentModal() {
			return setModals((prevState) => prevState?.slice(0, prevState.length - 1));
		},
	}));

	return (
		<div ref={forwardedRef} id="modals">
			{modals?.map((modal: ModalProps, index: number) => (
				<Modal
					key={modal.modalId}
					ref={(el) => onSetModalRef(modal.modalId, el)}
					modal={modal}
					isFirst={index === 0}
					isLast={index === modals.length - 1}
					removeModal={() => onRemoveHandler(modal.modalId)}
					hideModal={() => toggleDisplayModal(modal.modalId, false)}
					displayModal={() => toggleDisplayModal(modal.modalId, true)}
				/>
			))}
		</div>
	);
});

export default Modals;
