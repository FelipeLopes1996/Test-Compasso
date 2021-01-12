import React from 'react';

import Button from 'react-bootstrap/Button'

const Butto = ({children}) => {
    return (
        <Button variant="outline-info">{children}</Button>
    );
};

export default Butto;