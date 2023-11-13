import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { classNames } from '@/utils/component';

import modalConfig from './modal.config';
import type { ModalProps, ModalElementProps, ModalRef } from './types';

import classes from './Modal.module.scss';

const DEFAULT_TIMEOUT = 3000;
const INITIAL_ZINDEX = 1000;
const TIME_TO_CLOSE_AFTER_BACKDROP_CLICKED = 500;

type TProps = {
	readonly modal: ModalProps;
	readonly isFirst: boolean;
	readonly isLast: boolean;
	readonly displayModal: VoidFunction;
	readonly hideModal: VoidFunction;
	readonly removeModal: VoidFunction;
} & ModalElementProps;

const Modal = forwardRef<ModalRef, TProps>((props: TProps, forwardedRef) => {
	const { isFirst, isLast, removeModal, hideModal, displayModal } = props;

	const {
		body,
		modalId = 0,
		fullscreen,
		height,
		width,
		maxWidth,
		maxHeight,
		closeOnBackdropClick = true,
		title,
		isShow,
		isFrameless,
		showClose = true,
		showBack = false,
		allowScrolling = true,
		type = 'dialog',
		timeout = type === 'success' ? DEFAULT_TIMEOUT : undefined,
		confirmText,
		cancelText,
		showProgressBar = !!timeout,
		onConfirm,
		onCancel,
		onModalClose,
	} = props.modal;

	const bodyEl = document.getElementById('modals') as HTMLDivElement;
	const modalRef = useRef<HTMLDivElement | null>(null);
	const resolver = useRef<(_: boolean) => void>();
	const [isBackdropClicked, setIsBackdropClicked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const isConfirm = type === 'confirm';
	const isWarning = type === 'warning';
	const isDelete = type === 'delete';
	const isDialog = type === 'dialog';
	const isError = type === 'error';
	const isSuccess = type === 'success';

	const showCancelButton = !!cancelText || isConfirm || isDelete || isError;

	useImperativeHandle(forwardedRef, () => ({
		getResolver() {
			return new Promise((resolve) => {
				resolver.current = resolve;
			});
		},
	}));

	const onHideHandler = () => {
		resolver.current && resolver.current(false);
		timeout ? onConfirm?.() : onCancel?.();
		removeModal?.();
	};

	const onBackdropClick = () => {
		if (closeOnBackdropClick || !modalRef.current) return onHideHandler();

		setIsBackdropClicked(true);

		setTimeout(() => {
			setIsBackdropClicked(false);
		}, TIME_TO_CLOSE_AFTER_BACKDROP_CLICKED);
	};

	const onConfirmHandler = () => {
		if (resolver.current) {
			resolver.current(true);
		} else {
			setIsLoading(true);
			onConfirm?.();
		}

		setIsLoading(false);
		removeModal?.();
	};

	const onStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	const onKeyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (!isLast || e.key !== 'Escape') return;

		onHideHandler();
	};

	const inheritPayload = { modalId, removeModal, hideModal, displayModal, onHideHandler, onConfirmHandler };

	const isDOMElement = typeof body === 'string' || (typeof body === 'object' && typeof body.type === 'string');

	let BodyWithProps = null;

	if (isDOMElement) {
		BodyWithProps = body;
	} else if (typeof body === 'function') {
		BodyWithProps = body(inheritPayload);
	} else if (React.isValidElement(body)) {
		BodyWithProps = React.cloneElement(body, inheritPayload);
	}

	useEffect(() => {
		if (timeout === undefined) return;

		setTimeout(() => {
			onConfirm?.();
			removeModal?.();
		}, timeout);
	}, [timeout]);

	useEffect(() => {
		return () => {
			onModalClose?.();
		};
	}, []);

	return ReactDOM.createPortal(
		<div
			key={modalId}
			style={{ zIndex: INITIAL_ZINDEX + modalId }}
			className={classNames(classes, 'wrapper', {
				'wrapper--first': isFirst,
				'wrapper--hidden': !isShow,
			})}
			onKeyDown={onKeyDownHandle}
			onClick={onBackdropClick}
		>
			<div
				ref={modalRef}
				className={classNames(classes, 'container', {
					'container--fullscreen': fullscreen,
					'container--allowScroll': allowScrolling,
					'container--isBackdropClicked': isBackdropClicked,
				})}
				style={{ width: width, height: height, maxWidth: maxWidth, maxHeight: maxHeight }}
				onClick={onStopPropagation}
			>
				{!isLast && <span className={classes['backdrop']} />}
				{showBack && (
					<div className={classes['back']} onClick={onHideHandler}>
						showBack icon
					</div>
				)}
				{!showBack && showClose && isDialog && (
					<div className={classes['close']} onClick={onHideHandler}>
						<span className={classes['close__icon']}>X</span>
					</div>
				)}
				{!!title && isDialog && <span>{title}</span>}
				<div
					className={classNames(classes, 'container__body', {
						'container__body--center': !isDialog,
						'container__body--allowScroll': allowScrolling,
						'container__body--frameless': isFrameless || timeout,
						'container__body--hasTitle': !!title,
					})}
				>
					{isDelete && <img className={classes['container__image']} src={modalConfig.typesImages.delete.image} alt="delete" />}
					{isWarning && <img className={classes['container__image']} src={modalConfig.typesImages.warning.image} alt="warning" />}
					{isError && <img className={classes['container__image']} src={modalConfig.typesImages.error.image} alt="error" />}
					{isConfirm && <img className={classes['container__image']} src={modalConfig.typesImages.confirm.image} alt="confirm" />}
					{isSuccess && <img className={classes['container__image']} src={modalConfig.typesImages.success.image} alt="success" />}
					{!!title && !isDialog && <h3 className={classes['container__title']}>{title}</h3>}
					{BodyWithProps}
				</div>
				{!!(onCancel || onConfirm || !isDialog) && !timeout && (
					<div className={classes['actions']}>
						{(!!onConfirm || isConfirm || isDelete) && (
							<button className={classes['actions__confirm']} type="button" onClick={onConfirmHandler}>
								{confirmText || modalConfig.buttons.confirmText}
							</button>
						)}
						{isWarning && (
							<button className={classes['actions__close']} type="button" onClick={onHideHandler}>
								{cancelText || modalConfig.buttons.cancelText}
							</button>
						)}
						{showCancelButton && (
							<button className={classes['actions__cancel']} type="button" onClick={onHideHandler}>
								{cancelText || modalConfig.buttons.cancelText}
							</button>
						)}
					</div>
				)}
			</div>
		</div>,
		bodyEl,
	);
});

export default Modal;
