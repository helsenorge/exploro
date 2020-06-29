import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Search from 'antd/lib/input/Search';
const MyPatients = (props: any) => {
    const handleSearch = (value: any) => {
        setPatientID(value);
    };

    const [patientID, setPatientID] = useState();
    return (
        <>
            <div style={{ marginTop: 90 }}></div>
            <Row gutter={[60, 40]} justify={'center'}>
                <Col span={300}>
                    <p>Søk med personnummer for å finne en pasient.</p>
                    <Search
                    style={{width: 400}}
                        placeholder="Søk etter en pasient!"
                        onSearch={handleSearch}
                    />
                </Col>
            </Row>
            {patientID && props.history.push({ pathname: 'Pasient', state: patientID })}
        </>
    );
};
export default MyPatients;