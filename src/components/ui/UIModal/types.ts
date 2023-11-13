import type { ReactElement, ReactNode } from 'react';

export declare type ModalType = 'confirm' | 'dialog' | 'warning' | 'delete' | 'success' | 'error';

export declare type ModalBodyProps = {
	readonly removeModal: () => void;
	readonly hideModal: () => void;
	readonly displayModal: () => void;
	readonly onConfirmHandler: () => void;
};

export declare type ModalProviderProps = {
	readonly children: ReactNode;
};

export declare type ModalProps = {
	/**
	 * Modal's type: "confirm" | "dialog" | "warning"
	 * `Default: dialog
	 */
	readonly type?: ModalType;
	/**
	 * An optional title to apply for the modal
	 * `Default: undefined
	 */
	readonly title?: string;
	/**
	 * An optional body to apply for the modal, it can be a functional component, a string or a react element
	 * `Default: undefined
	 */
	readonly body?: ((props: Partial<ModalBodyProps>) => ReactElement) | string | ReactElement;
	/**
	 * Set the cancel text button in case of type is "confirm"
	 * `Default: undefined
	 */
	readonly cancelText?: string;
	/**
	 * Set the confirm text button in case of type is "confirm"
	 * `Default: undefined
	 */
	readonly confirmText?: string;
	/**
	 *
	 * `Default: undefined
	 */
	readonly timeout?: number;
	readonly modalId?: number;
	readonly width?: number | string;
	readonly height?: number | string;
	readonly maxWidth?: number | string;
	readonly maxHeight?: number | string;
	readonly fullscreen?: boolean;
	readonly closeOnBackdropClick?: boolean;
	readonly isShow?: boolean;
	readonly isFrameless?: boolean;
	readonly showClose?: boolean;
	readonly showBack?: boolean;
	readonly showProgressBar?: boolean;
	readonly allowScrolling?: boolean;
	readonly onCancel?: () => void;
	readonly onConfirm?: () => void;
	readonly onModalClose?: () => void;
};

export declare type ModalResponse = {
	readonly modalId: number;
};

export declare type ModalRef = {
	readonly getResolver: () => Promise<boolean>;
};

export declare type ModalWrapper = {
	readonly show: (modal: ModalProps) => boolean;
	readonly hide: (modalId: number) => boolean;
	readonly remove: (modalId: number) => boolean;
	readonly display: (modalId: number) => boolean;
	readonly getModalId: () => void;
	readonly clearModals: () => void;
	readonly getModals: () => ModalRef[];
	readonly removeCurrentModal: () => void;
} & Omit<HTMLDivElement, 'remove'>;

export declare type ModalContextProps = {
	readonly modals: ModalProps[] | [] | undefined;
	readonly showModal: (props: ModalProps) => ModalResponse;
	readonly removeModal: (modalId: number) => void;
	readonly displayModal: (modalId: number) => void;
	readonly hideModal: (modalId: number) => void;
	readonly showAsyncModal: (props: ModalProps) => Promise<boolean | undefined>;
	readonly clearModals: () => void;
	readonly removeCurrentModal: () => void;
};

export declare type ModalElementProps = {
	readonly isFirst: boolean;
	readonly isLast: boolean;
} & ModalProps &
	Partial<ModalBodyProps>;
