import React, { useContext } from 'react';
import { BreadcrumbContext } from 'components/Navigation/Breadcrumbs/BreadcrumbContext';
import { IPatientIdentifier } from 'types/IPatient';
import useFetch from 'utils/hooks/useFetch';
import { Row, Spin } from 'antd';
import { Link } from 'react-router-dom';
import './PatientPreview.style.scss';

const PatientPreview = () => {
    const { patientId } = useContext(BreadcrumbContext);
    const { response: patientData } = useFetch<IPatientIdentifier>(
        'fhir/Patient?identifier=urn:oid:2.16.840.1.113883.2.4.6.3|' + patientId,
    );

    return (
        <>
            {!patientData && (
                <Row justify="center">
                    <Spin spin-container size="large" />
                </Row>
            )}
            {patientId !== '' && patientData && patientData.total === 0 && (
                <div className="drawer-container">
                    <p>Fant ingen pasienter med personnummer {patientId} </p>
                </div>
            )}
            {patientId !== '' && patientData && patientData.total === 1 && (
                <>
                    <Link to="/pasient">
                        <div className="drawer-container">
                            <p>
                                {patientData.entry[0].resource.name[0].given[0] +
                                    ' ' +
                                    patientData.entry[0].resource.name[0].family}
                            </p>
                        </div>
                    </Link>
                </>
            )}
        </>
    );
};

export default PatientPreview;
