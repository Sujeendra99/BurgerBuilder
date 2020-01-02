import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxilaary from '../Auxilaary/Auxilaary';
import useHttpErrorHandler from '../../hooks/http-error-handler';
const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);
        return (
            <Auxilaary>
                <Modal
                    show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Auxilaary>
        );

    }
}
export default withErrorHandler;