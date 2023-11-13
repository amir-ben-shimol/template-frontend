import { useContext } from 'react';
import { ModalContext } from '@/ui/UIModal/ModalProvider';

const useModal = () => {
	const props = useContext(ModalContext);

	return props;
};

export default useModal;
