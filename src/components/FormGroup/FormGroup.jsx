import React from 'react';
import styles from './FormGroup.module.sass'
import { Form } from 'react-bootstrap'

function FormGroup({label, id, type, name, placeholder, value, handleChange, error, disabled }) {

    return (
        <Form.Group className={styles['form-gr']} controlId={id}>
            <Form.Label className={styles['form-label']}>{label} :</Form.Label>
            <Form.Control
                className={styles['form-input']}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                disabled={disabled}
            />
            {
                error && (
                    <p className={styles['error']}>{error}</p>
                )
            }
        </Form.Group>
    );

}

export default FormGroup;
